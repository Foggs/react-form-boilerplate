import React from 'react';
import { PropTypes } from 'react';


class GlyphIcon extends React.Component {
	render() {
		return (
			<span className={'glyphicon glyphicon-'+ this.props.icon}></span>
		);
	}
}

GlyphIcon.propTypes = {
	type: PropTypes.string.isRequired,
};

GlyphIcon.defaultProps = { 
	icon:''
};


export default GlyphIcon;