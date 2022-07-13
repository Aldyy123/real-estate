import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonLink = styled(Link)`
text-align: center;
background: ${props => props.colorbg || '#42505C'};
border-radius: ${props => props.radius || '50px'};
width: ${props => props.width || '80%'};
color: white;
padding: 5px;
text-decoration: none;
`
const Button = styled.button`
text-align: center;
background: ${props => props.colorBg || '#42505C'};
border-radius: ${props => props.radius || '50px'};
width: 100px;
color: #79828B;
padding: 5px;
text-decoration: none;
cursor: pointer;
outline: none;
border: none;
&:focus : {
    outline: none;
    border: none;
}
`

export { ButtonLink, Button }
