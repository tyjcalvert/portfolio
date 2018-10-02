import React from "react";

const style = {
	card: {
		margin: "40px 10px 40px 10px",
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		paddingTop: "20px",
		backgroundColor: "#D5E2EA"
	},
	cardImg: {
		width: "65%"
	}
};

const Card = props => (
	<div style={style.card} className="card">
		<img
			style={style.cardImg}
			className="card-img-top"
			src="assets/images/fridgefit.png"
		/>
		<div className="card-body">
			<h5 className="card-title">Card title</h5>
			<p className="card-text">
				Some quick example text to build on the card title and make up
				the bulk of the card's content.
			</p>
			<a href="#" className="card-link">
				Card link
			</a>
			<a href="#" className="card-link">
				Another link
			</a>
		</div>
	</div>
);

export default Card;
