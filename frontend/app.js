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


document.getElementById("score").innerHTML =
gameData.intelligenceScore + "/100";


document.getElementById("matchup").innerHTML =
gameData.awayTeam + " vs " + gameData.homeTeam;


document.getElementById("pitchers").innerHTML =
"Starting Pitchers: " + gameData.startingPitchers;


document.getElementById("lineups").innerHTML =
"Lineups: " + gameData.lineups;


document.getElementById("bullpen").innerHTML =
"Bullpen Status: " + gameData.bullpen;


console.log(gameData);
