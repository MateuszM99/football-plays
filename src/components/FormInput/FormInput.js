import React from 'react';
import styled from "styled-components";
import { useField} from 'formik';


const FormTextInputContainer = styled.div`
`

const FormLabel = styled.label`
    align-self: flex-start;
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: grey;
    padding-top: 30px;
`

const FormTextInput = styled.input`
    display: block;
    margin-top: 15px;
    height: 42px;
    width: ${props => props.width};
    border-radius: 5px;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 300;
    outline: none;
    border: solid 1px lightgrey !important;
    color: black;
    transition: all 0.2s ease;
`

const ErrorDisplay = styled.div`
    margin-top: 5px;
    font-size: 10px;
    height: 15px;
    color: grey;
`


export const FormInput = ({ label, ...props }) => {

    const [field, meta, helpers] = useField(props);
 
    return (
      <FormTextInputContainer>
        <FormLabel>{label}</FormLabel>
        <FormTextInput {...field} {...props} />
        {meta.touched && meta.error ? (
          <ErrorDisplay>{meta.error}</ErrorDisplay>
        ) : <ErrorDisplay/>}
      </FormTextInputContainer>
    );
};