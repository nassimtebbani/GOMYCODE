import React from "react"

export default function Option({
	ouroptions,
	answer,
	score,
	setScore,
	index,
	setIndex,
}) {
	const handleClick = (opt, event) => {
		if (opt === answer) {
			setScore(score + 1)
			event.target.style.backgroundColor = "green"
		} else {
			setScore(score - 6)
		}
		setIndex(index + 1)
	}
	return (
		<div className="container">
			{ouroptions.map((option, i) => (
				<button onClick={(e) => handleClick(option, e)}>{option}</button>
			))}
		</div>
	)
}
