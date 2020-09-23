//$(document).foundation()
var searchButton = $("#button");
//var deezerAPI = "253f99e5af7d138f8a094111f9aa1ff5";
var music;

// this is a function to control when local storage gets displayed
function displaySearch() {
    //music search history display - commenting this out for now as there isnt a display space on the HTML yet
    var searchHistory = localStorage.getItem("searchHistory");
    searchHistory = JSON.parse(searchHistory)
    if (searchHistory) {
    for (var i = 0; i < searchHistory.length; i++) {
    
        music = searchHistory[i];
        var musicSearch = $(".list-group").addClass("list-group-item");
        musicSearch.append("<li>" + music + "</li>");
        //console.log(music)
    }}
}
displaySearch();

//deezer search, makes the API call, saves to local storage.
$(".button").click(function() {
    //getting value from search box
    var search = $("#search").val()
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

    //api call - put in function (event listener) move this to searchbutton.click function. take search var q= + searchvar. make the URL dynamic - pass them the dynamic URL
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "bdd1f87bcdmshb2ad5b0221de40cp1060d5jsn3d7c45fb4c54"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
});
var musicSearch = $(".list-group").addClass("list-group-item");
        musicSearch.append("<li>" + search + "</li>");
});
