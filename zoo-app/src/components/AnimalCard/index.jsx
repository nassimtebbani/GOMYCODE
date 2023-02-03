import React from "react"
import classes from "./index.module.css"

function AnimalCard({ name, srcimg, description }) {
	return (
		<div className={classes.container}>
			<p>{name}</p>
			<img src={srcimg} alt="" />
			<p>{description}</p>
		</div>
	)
}

export default AnimalCard
