// Fetch API
const appElement = document.querySelector("#app");

const addToPage = ({ id, first_name, last_name, email }, appElement) => {
    appElement.innerHTML += `
    <div class="user" id="user-${id}">
        <div class="userName">${first_name} ${last_name}</div>
        <div class="userEmail">${email}</div>
    </div>
    `;
};

fetch("/assets/json/users.json")
    .then((res) => res.json())
    .then((users) => {
        appElement.innerHTML = "";
        users.forEach((user) => addToPage(user, appElement));
    });

// Challenge
// create a storefront for the products from this API to display your use of fetch
// alternatively: you can use the GitHub API to list your repos on your portfolio.
// P.S. you can find the images for the products at:
// `https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/images/${product.image}`
const products = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
