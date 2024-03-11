import { useContext } from 'react';
import '../styles/register.css';
import { UserContext } from '../context/userContext';
function Register() {
    const { user } = useContext(UserContext);
    const { registerInfo, setRegisterInfo } = useContext(UserContext);
    return (
        <div className="form-container">
            <legend>Register User</legend>
            <form action="">
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="fname">First Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."
                            onChange={(e) => { setRegisterInfo({ ...registerInfo, name: e.target.value }) }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-75">
                        <input type="email" id="email" name="email" placeholder="Your Email.."
                            onChange={(e) => { setRegisterInfo({ ...registerInfo, email: e.target.value }) }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="col-75">
                        <input type="password" id="password" name="password" placeholder='Password'
                            onChange={(e) => { setRegisterInfo({ ...registerInfo, password: e.target.value }) }} />
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Submit" />
                </div>
                <div className="row"></div>
            </form>
        </div>

    );
}

export default Register;