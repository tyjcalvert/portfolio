import React, { Component } from "react";
import Navbar from "../Navbar";
import HeaderSection from "../HeaderSection";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import ContactForm from "../ContactForm";
import ImageCard from "../ImageCard";
import SkillsJson from "../../json/skills.json";
import { Carousel } from "react-responsive-carousel";
import Card from "../Card";
import PortfolioJson from "../../json/portfolio.json";

class Portfolio extends Component {
	state = {
		skills: SkillsJson,
		portfolio: PortfolioJson
	};

	render() {
		return (
			<div>
				<Navbar />
				<div className="wrapper">
					<HeaderSection />
					<AboutMe>
						{this.state.skills.map(skill => (
							<ImageCard
								key={skill.id}
								name={skill.name}
								image={skill.image}
							/>
						))}
					</AboutMe>
					<Projects>
						<Carousel showStatus={false} showThumbs={false}>
							{this.state.portfolio.map(project => (
								<Card
									key={project.id}
									image={project.image}
									name=""
									description=""
									link={""}
									sourceCode={""}
								/>
							))}
						</Carousel>
					</Projects>
					<ContactForm />
				</div>
			</div>
		);
	}
}

export default Portfolio;
