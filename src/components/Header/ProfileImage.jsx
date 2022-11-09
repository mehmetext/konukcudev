export default function ProfileImage() {
	return (
		<div className="bg-white bg-opacity-5 rounded-full p-3 m-auto mb-3">
			<img
				className="rounded-full bg-white bg-opacity-5 p-3 w-[160px] h-[160px] sm:w-[260px] sm:h-[260px]"
				src={process.env.PUBLIC_URL + "/images/me.jpg"}
				alt="Mehmet Konukçu"
			/>
		</div>
	);
}
