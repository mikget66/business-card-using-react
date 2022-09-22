import  Profile  from "../images/profile.jpeg";
import { MdEmail } from 'react-icons/md';

function ProfileInfo(){
    return(
        <div className="p">
            <img src={Profile} width="100%" alt=""></img>
            <h1>Michael Anwar</h1>
            <p>developer</p>
            <p><a href="https://www.figma.com">michaelanwea.website</a></p>
            <button>
                <a href="https://www.mikelhfzy@gmail.com">
                    <div>
                        <MdEmail />
                    </div>
                    Email
                </a>
            </button>
        </div>
    );    
}
export default ProfileInfo;