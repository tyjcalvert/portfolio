import React, { Component } from "react";
import Navbar from "../Navbar";
import HeaderSection from "../HeaderSection";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import ContactForm from "../ContactForm";

class Portfolio extends Component {
	state = {};

	render() {
		return (
			<div>
				<Navbar />
				<div className="wrapper">
					<div className="">
						<HeaderSection />
						<AboutMe />
						<Projects />
						<ContactForm />
					</div>
				</div>
			</div>
		);
	}
}

export default Portfolio;
