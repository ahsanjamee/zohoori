import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';

const Login = () => {
return (
<MDBContainer>
  <MDBRow className="login-container">
    <MDBCol md="5" className="l-col">
      <form>
        <p className="h5 text-center mb-4 l-title">Sign In</p>
        <div className="grey-text">
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Type your password" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <Link to="/dashboard"><MDBBtn color="indigo">Login</MDBBtn></Link>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default Login;