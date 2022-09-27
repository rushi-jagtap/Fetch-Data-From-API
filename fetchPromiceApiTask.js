const fetchData = document.getElementById("fetchData");
const cardContainer = document.getElementById("cardContainer");

fetchData.addEventListener("click", newFetchData);

function newFetchData() {
    fetch("https://api.escuelajs.co/api/v1/products")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            showProducts(data)
            console.log(data);
        })
        .catch(function (err) {
            console.log("Failed to load the data......");
        })
}



function showProducts(displayData) {
    console.log(displayData)
    let layout = "";
    displayData.forEach(function (cardData, indx) {
        console.log(cardData);
        layout += `
        <div class="card" style="width: 15rem;">
            <img class="card-img-top" src="${cardData.category.image}"
                alt="Card image cap">
            <div class="card-body">
                <h6 class="card-title">${cardData.title}</h6>
                <h6>Price : ${cardData.price}</h6>
                <p class="card-text">${cardData.description}</p>
                <a href="#" class="btn btn-primary">${cardData.category.name}</a>
            </div>
        </div>
        `;
        cardContainer.innerHTML = layout;

    });
}