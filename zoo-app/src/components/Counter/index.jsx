import { useState } from "react"
import classes from "./index.module.css"

export default function Counter() {
	const [count, setCount] = useState(0)
	const increment = () => {
		setCount(count + 1)
	}
	const decrement = () => {
		setCount(count - 1)
	}

	return (
		<div className={classes.container}>
			Counter
			<p>{count}</p>
			<button onClick={() => increment()}>Increment</button>
			<button onClick={() => increment()}>decrement</button>
		</div>
	)
}
