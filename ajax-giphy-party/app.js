const $gifArea = $("#gifspace");
const $searchInput = $("#search");

/* use ajax result to add a gif */

function addGif(res) {
    // addGif(res) - called with addGif(response.data)
    // response.data is the data from the api request of whatever
    // was in the search term
    let numResults = res.data.length;
    //
    // test output 
    // console.log(res.data);
    // console.log(res.data.length);
    //
    if (numResults) {
        // random selection of 50 gifs
        let randomIdx = Math.floor(Math.random() * numResults);
        // show the random number
        // console.log(randomIdx);
        //
        let $newCol = $("<div>");
        let $newGif = $("<img>", { src: res.data[randomIdx].images.original.url });
        // let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        // let $newGif = $("<img>", {
        //     src: res.data[randomIdx].images.original.url,
        //     class: "w-100"
        // });

        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
}

/* handle form submission: clear search box & make ajax call */

//submit button handling, form is entered with submit button
$("#searchbtn").on("click", async function (evt) {
    evt.preventDefault();
    // input 
    let searchTerm = $searchInput.val();
    $searchInput.val("");
    // clears search input field after saving to searchTerm
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            // i had to use solutions because they wouldnt give a key
            // without an account
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(response.data);
});

/* remove gif */
// like a clear all button
// just empty the div
$("#removebtn").on("click", function () {
    $gifArea.empty();
    alert("Gifs Removed!");
});