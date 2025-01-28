import { getData as hub} from "../logic/todo-hub";
import { displayHub } from "./display-hub";

export function buildAllCats() {
    const catContainer = document.querySelector(".category-container");
    for (let category in hub()) {
        if (category !== "General" && category !== "Trash") {
            const catButton = document.createElement("button");
            catButton.className = "cat-button";
            catButton.type = "button";
            catButton.textContent = category;
            catButton.dataset.category = category;
            const generalButton = document.getElementById("general-cat-button");
            generalButton.insertAdjacentElement("afterend", catButton);
        } else if (category === "Trash") {
            const catButton = document.createElement("button");
            catButton.className = "cat-button";
            catButton.type = "button";
            catButton.textContent = category;
            catButton.dataset.category = category;
            catContainer.appendChild(catButton);
        };
    };
};

export function showThisCat(event) {
    const button = event.target;
    const category = event.target.dataset.category;

};

function displayContents() {

}

const showAllButton = document.getElementById("show-all-button");
showAllButton.addEventListener("click", displayHub);