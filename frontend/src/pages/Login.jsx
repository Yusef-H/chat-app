function Login() {
    return (
        <div className="form-container">
            <legend>Login User</legend>
            <form action="">
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-75">
                        <input type="email" id="email" name="email" placeholder="Your Email.." />
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

export default Login;