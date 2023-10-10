import React, {useState} from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';
import { TextInput, SubmitButton } from './styles';

const ShortenUrlComponent = () => {
    const [url, setUrl] = useState('');
    const [urlExists, setUrlExists] = useState(false); // [1
    const [urlData, setUrlData] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!url) {
            alert('Please enter a url');
            return;
        }

        axios.post('http://localhost:3000/api/url/shorten', {longUrl: url})
            .then(res => {
                setUrlData(res.data);
                setUrlExists(true);
                // console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });

        setUrl('');
    }
    // console.log(url);

    return (
        <div className="container">
        <main role="main" className="inner cover">
            <section style={{paddingTop: 100}} className='w-100 h-100 d-flex flex-column align-items-center justify-content-center'>
                <form className='w-50' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="url">Enter Url</label>
                        <TextInput type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder='http://sample.com' />
                    </div>
                    <div className='d-grid gap-2 col-6 mx-auto'> 
                        <SubmitButton type="submit" >Shorten</SubmitButton>
                    </div>
                </form>
                {urlExists && 
                <div className='w-50' style={{
                    display: 'grid',
                    gridTemplateRows: '30px 1fr'
                }}>
                    <div className='d-grid gap-2 col-6 mx-auto'>
                            <QRCode  value={urlData.shortUrl} />
                    </div>
                    <div className='d-grid gap-2 col-6 mx-auto'>
                            <p style={{
                                textDecoration: 'none',
                                color: 'white',
                                padding: '10px',
                                paddingTop: '240px'
                            }} className='text-center' target="_blank"><a href={urlData.shortUrl}>{urlData.shortUrl}</a></p>
                    </div>
                    {/* <p className='text-center fs-3'>Original URL:</p>
                    <p className='text-center fs-3'><a href={urlData.longUrl}>{urlData.longUrl}</a></p>
                    <p className='text-center fs-3'>Shortened URL:</p>
                    <p className='text-center fs-3'><a href={urlData.shortUrl}>{urlData.shortUrl}</a></p> */}
                </div>
                }
            </section>
        </main>
        </div>
    );
}

export default ShortenUrlComponent;