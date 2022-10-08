import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialButtons() {
	return (
		<div className="flex items-center flex-wrap justify-center mb-3">
			<a
				href="https://github.com/mehmetext"
				className="social-container"
				target="_blank"
				rel="noreferrer"
			>
				<div className="social-item">
					<FaGithub />
				</div>
			</a>
			<a
				href="https://www.instagram.com/mehmetext"
				className="social-container"
				target="_blank"
				rel="noreferrer"
			>
				<div className="social-item">
					<FaInstagram />
				</div>
			</a>
			<a
				href="https://www.linkedin.com/in/mehmetkonukcu/"
				className="social-container"
				target="_blank"
				rel="noreferrer"
			>
				<div className="social-item">
					<FaLinkedin />
				</div>
			</a>
			<a
				href="https://twitter.com/memofobi"
				className="social-container"
				target="_blank"
				rel="noreferrer"
			>
				<div className="social-item">
					<FaTwitter />
				</div>
			</a>
		</div>
	);
}
