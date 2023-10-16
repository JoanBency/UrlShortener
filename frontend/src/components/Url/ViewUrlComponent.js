import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';
import { Modal } from 'react-bootstrap';

const ViewUrlComponent = () => {
    const [urlData, setUrlData] = useState([]);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    useEffect(() => {
        const fetchUrlAndSetUrlData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/url`);
            setUrlData(response.data);
        };
        fetchUrlAndSetUrlData();
    }, [urlData]);

    const handleDelete = async (id) => {
        await axios.delete(`${process.env.REACT_APP_API_URL}/api/url/${id}`);
        setUrlData(urlData.filter((url) => url.urlId !== id));
    }

    return(
        <>
            <React.Fragment>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 mx-auto pt-4'>
                            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'white'}} className='card'>
                                <div className='card-body'>
                                    <h2 style={{color: 'white'}} className='card-title'>List of all Urls</h2>
                                    <a href='/shortenUrl'><button type="button" style={{backgroundColor: "rgba(0, 0, 0, 0.5)", border: '1px solid white', color: "white"}} className='btn btn-rounded mb-3'>Shorten Url</button></a>
                                    <div className='table-responsive'>
                                        <table className='table table-hover table-striped table-bordered zero-configuration'>
                                            <thead  style={{height: 40}}>
                                                <tr >
                                                    <th style={{backgroundColor: "rgba(0, 0, 0, 0.5)", border: '1px solid white', color: "white"}}>Original Url</th>
                                                    <th style={{backgroundColor: "rgba(0, 0, 0, 0.5)", border: '1px solid white', color: "white"}}>Shortened Url</th>
                                                    <th style={{backgroundColor: "rgba(0, 0, 0, 0.5)", border: '1px solid white', color: "white"}}>Clicks</th>
                                                    <th style={{backgroundColor: "rgba(0, 0, 0, 0.5)", border: '1px solid white', color: "white"}}>IP Address</th>
                                                    <th style={{backgroundColor: "rgba(0, 0, 0, 0.5)", border: '1px solid white', color: "white"}}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody style={{backgroundColor: '#white', height: 60}}>
                                                    {urlData.map((url) => (
                                                        <tr key={url.urlId}>
                                                            <td style={{backgroundColor: "rgba(0, 0, 0, 0.5)", border: '1px solid white', color: "white"}}>{url.longUrl}</td>
                                                            <td style={{backgroundColor: "rgba(0, 0, 0, 0.5)", border: '1px solid white', color: "white"}}><a style={{textDecoration: 'none'}} href={url.shortUrl} target="_blank">{url.shortUrl}</a></td>
                                                            <td style={{backgroundColor: "rgba(0, 0, 0, 0.5)", border: '1px solid white', color: "white"}}>{url.clicks}</td>
                                                            <td style={{backgroundColor: "rgba(0, 0, 0, 0.5)", border: '1px solid white', color: "white"}}>{url.userIP}</td>
                                                            <td style={{backgroundColor: "rgba(0, 0, 0, 0.5)", border: '1px solid white', color: "white"}}>
                                                                <button type="button" className='btn btn-danger btn-rounded' onClick={() => handleDelete(url.urlId)}>Delete</button>
                                                                <button type="button" className='btn btn-primary btn-rounded' onClick={() => handleShow()}>QRCode</button>
                                                            </td>
                                                            {show && (
                                                                <Modal show={show} onHide={handleClose}>
                                                                    <Modal.Header closeButton>
                                                                        <Modal.Title>QR Code</Modal.Title>
                                                                    </Modal.Header>
                                                                    <Modal.Body>
                                                                        <QRCode value={url.shortUrl} />
                                                                    </Modal.Body>
                                                                    {/* <Modal.Footer>
                                                                        <button type="button" className='btn btn-primary btn-rounded' onClick={handleClose}>Close</button>
                                                                    </Modal.Footer> */}
                                                                </Modal>   
                                                            )}
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>                               
        </>
    );
}

export default ViewUrlComponent;