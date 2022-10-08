import classNames from "classnames";

export default function Section({ children, isLight }) {
	return (
		<div
			className={classNames({
				"p-8": true,
				"bg-white bg-opacity-10": isLight,
			})}
		>
			<div className="container mx-auto">{children}</div>
		</div>
	);
}
