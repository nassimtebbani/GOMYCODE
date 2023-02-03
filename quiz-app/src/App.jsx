import { useState } from "react"
import "./App.css"
import Home from "./pages/Home"

function App() {
	const [index, setIndex] = useState(0)
	const questions = [
		{
			id: 1,
			questionText: "What is the capital of France?",
			options: ["option1", "option2", "option3", "option4"],
			answer: "option1",
		},
		{
			id: 2,
			questionText: "What is the capital of Algerie?",
			options: ["option1", "option2", "option3", "option4"],
			answer: "option3",
		},
	]

	return (
		<div className="App">
			<Home
				setIndex={setIndex}
				index={index}
				ourpropQuestions={questions[index]}
			/>
		</div>
	)
}

export default App
