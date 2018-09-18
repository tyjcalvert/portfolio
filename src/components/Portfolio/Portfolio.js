import React, { Component } from "react";
import Navbar from "../Navbar";
import HeaderSection from "../HeaderSection";
import AboutMe from "../AboutMe";
import Projects from "../Projects";

class Portfolio extends Component {
	state = {};

	style = {
		marginTop: "15vh"
	};

	render() {
		return (
			<div>
				<Navbar />
				<div style={this.style} className="wrapper">
					<div className="">
						<HeaderSection />
						<AboutMe />
						<Projects />
					</div>
				</div>
			</div>
		);
	}
}

export default Portfolio;
