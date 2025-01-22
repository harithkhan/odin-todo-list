import { Category } from "./category-class";

export const categoryObj = (function() {
    
    //Initialize categories
    let categories = {};
    categories["General"] = new Category("General", "General/default category.");

    const addCategory = function(title, description) {
        categories[title] = new Category(title, description);
    };

    const deleteCategory = (title) => delete categories[title];    

    return { 
        categories,
        addCategory,
        deleteCategory
    }
})();