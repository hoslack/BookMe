import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchBooks } from '../actions';

class BooksShow extends Component {
	componentDidMount() {
		this.props.fetchBooks();
	}

	renderBooks() {
		return _.map(this.props.books, book => {
			return (
				<li className="collection-item" key={book.id}>
					{book.title}
				</li>
			);
		});
	}
	render() {
		console.log(this.props.books);
		return (
			<div>
				<ul className="collection">{this.renderBooks()}</ul>
				<Link to="/books/new" className="btn-floating btn-large waves-effect waves-light ">
					<i class="material-icons right">add</i>
				</Link>
			</div>
		);
	}
}

const mapStateToProps = ({ books }) => {
	return { books };
};

export default connect(mapStateToProps, { fetchBooks })(BooksShow);
