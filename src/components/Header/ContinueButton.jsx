import { FaArrowDown } from "react-icons/fa";

export default function ContinueButton() {
	const handleContinue = () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: "smooth",
		});
	};

	return (
		<div
			className="absolute bottom-5 bg-white bg-opacity-10 px-4 py-2 rounded-full select-none cursor-pointer flex justify-center items-center"
			onClick={handleContinue}
		>
			<FaArrowDown className="mr-2" />
			devam et
		</div>
	);
}
