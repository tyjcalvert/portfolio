import React from "react";

const style = {
	aboutSection: {
		background: "#D5E2EA",
		minHeight: "100vh"
	},
	mainRow: {
		paddingTop: "30px"
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
		display: "flex",
		justifyContent: "center",
		paddingTop: "20px",
		fontSize: "20px"
	}
};

const AboutMe = props => (
	<div id="about-me" style={style.aboutSection}>
		<div className="col-md-12">
			<div style={style.mainRow} className="row">
				<div id="imgDiv" style={style.imgDiv} className="col-md-6">
					<div>
						<img
							alt="Tyler Calvert"
							src="../../assets/images/Tyler-Calvert.jpg"
							style={style.tylerCalvertImg}
						/>
					</div>
				</div>
				<div id="aboutDiv" style={style.aboutDiv} className="col-md-6">
					<div>
						<p>
							I am a software developer with a passion for
							building software and applications that simplify,
							and automate everyday life. I specialize in UI/UX
							development, but I also have experience building
							RESTful APIs, mobile development, and in data
							architecture. I'm continually learning and exploring
							new aspects of the coding world, and I am always
							open to new experiences. Feel free to contact me
							with any of software needs.
						</p>
					</div>
				</div>
			</div>
			<div className="row">

			</div>
		</div>
	</div>
);

export default AboutMe;
