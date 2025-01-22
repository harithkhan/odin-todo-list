import { Category } from "./category-class";

export const categoryObj = (function() {
    
    //Initialize categories
    let categories = {};
    categories["General"] = new Category("General", "General/default category.");

    const getCategories = () => categories;

    const addCategory = function(title, description) {
        categories[title] = new Category(title, description);
    };

    const deleteCategory = (title) => delete categories[title];    

    const renameTitle = function(oldTitle, newTitle) {
        categories[oldTitle].title = newTitle;
        const oldObj = categories[oldTitle];
        categories[newTitle] = oldObj; //Create a new obj
        delete categories[oldTitle]; //Delete old obj
    };

    return { 
        getCategories,
        addCategory,
        deleteCategory,
        renameTitle
    };
})();