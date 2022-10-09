import { myReferences } from "../../utils/data";
import ReferenceGroup from "./ReferenceGroup";

export default function MyReferences() {
	return (
		<div className="w-full">
			{myReferences.map((reference, i) => {
				return <ReferenceGroup referenceGroup={reference} />;
			})}
		</div>
	);
}
