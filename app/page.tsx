import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={1500}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Jake Giguere
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 p-5">
					AI/ML Engineer at {" "}  
					<Link
						target="_blank"
						href="https://www.afrl.af.mil/"
						className="underline duration-500 hover:text-zinc-300"
					>
					AFRL 
					</Link>
					<br />
					M.S. in Applied Data Analytics from {" "}
					<Link
						target="_blank"
						href="https://www.bu.edu/met/degrees-certificates/ms-computer-science-data-analytics/"
						className="underline duration-500 hover:text-zinc-300"
					>
						Boston University
					</Link>
					

					<br />
					B.S. in Computer Science and Applied Mathematics from {" "}
					
					<Link
						target="_blank"
						href="https://wentworth.edu"
						className="underline duration-500 hover:text-zinc-300"
					>
						Wentworth Institute of Technology
					</Link>

				</h2>
			</div>
		</div>
	);
}
