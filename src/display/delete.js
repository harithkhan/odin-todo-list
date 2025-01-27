import 

export function deleteCat(event) {
    const category = event.target.dataset.category;    
    const deleteButton = document.querySelector(`cat-delete-button[data-category="${category}"]`);
    const catContainer = document.querySelector(`todo-item[data-category="${category}"]`);
    catContainer.remove();  
};

export function deleteToDo(event) {

};