$(document).foundation()
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
$("#Search").click(function() {
    //getting value from search box
    var search = $(".search").val()
    console.log(search);
    //string
    var searchHistory = localStorage.getItem("searchHistory");
    if (searchHistory) {
        //object
        console.log(searchHistory)
        console.log(typeof searchHistory)
        searchHistory = JSON.parse(searchHistory)
        searchHistory.push(search)
        //string
        searchHistory = JSON.stringify(searchHistory)
    }
    else {
        searchHistory = JSON.stringify([search]);
    }
    localStorage.setItem("searchHistory", searchHistory)
   //api call 
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q" + search,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "253f99e5af7d138f8a094111f9aa1ff5"
        //$(".humidity").text("Humidity: " + response.list[i].main.humidity + "%");
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
});

//api call - put in function (event listener) move this to searchbutton.click function. take search var q= + searchvar. make the URL dynamic - pass them the dynamic URL
//var settings = {
	//"async": true,
	//"crossDomain": true,
	//"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=taylor+swift",
	//"method": "GET",
	//"headers": {
		//"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        //"x-rapidapi-key": "253f99e5af7d138f8a094111f9aa1ff5"
    //$(".humidity").text("Humidity: " + response.list[i].main.humidity + "%");
	//}
//}

//$.ajax(settings).done(function (response) {
	//console.log(response);
});
