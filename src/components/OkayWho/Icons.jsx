import { FaMobileAlt, FaGlobe, FaBrush } from "react-icons/fa";

export default function Icons() {
	return (
		<div className="grid md:grid-cols-3 grid-cols-1 w-full">
			<div className="okayWho-icon">
				<FaMobileAlt className="mb-4 text-9xl" />
				<div className="font-slab font-bold text-center text-2xl">
					Mobil Uygulama <br /> Geliştirici
				</div>
			</div>
			<div className="okayWho-icon">
				<FaGlobe className="mb-4 text-9xl" />
				<div className="font-slab font-bold text-center text-2xl">
					Website <br /> Geliştirici
				</div>
			</div>
			<div className="okayWho-icon">
				<FaBrush className="mb-4 text-9xl" />
				<div className="font-slab font-bold text-center text-2xl">
					Grafik <br /> Tasarımcı
				</div>
			</div>
		</div>
	);
}
