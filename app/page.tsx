"use client"
import { Link, LinkIcon } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap-grid.css';
import { motion } from "framer-motion"
export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Vuture &nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Vx&nbsp;</h1>
				<br />
				<h3 className={title()}>
					Surveys made easy, create, design & capture response.
				</h3>
				{/* <h2 className={subtitle({ class: "mt-4" })}>
					Beautiful, fast and modern React UI library.
				</h2> */}
			</div>


			<div className="flex gap-3">
				<Link
					href={'creator-studio'}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Creator Studio
				</Link>
				<Link
					href={'user-studio'}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					User Studio
				</Link>
			</div>



			<p className="no-underline text-primary max-w-lg text-center justify-center">This version represents the prototype of the application, showcasing its functionalities while leveraging both local and session storage of the browser.</p>
		</section>
	);
}
