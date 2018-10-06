import React from "react";

const style = {
	contactSection: {
		background: "#D5E2EA",
		minHeight: "100vh",
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center"
	},
	form: {
		width: "75%",
		padding: "20px 0px",
	},
	header: {
		paddingBottom: "20px",
		textShadow: "2px 2px #999"
	},
	subtitle: {
		textShadow: "1px 1px #999"
	}
};

const ContactForm = props => (
	<div id="contact" style={style.contactSection}>
		<form style={style.form} action="https://formspree.io/tyjcalvert@gmail.com" method="POST">
			<h1 style={style.header}>Let's get in contact!</h1>
			<p style={style.subtitle}>Submit the form below to contact me directly.</p>
			<label style={style.subtitle} htmlFor="name">Name:</label>
			<div className="form-group">
				<input
					type="text"
					name="Name"
					className="form-control"
					id="name"
					placeholder="ex. 'John Smith'"
				/>
			</div>
			<label style={style.subtitle} htmlFor="email">Email/Phone Number:</label>
			<div className="form-group">
				<input
					type="text"
					name="Email/Phone"
					className="form-control"
					id="email"
					placeholder="example@email.com / 469-123-4567"
				/>
			</div>
			<label style={style.subtitle} htmlFor="message">Message:</label>
			<div className="form-group">
				<textarea
					className="form-control"
					name="Message"
					rows="3"
					id="message"
					placeholder="Hi, I'd like to discuss a job opportunity!"
				/>
			</div>
			<div className="form-group">
				<input type="hidden" name="_next" value="#" />
				<input type="hidden" name="_subject" value="Message from portfolio" />
			</div>
			<button type="submit" className="btn btn-warning">
				Submit
			</button>
		</form>
	</div>
);

export default ContactForm;
