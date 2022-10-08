import classNames from "classnames";

export default function MehmetKonukcu({ title, showLine }) {
	return (
		<div className="flex items-center justify-center flex-col">
			{title && <div className="font-light sm:text-4xl text-2xl">{title}</div>}
			<div
				className={classNames({
					"font-slab sm:text-4xl text-2xl font-bold": true,
					"-mt-1": title != null,
					"logo-arrows": showLine,
				})}
			>
				{"< Mehmet Konukçu />"}
			</div>
		</div>
	);
}
