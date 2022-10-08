import classNames from "classnames";

export default function MehmetKonukcu({ title }) {
	return (
		<>
			{title && <div className="font-light sm:text-4xl text-2xl">{title}</div>}
			<div
				className={classNames({
					"font-slab sm:text-4xl text-2xl font-bold": true,
					"-mt-1": title != null,
				})}
			>
				{"< Mehmet Konukçu />"}
			</div>
		</>
	);
}
