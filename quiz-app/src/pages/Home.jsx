import React, { useState } from "react"
import Options from "../compenents/Options"

export default function Home({
	ourpropQuestions: { questionText, options, answer },
	index,
	setIndex,
}) {
	const [score, setScore] = useState(0)
	return (
		<div>
			<h1>quiz app</h1>
			<div>{questionText}</div>
			<Options
				setScore={setScore}
				score={score}
				ouroptions={options}
				answer={answer}
				index={index}
				setIndex={setIndex}
			/>
			{score}
		</div>
	)
}
