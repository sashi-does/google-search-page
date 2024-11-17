let userInput = document.getElementById("searchInput");
let url = "https://apis.ccbp.in/wiki-search?search=";
let searchContainer = document.getElementById("searchResults");
let options = {
    method: "GET"
};

function createAndAppend(searchResult) {
    let title = document.createElement("h1");
    let link = document.createElement("a");
    let paragraph = document.createElement("p");
    let container = document.createElement("div");

    title.textContent = searchResult.title;
    title.classList.add("result-title");
    link.href = searchResult.link;
    link.textContent = searchResult.link;
    link.classList.add("result-url");
    link.target = "_blank";
    paragraph.textContent = searchResult.description;
    paragraph.classList.add("link-description");

    container.appendChild(title);
    container.appendChild(link);
    container.appendChild(paragraph);
    searchContainer.appendChild(container);
    console.log(searchResult);
}

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let userInputValue = userInput.value;
        fetch(url + userInputValue, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                let searchElement = data.search_results;
                for (let eachResult of searchElement) {
                    createAndAppend(eachResult);
                }
            });
    }
});