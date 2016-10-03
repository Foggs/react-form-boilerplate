import React from 'react';

class Input extends React.Component {
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

Input.propTypes = {

};

Input.defaultProps = {
	id:'input',
	wrapperClass:'active',
	type:'text',
	disabled: false,
	className: '',
	placeholder: '—', 
};

export default Input;