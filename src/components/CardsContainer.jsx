import Cards from "./Cards";

const CardsContainer = ({ areas }) => {
	return (
		<div>
			<h1>Results</h1>
			<div className="cardContainer">
				{areas.map((area) => {
					return <Cards area={area} key={area["place name"]} />;
				})}
			</div>
		</div>
	);
};

export default CardsContainer;
