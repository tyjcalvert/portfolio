import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const style = {
	headerSection: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		alignContent: "center",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center"
	},
	a: {
		margin: "0 5px 0 5px"
	},
	downArrow: {
		width: "50px",
		marginTop: "15vh"
	}
}
const HeaderSection = props => (
	<div id="headerSection" style={style.headerSection} className="">
		<h1>Hello! I'm Tyler.</h1>
		<h2>I'm a Full-Stack Web Developer.</h2>
		<span>
		<a style={style.a} href=""><img alt="linked in" /></a>
		<a style={style.a} href=""><img alt="github"/></a>
		<a style={style.a} href=""><img alt="email" /></a>
		</span>
		<span><AnchorLink href="#about-me"><img className="animated fadeInDown infinite" style={style.downArrow} alt="down arrow" src="../../assets/images/down_arrow.png"/></AnchorLink></span>
	</div>
);

export default HeaderSection;
