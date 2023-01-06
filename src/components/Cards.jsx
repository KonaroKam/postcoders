import { Card, CardContent, Typography } from "@mui/material";

const Cards = ({ area }) => {
	return (
		<Card
			className="card"
			variant="outlined"
			sx={{ backgroundColor: "grey", color: "white" }}
		>
			<CardContent>
				<Typography variant="h5">{area["place name"]}</Typography>
				<Typography variant="body2">
					{area.state} - {area["state abbreviation"]}
					<br />
					Long: {area.longitude}
					<br />
					Lat: {area.latitude}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Cards;
