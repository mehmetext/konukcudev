import MehmetKonukcu from "../MehmetKonukcu";
import Section from "../Section";

export default function OkayWho() {
	return (
		<Section isLight={true}>
			<div className="flex justify-center items-center">
				<MehmetKonukcu title={"Tamam da, kim bu?"} showLine={true} />
			</div>
		</Section>
	);
}
