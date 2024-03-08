import '../styles/register.css';
function Register() {
    return (
        <div className="form-container">
            <form action="">
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="fname">First Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="lname">Last Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="col-75">
                        <input type="password" id="password" name="password" placeholder='Password' />
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