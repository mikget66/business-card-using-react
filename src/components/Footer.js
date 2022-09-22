import { FaFacebookSquare, FaGithubSquare,  FaInstagramSquare, FaLinkedin, } from 'react-icons/fa';
import {AiFillTwitterSquare } from 'react-icons/ai';

function Footer() {
    return(
    <footer>
        <div className="icons">
        <a href="https://www.facebook.com/profile.php?id=100023482831143" className="icon"><FaFacebookSquare /></a>
        <a href="https://twitter.com/mikelhfzy" className="icon"><AiFillTwitterSquare /></a>
        <a href="https://www.instagram.com/michael_anwar22/?hl=en" className="icon"><FaInstagramSquare /></a>
        <a href="https://github.com/mikget66" className="icon"><FaGithubSquare /></a>
        <a href="#" className="icon"><FaLinkedin /></a>
        </div>
    </footer>
    );
}
export default Footer;