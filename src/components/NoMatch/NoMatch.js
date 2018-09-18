import React from "react";

const style = {
	noMatch: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "calc(100vh - 10vh - 3px)"
	},
	text: {
		color: "#FFCE00",
		textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black"
	}
};

const NoMatch = props => (
	<div style={style.noMatch} className="wrapper">
		<h1 style={style.text}>404 Page Not Found</h1>
		<h1>
			<span role="img" aria-label="Face With Rolling Eyes Emoji">
				🙄
			</span>
		</h1>
	</div>
);

export default NoMatch;
