import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const style = {
	headerSection: {
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		alignContent: "center",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		color: "#fff",
		marginTop: "10vh",
		textShadow: "2px 2px #282828"
	},
	a: {
		margin: "0 5px 0 5px"
	},
	downArrow: {
		width: "50px",
		marginTop: "15vh"
	},
	linkSpan: {
		marginTop: "20px"
	},
	img: {
		width: "80px"
	}
};

const HeaderSection = props => (
	<div id="headerSection" style={style.headerSection} className="">
		<h1>Hello! I'm Tyler.</h1>
		<h2>I'm a Full-Stack Web Developer.</h2>
		<span style={style.linkSpan}>
			<a
				style={style.a}
				target="_blank"
				rel="noreferrer noopener"
				href="https://www.linkedin.com/in/tyler-calvert-a8695714b/"
			>
				<img
					className="circleLinks"
					src="assets/images/linkedin.png"
					alt="linkedin"
				/>
			</a>
			<a
				style={style.a}
				target="_blank"
				rel="noreferrer noopener"
				href="https://github.com/tyjcalvert"
			>
				<img
					className="circleLinks"
					src="assets/images/github.png"
					alt="github"
				/>
			</a>
			<AnchorLink style={style.a} href="#contact">
				<img
					className="circleLinks"
					src="assets/images/gmail.png"
					alt="email"
				/>
			</AnchorLink>
		</span>
		<span>
			<AnchorLink offset="70" href="#about-me">
				<span>
					<img
						className="animated fadeInDown infinite"
						style={style.downArrow}
						alt="down arrow"
						src="assets/images/down_arrow.png"
					/>
				</span>
			</AnchorLink>
		</span>
	</div>
);

export default HeaderSection;
