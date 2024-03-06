import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const rnmCharactersResponse = await axios.get(
				"https://rickandmortyapi.com/api/character"
			);
			console.log("rnmCharactersResponse: ", rnmCharactersResponse);

			if (rnmCharactersResponse?.data?.results) {
				setCharacters(rnmCharactersResponse?.data?.results);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<ul>
				{characters.map((character) => {
					return <li key={character?.id}>{character?.name}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
