import { useEffect } from "react";
import Header from "./components/Header";
import MyExperiences from "./components/MyExperiences";
import OkayWho from "./components/OkayWho";
import WhatDidIDo from "./components/WhatDidIDo";

export default function App() {
	useEffect(() => {
		console.log("veriler getirilecek");
	}, []);

	return (
		<>
			<Header />
			<OkayWho />
			<MyExperiences />
			<WhatDidIDo />
		</>
	);
}
