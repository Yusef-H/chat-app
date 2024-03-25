import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { baseUrl } from "../utilities/httpReqs";
function Login() {
    const { loginInfo, loginUser, setLoginInfo, loginError } = useContext(UserContext);
    return (
        <div className="form-container">
            <legend>Login User</legend>
            <form onSubmit={loginUser}>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-75">
                        <input type="email" id="email" name="email" placeholder="Your Email.."
                            onChange={(e) => { setLoginInfo({ ...loginInfo, email: e.target.value }) }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="col-75">
                        <input type="password" id="password" name="password" placeholder='Password'
                            onChange={(e) => { setLoginInfo({ ...loginInfo, password: e.target.value }) }} />
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Submit" />
                </div>
                <div className="row"></div>
            </form>
            {
                (loginError != null ?
                    <h3 className='error-msg'>{loginError}</h3> :
                    <h3></h3>)
            }
        </div>

    );
}

export default Login;