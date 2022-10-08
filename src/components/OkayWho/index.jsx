import MehmetKonukcu from "../MehmetKonukcu";
import Section from "../Section";
import Icons from "./Icons";

export default function OkayWho() {
	return (
		<Section isLight={true}>
			<div className="flex justify-center items-center flex-col">
				<MehmetKonukcu title={"Tamam da, kim bu?"} showLine={true} />
				<Icons />
			</div>
		</Section>
	);
}
