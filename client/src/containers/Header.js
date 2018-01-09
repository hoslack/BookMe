import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<a href="#" className="left brand-logo">
							BookMe
						</a>

						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<a href="/auth/google">Google Login</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
