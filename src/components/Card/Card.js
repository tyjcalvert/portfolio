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
	}
};

const Link = link => (
	<a href={`${link}`} className="card-link">
		Link
	</a>
);

const Card = props => (
	<div style={style.card} className="card">
		<img
			className="card-img-top cardImg"
			src={`assets/images/${props.image}.png`}
			alt={props.name}
		/>
		<div className="card-body">
			<h5 className="card-title">{props.name}</h5>
			<p className="card-text">{props.description}</p>
			<a href={`${props.sourceCode}`} className="card-link">
				Source code
			</a>
			{props.link ? Link(props.link) : null}
		</div>
	</div>
);

export default Card;
