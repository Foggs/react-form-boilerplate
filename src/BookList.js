import React from 'react';


var BookList = React.createClass ({
	getInitialState() {
		return (
			{ 	
				selectedBooks: [],
				error: false 
			}
		);
	},

	renderBook(book) {
		return(
			<div className="checkbox" key={book.id}>
				<label>
					<input type="checkbox" 
					value={book.name}
					onChange={this.handleSelectedBooks}
					/> {book.name} -- {book.author}
				</label>
			</div>
		);
	},

	_renderError() {
		if (this.state.error) {
			return (
				<div className="alert alert-danger">
					{this.state.error}
				</div>
			);
		}
	},

	handleSelectedBooks(event) {
		var selectedBooks = this.state.selectedBooks;
		var index = selectedBooks.indexOf(event.target.value);
		if (event.target.checked) {
			if (index === -1)
				selectedBooks.push(event.target.value);
			} else {
			selectedBooks.splice(index, 1);
		}
		this.setState({selectedBooks: selectedBooks });
	},

	handleSubmit(event) {
		event.preventDefault();
		if(this.state.selectedBooks.length === 0) {
			this.setState({error: 'Please choose at least one book to continue'});
		} else {
			this.setState({error: false});
			this.props.updateFormData({ selectedBooks: this.state.selectedBooks });
		}
	},

    render() {
    	var errorMessage = this._renderError();
        return (
        	<div className="container"> 
	        	<h3>Choose from wide variety of books available in our store. </h3>
	        	{errorMessage}
	        	<form onSubmit={this.handleSubmit}>
	        		{this.props.books.map((book) => {
	        			return this.renderBook(book); })
	        		}
	        		<input type="submit" className="btn btn-success" />
	        	</form>
        	</div>
        );
    }
});


export default BookList;
