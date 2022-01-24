import React, { Component,useState, useEffect } from 'react'
import {Formik,Form, yupToFormErrors,Field} from 'formik'
import * as Yup from 'yup'
import { Redirect } from 'react-router-dom';
import styled from "styled-components";
import { Container, Button } from '@mui/material';
import { FormInput } from '../../components/FormInput/FormInput';
import { ErrorDisplay } from './style';
import { FormContainer } from '../../components/FormContainer/FormContainer';
import { Header } from '../../components/Header/Header';

const passwordRegExp = /^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/


function SignUpPage() {
    const [didSignUp,setDidSignUp] = useState(false);

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const handleLoggedIn = () => {
       
    }

    useEffect(() => {    
        handleLoggedIn();
    });

    if(isLoggedIn){
        return <Redirect to="/app/home"/>
    }

    if(didSignUp){
        return (
            <FormContainer height='550px' width='500px'>
                    <span>You successfully signed up, now go to your email and confirm your account.</span>
            </FormContainer>
        )
    }

    if(!didSignUp){
        return (  
                <Formik
                    initialValues={{
                        username : '',
                        email : '',
                        password : '',
                        confirmPassword: '',
                    }}
                    validationSchema = {Yup.object({
                        username : Yup.string()
                            .required('Username is required'),
                        email : Yup.string()
                            .email('Invalid email')
                            .required('Email is required'),
                        password : Yup.string()
                            //.matches(passwordRegExp,'Password has to be at least 8 characters long,contain 1 special sign and 1 uppercase letter')
                            .required('Password is required'),
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match')
                            .required('You must confirm your password')
                    })}

                    onSubmit = {async (values,{setSubmitting,setStatus,resetForm}) => {
                        // if(values){
                        //     try{
                        //         let response = await signUpRequest(values);
                        //         setSubmitting(false);
                        //         setDidSignUp(true);
                        //         resetForm();
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
                    {({ errors, touched,status,isSubmitting }) => (
                    <Form>  
                        <FormContainer height='675px' width='500px'> 
                            <Header>Sign Up</Header>   
                            <FormInput type="text" placeholder="Enter your username" name="username" label="Username"/>
                            <FormInput type="text" placeholder="Enter your email" name="email" label="E-mail"/>
                            <FormInput type="password" placeholder="Enter your password" name="password" label="Password"/>
                            <FormInput type="password" placeholder="Enter your password again" name="confirmPassword" label="Confirm Password"/>
                            <Button>Sign up</Button>
                            {status && status.errorMessage ? (
                                    <ErrorDisplay>{status.errorMessage}</ErrorDisplay>
                                ) : null}
                        </FormContainer>
                    </Form>
                    )}
                </Formik>
        )
    }
}
export default SignUpPage;
