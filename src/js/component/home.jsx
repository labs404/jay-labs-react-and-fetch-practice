import React, { useEffect, useState } from "react";

const Home = () => {
	const [catFact, setCatFact] = useState("");
	const [factLength, setFactLength] = useState(0);

	const fetchNewFact = () => {
		fetch("https://catfact.ninja/fact")
		// .then(response => response.json())
		.then(response => {
			// if (response.status === 200) {
			if (response.ok) {
				console.log("The response is successful.");
				return response.json()
			}
			else {
				throw new Error(response.statusText)
			}
		})
		.then(data => {
			setCatFact(data.fact);
			console.log(data.fact);
			setFactLength(data.length);
			console.log(data.length);
		})
		.catch(error => console.log("yuge error.. YUGE! \n", error));
	}

	useEffect(() => {
		fetchNewFact();
	},[])



	return (
		<>
			<button onClick={fetchNewFact}>Click for a new fact</button>
			<h1>Catfact App</h1>
			<h2>Here's your fact:</h2>
			<p>{catFact}</p>
			<h2>Here's the length of this fact:</h2>
			<p>{factLength}</p>
		</>
	);
};

export default Home;
