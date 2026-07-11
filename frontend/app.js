console.log("Shadow Sports Intelligence is running.");

const gameData = {
awayTeam: "Athletics",
homeTeam: "Detroit Tigers",
startingPitchers: "Pending Verification",
lineups: "Pending Verification",
bullpen: "Pending Verification",
weather: "Pending Verification",
intelligenceScore: 94
};

const scoreDisplay = document.getElementById("score");

scoreDisplay.innerHTML = gameData.intelligenceScore + "/100";

console.log(gameData);
