import React from "react"

export default function SignInCard() {
	const handleSubmit = (e) => {
		e.preventDefault()

		const dataForm = new FormData(e.target)
		const data = Object.fromEntries(dataForm)

		console.log(data)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" />
				<button type="submit">sign in</button>
			</form>
		</div>
	)
}
