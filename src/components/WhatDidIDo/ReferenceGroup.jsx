import { FaArrowUp } from "react-icons/fa";

export default function ReferenceGroup({ referenceGroup }) {
	return (
		<div className="mt-6">
			<div className="font-light text-2xl mb-3">
				Bir{" "}
				<span className="font-bold font-slab text-3xl">
					{referenceGroup.referenceGroupName}
				</span>{" "}
				olarak şunları yaptım:
			</div>
			<div className="flex flex-row flex-wrap justify-center md:justify-start">
				{referenceGroup.references.map((reference, i) => {
					return (
						<div key={i} className="flex justify-start flex-col mt-4 mr-6">
							<div className="w-full rounded-xl overflow-hidden mb-2">
								<img
									src={`${process.env.PUBLIC_URL}/images/${reference.image}`}
									alt={reference.title}
									className="w-full max-h-[380px]"
								/>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-slab text-3xl mb-2 text-center font-bold">
									{reference.title}
								</div>
								<a
									href="#!"
									className="bg-white bg-opacity-10 py-2 px-4 font-thin rounded-full flex justify-center items-center"
								>
									<FaArrowUp className="mr-2" />
									detaylar
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
