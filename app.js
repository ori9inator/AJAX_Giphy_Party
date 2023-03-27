$(document).ready(function() {
    console.log("Let's get this party started!");
});

const gifCanvas = $("#gifCanvas");
const searchInput = $("#searchInput");

function addGif(result) {
    let numResults = result.data.length;
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let newDiv = $('<div>');
        let newGif = $('<img>', {src: result.data[randomIdx].images.original.url});
        newDiv.append(newGif);
        gifCanvas.append(newDiv);
    }
}

$('form').on('submit', async function (e) {
    e.preventDefault();

    let searchTerm = searchInput.val();
    searchInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}
    });
    addGif(response.data);
});

$('#reset').on('click', function() {
    gifCanvas.empty();
});