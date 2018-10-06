import React from "react";

const style = {
	aboutSection: {
		background: "#D5E2EA",
		minHeight: "100vh"
	},
	mainRow: {
		paddingTop: "60px"
	},
	tylerCalvertImg: {
		width: "250px"
	},
	imgDiv: {
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center"
	},
	aboutDiv: {
		textAlign: "justify",
		display: "flex",
		justifyContent: "center",
		paddingTop: "20px",
		fontSize: "20px"
	},
	skills: {
		marginTop: "60px",
		display: "flex",
		justifyContent: "center"
	},
	skillImgs: {
		marginTop: "40px",
		display: "flex",
		justifyContent: "space-around",
		padding: "10px 50px 10px 50px",
		overflow: "auto"
	},
	header: {
		textShadow: "2px 2px #999"
	},
	p: {
		paddingRight: "10px",
		maxWidth: "520px"
	}
};

const AboutMe = props => (
	<div id="about-me" style={style.aboutSection}>
		<div className="col-md-12">
			<div style={style.mainRow} className="row">
				<div id="imgDiv" style={style.imgDiv} className="col-lg-6">
					<div>
						<img
							alt="Tyler Calvert"
							src="assets/images/Tyler-Calvert.jpg"
							style={style.tylerCalvertImg}
						/>
					</div>
				</div>
				<div id="aboutDiv" style={style.aboutDiv} className="col-lg-6">
					<div>
						<p style={style.p}>
							I am a software developer with a passion for
							building software and applications that simplify,
							and automate everyday tasks. I specialize in UI/UX
							development, but I also have experience with
							building RESTful APIs, mobile development, and in
							data architecture. I'm continually learning and
							exploring new aspects of the coding world, and I am
							always open to new experiences. Feel free to contact
							me with any of your software needs.
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div style={style.skills} className="col-md-12">
					<h2 style={style.header}>My skills</h2>
				</div>
				<div style={style.skillImgs} className="col-md-12">
					<div className="row">{props.children}</div>
				</div>
			</div>
		</div>
	</div>
);

export default AboutMe;
