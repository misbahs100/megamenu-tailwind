const Home = () => {
	return (
		<div className="bg-white">
			<section className="bg-heroPattern bg-cover bg-bottom bg-no-repeat h-screen relative">
				<div className="w-full h-[90%] flex flex-col justify-center items-center text-black text-center">
					<h1 className="text-7xl font-bold mb-4">
						Plan Your Perfect <br /> Adventure 🌍
					</h1>
					<p className="text-gray-400 text-2xl my-6">
						Discover stunning destinations, personalized itineraries, and <br />
						exclusive deals. Your dream trip is just a click away!
					</p>
					<button className="bg-black text-white px-6 py-4 rounded hover:bg-gray-700">
						Get Started 🚀
					</button>
				</div>
			</section>
		</div>
	);
};

export default Home;
