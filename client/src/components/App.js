import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from '../containers/Header';
import BookNew from '../containers/BookNew';
import BooksShow from '../containers/BooksShow';

const Landing = () => <h1>Landing</h1>;

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />

						<Route exact path="/" component={Landing} />
						<Route exact path="/books" component={BooksShow} />
						<Route exact path="/books/new" component={BookNew} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
