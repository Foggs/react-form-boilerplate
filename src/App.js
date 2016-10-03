import React from 'react';
import BookList from './BookList';
import ShippingDetails from './ShippingDetails';
import DeliveryDetails from './DeliveryDetails';
import Confirmation from './Confirmation';
import Success from './Success';
import ModalAlertTimeout from './ModalAlertTimeout';


import './App.css';

const App = React.createClass ({
  getInitialState() {
    return (
      { step: 2,
        books: [
          { id: 1, name: 'Zero to One', author: 'Peter Thiel' },
          { id: 2, name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
          { id: 3, name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
        ],
        formValues: {},
        cartTimeout: 60 * 15
      }
    );
  },



  updateCartTimeout(timeout){
    this.setState({cartTimeout: timeout});
  },

  updateFormData(formData) {
    let formValues = Object.assign({}, this.state.formValues,formData);
    let nextstep = this.state.step + 1;
    this.setState({step: nextstep, formValues: formValues});
  },

  render() {
    console.log(this.state.formValues);

    switch (this.state.step) {
      case 1:
        return <BookList  updateFormData={this.updateFormData}
                          books={this.state.books}/>;
      case 2:
        return <ShippingDetails updateFormData={this.updateFormData}/>;
      case 3:
        return <DeliveryDetails updateFormData={this.updateFormData}/>;
      case 4:
          return <Confirmation data={this.state.formValues}
                               updateFormData={this.updateFormData}/>;
      case 5:
          return <Success data={this.state.formValues}/>;                               
      default: 
        return <BookList updateFormData={this.updateFormData} />;
    }
  }
})

export default App;
