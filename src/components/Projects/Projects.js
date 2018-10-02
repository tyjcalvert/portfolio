import React from "react";

const style = {
	projectSection: {
		minHeight: "100vh",
		display: "flex",
		justifyContent: "center",
		paddingBottom: "40px"
	},
	carouselDiv: {
		width: "90%",
		marginTop: "5%"
		// borderRight: "solid 1px",
		// borderLeft: "solid 1px",
		// borderColor: "rgb(213,226,234, 0.2)"
	},
	header: {
		textAlign: "center",
		color: "#fff",
		textShadow: "2px 2px #282828"
	}
};

const Projects = props => (
	<div className="col-12" id="projects" style={style.projectSection}>
		<div style={style.carouselDiv}>
			<h2 style={style.header}>Portfolio</h2>
			{props.children}
		</div>
	</div>
);

export default Projects;
