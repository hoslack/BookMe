import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Google Login</a>
					</li>
				);
			default:
				return (
					<li>
						<a href="/auth/logout">Logout</a>
					</li>
				);
		}
	}

	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<Link to={this.props.auth ? '/books' : '/'} className="left brand-logo">
							BookMe
						</Link>

						<ul id="nav-mobile" className="right hide-on-med-and-down">
							{this.renderContent()}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Header);
