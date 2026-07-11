console.log("Shadow Sports Intelligence is running.");

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
games[0].intelligenceScore + "/100";


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
