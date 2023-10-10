import { type } from '@testing-library/user-event/dist/type'
import styled from 'styled-components'
// import { NavLink as Link } from 'react-router-dom'

export const TextInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`

export const SubmitButton = styled.button`
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    padding: 10px;
    text-decoration: none;
    width: 100%;
    padding: 14px 20px;
    margin: 8px 0;
    cursor: pointer;
`