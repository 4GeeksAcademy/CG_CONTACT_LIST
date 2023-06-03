import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<img className="navbar_img" src="https://logowik.com/content/uploads/images/ios-contacts5753.jpg" />
			</Link>
			<div>
				<Link to="/register">
					<button className="btn_navbar">New contact</button>
				</Link>
			</div>
		</nav>
	);
};
