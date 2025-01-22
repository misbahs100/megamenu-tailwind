'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { useState, useEffect } from 'react';

import { ChevronDown, ArrowRight } from 'lucide-react';

export const DestinationDropdown = () => {
	return (
		<div className="absolute top-20 left-0 w-full bg-black text-white shadow-md rounded-bl-lg rounded-br-lg p-10">
			<div className="grid grid-cols-3 gap-10 mt-4">
				<div>
					<Image
						src="/asia.jpg"
						alt="Asia"
						width={400}
						height={400}
						className="object-cover h-[200px] rounded-xl"
					/>
					<p className="py-5 text-gray-400">
						Explore Asia’s vibrant cultures, from Japan’s futuristic cities to
						Bali’s serene beaches. Discover ancient wonders, mouthwatering
						cuisines, and breathtaking landscapes that make every journey
						unforgettable.
					</p>
					<Link href="#" className="flex gap-3 items-center text-gray-400">
						Learn More <ArrowRight size={20} />
					</Link>
				</div>
				<div>
					<Image
						src="/europe.webp"
						alt="Asia"
						width={400}
						height={400}
						className="object-cover h-[200px] rounded-xl"
					/>
					<p className="py-5 text-gray-400">
						Experience Africa’s untamed beauty, from thrilling safaris to
						stunning coastlines. Dive into its rich cultures, vibrant cities,
						and awe-inspiring natural wonders like Victoria Falls.
					</p>
					<Link href="#" className="flex gap-3 items-center text-gray-400">
						Learn More <ArrowRight size={20} />
					</Link>
				</div>
				<div>
					<Image
						src="/africa.jpg"
						alt="Asia"
						width={400}
						height={400}
						className="object-cover h-[200px] rounded-xl"
					/>
					<p className="py-5 text-gray-400">
						Journey through Europe’s charming cities and historic landmarks.
						From Paris’s romance to Rome’s ancient ruins, every destination is a
						story waiting to be discovered.
					</p>
					<Link href="#" className="flex gap-3 items-center text-gray-400">
						Learn More <ArrowRight size={20} />
					</Link>
				</div>
			</div>
			<hr className="my-10 border-none outline-none h-0.5 rounded-2xl bg-gray-400" />
			<div className="flex justify-between items-center">
				<p className="text-lg w-1/2 text-gray-400">
					Still confused about where to go? See the most popular destinations
					our travelers love to visit.
				</p>
				<Link
					href="/destination"
					className="text-black flex items-center gap-3 bg-white px-4 py-2 rounded"
				>
					Explore <ArrowRight size={20} />
				</Link>
			</div>
		</div>
	);
};

export const TravelPlannerDropdown = () => {
	return (
		<div className="absolute top-20 left-0 w-full bg-black text-white shadow-md rounded-bl-lg rounded-br-lg p-10">
			<div className="grid grid-cols-3 gap-10 mt-4">
				<div className="bg-honeymoon h-[400px] w-full rounded-xl bg-cover bg-center relative">
					<p className="p-5 text-white bg-black/90 w-full absolute bottom-0">
						Explore Asia’s vibrant cultures, from Japan’s futuristic cities to
						Bali’s serene beaches. Discover ancient wonders, mouthwatering
						cuisines, and breathtaking landscapes that make every journey
						unforgettable.
					</p>
				</div>
				<div className="bg-weekend h-[400px] w-full rounded-xl bg-cover bg-center relative">
					<p className="p-5 text-white bg-black/90 w-full absolute bottom-0">
						Experience Africa’s untamed beauty, from thrilling safaris to
						stunning coastlines. Dive into its rich cultures, vibrant cities,
						and awe-inspiring natural wonders like Victoria Falls.
					</p>
				</div>
				<div className="bg-family h-[400px] w-full rounded-xl bg-cover bg-center relative">
					<p className="p-5 text-white bg-black/90 w-full absolute bottom-0">
						Journey through Europe’s charming cities and historic landmarks.
						From Paris’s romance to Rome’s ancient ruins, every destination is a
						story waiting to be discovered.
					</p>
				</div>
			</div>
		</div>
	);
};

const Navbar = () => {
	const currentRoute = usePathname();

	const [activeDropdown, setActiveDropdown] = useState({
		active: false,
		dropdownName: '',
	});

	useEffect(() => {
		setActiveDropdown({ active: false, dropdownName: '' });
	}, [currentRoute]);

	return (
		<nav className="absolute top-10 w-full z-40">
			<div
				className={`${
					activeDropdown.active
						? 'bg-black text-white rounded-tr-lg rounded-tl-lg'
						: 'bg-[#EFF1F4] text-black rounded-lg'
				} container py-4 px-5 flex justify-between items-center relative`}
				onMouseLeave={() =>
					setActiveDropdown({ active: false, dropdownName: '' })
				}
			>
				<Link href="/">
					<p className="font-bold text-xl">☰</p>
				</Link>
				<ul className="flex space-x-10">
					<li
						onMouseEnter={() =>
							setActiveDropdown({ active: true, dropdownName: 'destinations' })
						}
					>
						<p className="flex gap-1 items-center cursor-pointer">
							Destinations
							<ChevronDown size={20} />
						</p>

						{/* Dropdown Menu */}
						{activeDropdown.active &&
							activeDropdown.dropdownName === 'destinations' && (
								<DestinationDropdown />
							)}
					</li>
					<li
						onMouseEnter={() =>
							setActiveDropdown({ active: true, dropdownName: 'planner' })
						}
					>
						<p className="flex gap-1 items-center cursor-pointer">
							Trip Planner
							<ChevronDown size={20} />
						</p>

						{/* Dropdown menu */}
						{activeDropdown.active &&
							activeDropdown.dropdownName === 'planner' && (
								<TravelPlannerDropdown />
							)}
					</li>
					<li
						onMouseEnter={() =>
							setActiveDropdown({ active: false, dropdownName: '' })
						}
					>
						<p className="cursor-pointer">Deals</p>
					</li>
					<li
						onMouseEnter={() =>
							setActiveDropdown({ active: false, dropdownName: '' })
						}
					>
						<p className="cursor-pointer">Faqs</p>
					</li>
				</ul>
				<button
					className={`${
						activeDropdown.active
							? 'bg-white text-black'
							: 'bg-black text-white'
					} px-6 py-3 rounded hover:bg-gray-700`}
				>
					Contact us 📞
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
