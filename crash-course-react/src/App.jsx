import "./App.css"
import CardButton from "./components/CardButton"
import ItemCard from "./components/ItemCard"
import NavBar from "./components/NavBar"
import SignInCard from "./components/SignInCard"
import items from "./constants/items.json"
function App() {
	console.log(items)
	return (
		<div className="App">
			<NavBar />
			<CardButton />
			<SignInCard />
			<div className="itemsContainer">
				{items.map((item) => (
					<ItemCard {...item} />
				))}
			</div>
		</div>
	)
}

export default App
