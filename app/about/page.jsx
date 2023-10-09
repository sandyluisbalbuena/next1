"use client"

import React from 'react'
import { motion } from "framer-motion"

export default function page() {
	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2
		}
		}
	};
	
	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
		y: 0,
		opacity: 1
		}
	};

	return (
		<div className='w-[90vw]'>
			<motion.ul 
			className="container grid grid-cols-2 gap-4"
			variants={container}
			initial="hidden"
			animate="visible"
			>
				{[0, 1, 2, 3].map((index) => (
					<motion.li key={index} className="item" variants={item}>
						<div className="card w-96 bg-base-200 shadow-lg shadow-primary">
							{/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
							<div className="card-body">
								<h2 className="card-title">About</h2>
								<p>If a dog chews shoes whose shoes does he choose?</p>
								<div className="card-actions justify-end">
									<button className="btn btn-primary">Buy Now</button>
								</div>
							</div>
						</div>
					</motion.li>
				))}
			</motion.ul>
		</div>
		
	)
}
