import { getData as hub} from "../logic/todo-hub";
import { displayHub } from "./display-hub";

export function listAllCats() {
    const catContainer = document.querySelector(".category-container");
    for (let category in hub()) {
        if (category === "General") {
            
        } else if (category === "Trash") {

        } else {
            const catButton = document.createElement("button");
            catButton.className = "cat-button";
            catButton.type = "button";
            catButton.textContent = category;
            catButton.dataset.category = category;
            catContainer.appendChild(catButton);
        };
    };
};

export function showAllCats() {

};

function displayContents() {

}

const showAllButton = document.getElementById("show-all-button");
showAllButton.addEventListener("click", displayHub);