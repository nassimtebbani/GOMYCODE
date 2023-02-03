import React from "react"
import classe from "./style.module.css"
export default function ItemCard({ OurPropProduct: { name, src, price } }) {
	return (
		<div className={classe.cardContainer}>
			<h3>{name}</h3>
			<img src={src} alt="shoe" />
			<div>
				<p>{price}DA</p>
				<button>Add to card</button>
			</div>
		</div>
	)
}
