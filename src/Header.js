import React from 'react';
import { PropTypes } from 'react';
import Button from './Button';
import GlyphIcon from './GlyphIcon';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
		let val = e.target.value
		let attr = this.props.id;
		this.props.changeHandler(attr,val);
	}
  
  render () {
  return (
    <header className="app-header">
      <div className="container">
        <h1>Reaction</h1>
        <section className="account-ctrl">
          <Button>
            <GlyphIcon icon={"pencil"}/>Join
          </Button>
          <Button>
            <GlyphIcon icon={"ok"}/>Login
          </Button>
        </section>
      </div>
    </header>
  );
  }
}

Header.propTypes = {
 
};

Header.defaultProps = {
	
};

export default Header;