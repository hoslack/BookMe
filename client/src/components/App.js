import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h1>Header</h1>;
const Books = () => <h1>Books</h1>;
const Landing = () => <h1>Landing</h1>;

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/books" component={Books} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
