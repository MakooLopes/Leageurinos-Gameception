

function callRiot() {
var request new XMLHttpRequest()

request.open('GET', https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Bundle%20%C3%B3f%20sticks?api_key=RGAPI-e8358307-1a8e-425e-8616-b9cb4307c855, true)

request.onload = function () {
	var data = JSON.parse(this.response)
}
request.send()
}