import React from 'react';
import { PropTypes } from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
		let val = e.target.value
		let attr = this.props.id;
		this.props.changeHandler(attr,val);
	}
  
  render() {
    return (
  		<div className={this.props.wrapperClass}>
  			<input  ref={this.props.id}
  							disabled={this.props.disabled}
  							className={this.props.className}
  	        		type={this.props.type}
  	        		placeholder={this.props.placeholder}
  	        		onChange={this.handleChange.bind(this)} />
         </div>	
    );
  }
}

TextInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  wrapperClass: PropTypes.string,
  disabled: PropTypes.bool,
};

TextInput.defaultProps = {
	id:'input',
	wrapperClass:'active',
	type:'text',
	disabled: false,
	className: '',
	placeholder: '', 
};

export default TextInput;