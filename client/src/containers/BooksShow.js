import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BooksShow extends Component {
	render() {
		return (
			<div>
				<Link to="/books/new" className="btn-floating btn-large waves-effect waves-light ">
					<i class="material-icons right">add</i>
				</Link>
			</div>
		);
	}
}

export default BooksShow;
