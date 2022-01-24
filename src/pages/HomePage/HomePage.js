import React from 'react';
import {Link} from 'react-router-dom'
import { FormContainer } from '../../components/FormContainer/FormContainer';

function HomePage() {
  return (
    <div>
      <FormContainer height='550px' width='500px'>
        <Link to="/login">Login</Link>
        <Link to="/signUp">Sign Up</Link>
      </FormContainer>
    </div>
  );
}

export default HomePage;
