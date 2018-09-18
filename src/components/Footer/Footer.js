import React from "react";

const style = {
	footer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "#FFCE00",
		borderTop: "2px solid #60502C",
		padding: "20px 0 20px 0"
	}
};

const Footer = props => (
	<div className="col-12 text-center">
		<div className="row" style={style.footer}>
			<h6> &copy; 2018 - All rights reserved | Made by Tyler Calvert </h6>
		</div>
	</div>
);

export default Footer;
