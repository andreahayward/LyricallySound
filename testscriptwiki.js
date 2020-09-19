var wikiAPI = "https://en.wikipedia.org/w/api.php";

$.ajax({
    url: wikiAPI,
    method: "GET"
  })

  .then(function(response) {
    //definitely use this for UV;
    wikitest(response)
  })

  function wikitest(x) {
      console.log(x);
  }