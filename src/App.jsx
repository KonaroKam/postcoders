import { useEffect, useState } from "react";
import { getAreaData } from "./api";

import "./App.css";
import CardsContainer from "./components/CardsContainer";

function App() {
	const [areas, setAreas] = useState([]);
	const [outcode, setOutcode] = useState("bb10");

	const load = async () => {
		try {
			const areaData = await getAreaData(outcode);

			setAreas(areaData);
		} catch (error) {
			window.alert("todo: fix app");
		}
	};

	function handleNewOutcode(event) {
		event.preventDefault();

		const newOutcode = event.target[0].value;
		setOutcode(newOutcode);
	}

	useEffect(() => {
		load();
	}, [outcode]);

	return (
		<div className="App">
			<h1>Postcoders</h1>
			<h2>{`Areas for ${outcode}: ${areas.length}`}</h2>
			<form onSubmit={handleNewOutcode}>
				<input
					type="text"
					placeholder="Enter a new outcode as above"
					aria-label="text input to change searched outcode e.g. “M1” rather than the full “M1 7ED”"
				/>
				<button>Submit</button>
			</form>
      <CardsContainer areas={areas} />
		</div>
	);
}

export default App;
