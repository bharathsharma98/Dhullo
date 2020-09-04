import React, { Component } from 'react'
import Input from '../../UI/Input/Input'
import Spinner from '../../UI/Spinner/Spinner'
import Axios from "../../../../src/axios-orders"
import classes from './SignUp.css'
import '../SignUp/SignUp.css'
export default class SignUp extends Component {
    state = {
        customerDetails: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            mobile: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your number'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
        loading: false
    }
    onSubmitHandler = (event) => {
        event.preventDefault(); // to avoid reloading of page when there is event.
        this.setState({loading: true});
        const customerData ={}
        for (let formDataElementIdentifier in this.state.customerDetails){
            customerData[formDataElementIdentifier] = this.state.customerDetails[formDataElementIdentifier].value
        }

        Axios.post('/customerDetails.json', customerData)
            .then(response => {
                this.setState({loading : false})
                this.props.history.push('/')
            })
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedCustomerDetails = {
            ...this.state.customerDetails
        };
        const updatedFormElement = { 
            ...updatedCustomerDetails[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedCustomerDetails[inputIdentifier] = updatedFormElement;
        
        let formValid = true;
        for (let inputIdentifier in updatedCustomerDetails) {
            formValid = updatedCustomerDetails[inputIdentifier].valid && formValid;
        }
        this.setState({customerDetails: updatedCustomerDetails, formIsValid: formValid});
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.customerDetails) {
            formElementsArray.push({
                id: key,
                config: this.state.customerDetails[key]
            });
        }
        let form = (
          
            <form onSubmit={this.onSubmitHandler} className="SignUp">
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button disabled={!this.state.formIsValid}>Submit</button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />;
        }
        return (
            <div className = {classes.SignUp}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}
