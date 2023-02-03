import React, { useState } from "react"
import AnimalCard from "../components/AnimalCard"
import AnimalForm from "../components/AnimalForm"
import Counter from "../components/Counter"
import animals from "../constants/animals"
import classes from "./Home.module.css"

const [isLoading, setIsLoading] = useState(false)
export default function Home() {
	const AddAnimal = async (e) => {
		setIsLoading(true)
		e.preventDefault()
		console.log(e.target)
		console.log("adding my animal")
		setIsLoading(false)
	}

	return (
		<div>
			<Counter />
			<h1>The Zoo</h1>
			<p>Add Your Animal</p>
			<AnimalForm AddAnimal={AddAnimal} />
			{!isLoadingSpinner && (
				<div className={classes.animalsWrapper}>
					{animals.map((animal, i) => (
						<AnimalCard key={i} animal={animal} />
					))}
				</div>
			)}
		</div>
	)
}
