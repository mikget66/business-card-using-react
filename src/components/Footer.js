import { FaFacebookSquare, FaGithubSquare,  FaInstagramSquare, FaLinkedin, } from 'react-icons/fa';
import {AiFillTwitterSquare } from 'react-icons/ai';

function Footer() {
    return(
    <footer>
        <div className="icons">
        <a href="https://www.figma.com" className="icon"><FaFacebookSquare /></a>
        <a href="https://www.figma.com" className="icon"><AiFillTwitterSquare /></a>
        <a href="https://www.figma.com" className="icon"><FaInstagramSquare /></a>
        <a href="https://www.figma.com" className="icon"><FaGithubSquare /></a>
        <a href="https://www.figma.com" className="icon"><FaLinkedin /></a>
        </div>
    </footer>
    );
}
export default Footer;