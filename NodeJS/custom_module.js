
// Creation of Custom module of Team
function cricket () {
	var cricketTeam = {
		Player1: 'Sourab Tiwari',
		Player2: 'Murali Kadari',
		Player3: 'Salim Malik',
		Player4: 'Balakrishna'
	};
	console.log(cricketTeam);
}

function volleyBall() {
	var volleyBallTeam = {

	};
	console.log(volleyBallTeam);
}

module.exports.crickets = cricket;
module.exports.volley = volleyBall;