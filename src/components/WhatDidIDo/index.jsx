import Section from "../Section";
import MyReferences from "./MyReferences";

export default function WhatDidIDo() {
	return (
		<Section isLight={true}>
			<div className="font-light text-center text-4xl">
				Bu zamana kadar neler mi yaptım?
			</div>
			<MyReferences />
		</Section>
	);
}
