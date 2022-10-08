export default function Experience({ experience }) {
	return (
		<div className="flex flex-col">
			<div className="flex justify-between">
				<span className="font-slab text-2xl font-bold">{experience.name}</span>
				<div className="font-light">
					%<span className="font-bold text-2xl">{experience.rate}</span>
				</div>
			</div>
			<div className="h-[12px] w-full rounded-full bg-white bg-opacity-25">
				<div
					className="h-[12px] rounded-full bg-white"
					style={{
						width: `${experience.rate > 100 ? 100 : experience.rate}%`,
					}}
				></div>
			</div>
		</div>
	);
}
