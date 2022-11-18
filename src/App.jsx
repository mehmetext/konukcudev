import axios from "axios";
import { useEffect } from "react";
import Header from "./components/Header";
import MyExperiences from "./components/MyExperiences";
import OkayWho from "./components/OkayWho";
import WhatDidIDo from "./components/WhatDidIDo";

export default function App() {
	useEffect(() => {
		axios(`${process.env.REACT_APP_API_URL}/deneme`).then((data) => {
			console.log(data.data);
		});
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
