export default function Header() {
	return (
		<div className="h-[calc(100vh-3rem)] w-[calc(100%-3rem)] bg-white bg-opacity-10 m-6 rounded-xl p-6">
			<div className="bg-white bg-opacity-5 rounded-xl p-6 h-full w-full">
				<div className="bg-white bg-opacity-10 rounded-xl p-6 h-full w-full flex justify-center items-center">
					<div className="container flex justify-center items-center flex-col">
						<div>
							<div className="bg-white bg-opacity-5 rounded-full p-3 m-auto mb-3">
								<img
									className="rounded-full bg-white bg-opacity-5 p-3 w-[160px] h-[160px]"
									src={process.env.PUBLIC_URL + "/me.jpg"}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
