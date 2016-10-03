import React from 'react';
import Input from './Input'

var ShippingDetails = React.createClass({
    getInitialState() {
        return ({
            fullName: '',
            contactNumber: '',
            shippingAddress: '',
            error: false
        });
    },

    _renderError() {
        if (this.state.error) {
            return ( <div className="alert alert-danger"> { this.state.error } </div>);
        }
    },

    _validateInput() {
	    if (this.state.fullName === '') {
	    	this.setState({error: "Please enter full name"});
	    } else if (this.state.contactNumber === '') {
	    	this.setState({error: "Please enter contact number"});
	    } else if (this.state.shippingAddress === '') {
	    	this.setState({error: "Please enter shipping address"});
	    } else {
	    	this.setState({error: false});
	    	return true;
	    }
    },

    handleSubmit(event) {
    	event.preventDefault();
    	var formData = {fullName: this.state.fullName, 
    					contactNumber: this.state.contactNumber,
    					shippingAddress: this.state.shippingAddress };

		if (this._validateInput()) {
			this.props.updateFormData(formData);
		}
	},

	handleChange( attribute, val) {
		let newState = this.state;
		newState[attribute] = event.target.value;
		this.setState(newState);
	},    					

    render() {
    	var errorMessage = this._renderError();

        return (
        	<div className="container"> 
	        	<h1> Enter Shipping Details </h1>
	        	{errorMessage}
	        	<div style={{width: 300}}>
	        		<form onSubmit={this.handleSubmit}>
	        				<Input 	id={'fullName'}
	        							wrapperClass={'form-group'}
	        							placeholder={'Full Name'}
	        							className={'form-control'}
	        							changeHandler={this.handleChange}/>
	        				<Input  id={'contactNumber'}
	        							wrapperClass={'form-group'}
	        							placeholder={'Contact number'}
	        							className={'form-control'}
	        							changeHandler={this.handleChange}/>
	        				<Input  id={'shippingAddress'}
	        							wrapperClass={'form-group'}
	        							placeholder={'Shipping Address'}
	        							className={'form-control'}
	        							changeHandler={this.handleChange}/>
		        		<div className="form-group">
			        		<button type="submit"
							        ref="submit"
							        className="btn btn-success">
							        Submit
			        		</button>
		        		</div>
		        	</form>	
		        </div>
		      </div>  	
        );
    }
});


export default ShippingDetails;
