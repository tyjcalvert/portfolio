import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const style = {
	navbar: {
		background: "#FFCE00",
		borderBottom: "2px solid #60502C",
		position: "fixed",
		top: "0",
		width: "100%",
		zIndex: "1000",
		minHeight: "10vh",
		fontSize: "22px"
	},
	links: {
		justifyContent: "flex-end"
	},
	brand: {
		fontSize: "28px",
		color: "#555"
	}
};

const Navbar = props => (
	<nav style={style.navbar} className="navbar navbar-expand-lg navbar-light">
		<AnchorLink
			style={style.brand}
			offset="80"
			className="navbar-brand"
			href="#headerSection"
		>
			Tyler Calvert
		</AnchorLink>
		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon" />
		</button>
		<div
			style={style.links}
			className="collapse navbar-collapse"
			id="navbarNav"
		>
			<ul className="navbar-nav">
				<li className="nav-item">
					<AnchorLink
						offset="70"
						className="nav-link"
						href="#about-me"
					>
						About Me
					</AnchorLink>
				</li>
				<li className="nav-item">
					<AnchorLink
						offset="70"
						className="nav-link"
						href="#projects"
					>
						Portfolio
					</AnchorLink>
				</li>
				<li className="nav-item">
					<AnchorLink
						offset="70"
						className="nav-link"
						href="#contact"
					>
						Contact Me
					</AnchorLink>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;
