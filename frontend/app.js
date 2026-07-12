console.log("Shadow Sports Intelligence is running.");
const scoreFactors = {
pitching: 96,
bullpen: 91,
lineup: 89,
weather: 93,
dataQuality: 98
};


const shadowScore =
(
scoreFactors.pitching +
scoreFactors.bullpen +
scoreFactors.lineup +
scoreFactors.weather +
scoreFactors.dataQuality
) / 5;
const games = [
{
awayTeam: "Athletics",
homeTeam: "Detroit Tigers",
startingPitchers: "Pending Verification",
lineups: "Pending Verification",
bullpen: "Pending Verification",
intelligenceScore: 94
}
];


document.getElementById("score").innerHTML =
Math.round(shadowScore) + "/100";
document.getElementById("pitching-score").innerHTML =
"Pitching: " + scoreFactors.pitching;

document.getElementById("bullpen-score").innerHTML =
"Bullpen: " + scoreFactors.bullpen;

document.getElementById("lineup-score").innerHTML =
"Lineups: " + scoreFactors.lineup;

document.getElementById("weather-score").innerHTML =
"Weather: " + scoreFactors.weather;

document.getElementById("data-score").innerHTML =
"Data Quality: " + scoreFactors.dataQuality;

const gamesContainer = document.getElementById("games-container");


games.forEach(function(game) {

const gameCard = document.createElement("div");

gameCard.className = "game-card";

gameCard.innerHTML = `
<h2>MLB Game</h2>
<h3>${game.awayTeam} vs ${game.homeTeam}</h3>

<p>Starting Pitchers: ${game.startingPitchers}</p>

<p>Lineups: ${game.lineups}</p>

<p>Bullpen: ${game.bullpen}</p>

`;

gamesContainer.appendChild(gameCard);

});
