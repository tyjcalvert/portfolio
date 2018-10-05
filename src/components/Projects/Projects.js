import React from "react";

const style = {
	projectSection: {
		minHeight: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: "40px"
	},
	carouselDiv: {
		marginTop: "5%"
	},
	header: {
		textAlign: "center",
		color: "#fff",
		textShadow: "2px 2px #282828"
	}
};

const Projects = props => (
	<div className="col-12" id="projects" style={style.projectSection}>
		<div id="carouselDiv" style={style.carouselDiv}>
			<h2 style={style.header}>Portfolio</h2>
			{props.children}
		</div>
	</div>
);

export default Projects;
