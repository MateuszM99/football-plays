import React, { useEffect, useState } from 'react';
import {Formik,Form,Field} from 'formik';
import * as Yup from 'yup'
import { Redirect, useHistory } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import { FormInput } from '../../components/FormInput/FormInput';
import { ErrorDisplay } from './style';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { Header } from '../../components/Header/Header';

function LoginPage() {
    const history = useHistory();
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const handleLoggedIn = () => {
       
    }

    useEffect(() => {    
        handleLoggedIn();
    });

    if(isLoggedIn){
        return <Redirect to="/app/home"/>
    }

    return (  
        <Formik
            initialValues={{
                username : '',
                password : '',
                }}
                validationSchema = {Yup.object({
                    username : Yup.string()
                        .required('Username is required'),
                    password : Yup.string()
                        .required('Password is required'),
                })}
                
                onSubmit = {async (values,{setSubmitting, setStatus, resetForm}) => {
                // if(values){
                //     try{
                //         let response = await signInRequest(values);
                //         localStorage.setItem('userData',JSON.stringify(response.data));
                //         history.push('/app/home')
                //     } catch(err){
                //         setSubmitting(false);
                //         resetForm();
                //         setStatus({
                //             errorMessage : err.response.data.title
                //         });
                //     }                                                                                                                                                                                        
                // }      
            }}
        >
            {({ errors, touched,isSubmitting,status}) => (
            <Form>
               <FormContainer height='450px' width='500px'>
                    <Header>Login</Header>
                    <FormInput type="text" name="username" label="Username" placeholder="Enter your username"></FormInput>
                    <FormInput type="password" name="password" label="Password" placeholder="Enter your password"></FormInput>
                    <Button>Log in</Button>
                    {status && status.errorMessage ? (
                        <ErrorDisplay>{status.errorMessage}</ErrorDisplay>
                    ) : null}
               </FormContainer>
            </Form>
            )}
        </Formik>
    );
}

export default LoginPage;
