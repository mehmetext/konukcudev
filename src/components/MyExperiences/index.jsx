import { myExperiences } from "../../utils/data";
import Section from "../Section";
import Experience from "./Experience";
import Title from "./Title";

export default function MyExperiences() {
	console.log(myExperiences);
	return (
		<>
			{myExperiences.map((experienceGroup, i) => {
				return (
					<Section isLight={i % 2 === 1}>
						<Title title={experienceGroup.experienceGroupName} />
						<div className="grid sm:grid-cols-2 gap-4 w-full">
							{experienceGroup.experiences.map((experience, j) => {
								return <Experience key={j} experience={experience} />;
							})}
						</div>
					</Section>
				);
			})}
		</>
	);
}
