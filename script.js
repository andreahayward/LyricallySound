var searchButton = $("#searchButton");
var deezerAPI = "253f99e5af7d138f8a094111f9aa1ff5";
var music;

//music search history
var searchHistory = localStorage.getItem("searchHistory");
searchHistory = JSON.parse(searchHistory)
if (searchHistory) {
for (var i = 0; i < searchHistory.length; i++) {

    userSearch = searchHistory[i];
    var musicSearch = $(".list-group").addClass("list-group-item");
    musicSearch.append("<li>" + music + "</li>");
    console.log(music)
}}

//musicxmatch
$("#searchButton").click(function() {
    //getting value from search box
    var search = $(".searchInput").val()
    console.log(search);
    //string
    var searchHistory = localStorage.getItem("searchHistory");
    if (searchHistory) {
        //object
        console.log(searchHistory)
        console.log(typeof searchHistory)
        searchHistory = JSON.parse(searchHistory)
        //add api and ajax
        searchHistory.push(search)
        //string
        searchHistory = JSON.stringify(searchHistory)
    }
    else {
        searchHistory = JSON.stringify([search]);
    }
    localStorage.setItem("searchHistory", searchHistory)

var apiKey = "bdd1f87bcdmshb2ad5b0221de40cp1060d5jsn3d7c45fb4c54";
var urlCurrent = "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search + "&Appid=" + apiKey + "&units=imperial"
$.ajax({
    url: urlCurrent,
    method: "GET"
    })
    .then(function (response) {
           //definitely use this for UV!!!!;
        console.log(urlCurrent)
        console.log(response)
})

//testing new code for API


    })

//api call
//var settings = {
	//"async": true,
	//"crossDomain": true,
	//"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=taylor+swift",
	//"method": "GET",
	//"headers": {
		//"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        //"x-rapidapi-key": "bdd1f87bcdmshb2ad5b0221de40cp1060d5jsn3d7c45fb4c54"
    //$(".humidity").text("Humidity: " + response.list[i].main.humidity + "%");
	//}
//}

$.ajax(settings).done(function (response) {
	console.log(response);
});