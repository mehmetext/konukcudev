import ContinueButton from "./ContinueButton";
import MehmetKonukcu from "../MehmetKonukcu";
import ProfileImage from "./ProfileImage";
import SocialButtons from "./SocialButtons";

export default function Header() {
	return (
		<div className="h-[calc(100vh-3rem)] w-[calc(100%-3rem)] bg-white bg-opacity-10 m-6 rounded-xl sm:p-6">
			<div className="bg-white bg-opacity-5 rounded-xl sm:p-6 h-full w-full">
				<div className="bg-white bg-opacity-10 rounded-xl p-6 h-full w-full flex justify-center items-center relative">
					<div className="container flex justify-center items-center flex-col">
						<ProfileImage />
						<SocialButtons />
						<MehmetKonukcu title="Selam, ben..." />
						<ContinueButton />
					</div>
				</div>
			</div>
		</div>
	);
}
