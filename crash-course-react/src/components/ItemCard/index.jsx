import React from "react"
import classes from "./style.module.css"

export default function ItemCard({ name, image, id }) {
	return (
		<div key={id} className={classes.cardContainer}>
			<img src={image} alt="" />

			<h2>{name}</h2>
			<button>add to card</button>
		</div>
	)
}
