// Function to save player data to local storage
function savePlayerData(username, score) {
    const playerData = {
        username: username,
        score: score
    };
    localStorage.setItem('playerData', JSON.stringify(playerData));
}

// Function to load player data from local storage
function loadPlayerData() {
    const savedData = localStorage.getItem('playerData');
    if (savedData) {
        return JSON.parse(savedData);
    }
    return null; // No data found
}

// Example of where savePlayer func could be used:
function handleGameEnd(score) {
    savePlayerData(username, score);
}

// Example of where loadPlayer func could be used:
function initializeGame() {
    const playerData = loadPlayerData();
    if (playerData) {
        console.log(`Welcome back, ${playerData.username}! Your last score was: ${playerData.score}`);
    } else {
        console.log("Welcome new player!");
    }
}

function saveScoreBoardData(playerData) {
    var currentData = localStorage.getItem('scoreBoardData');
    if(currentData == null) {
        currentData = [];
        currentData.push(playerData);
    }else {
        currentData = JSON.parse(currentData);
        currentData.push(playerData);
    }
    localStorage.setItem('scoreBoardData', JSON.stringify(currentData));
}

function loadScoreBoardData() {
    const savedData = localStorage.getItem('scoreBoardData');
    
    if (savedData) {
        return JSON.parse(savedData);
    }
    return null; // No data found
}