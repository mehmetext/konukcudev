export default function MehmetKonukcu({ title }) {
	return (
		<>
			{title && <div className="font-light text-4xl">{title}</div>}
			<div className="font-slab text-4xl font-bold -mt-1">
				{"< Mehmet Konukçu />"}
			</div>
		</>
	);
}
