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

    const refreshCategoryKey = function(oldKey, newKey) {
        if (oldKey !== newKey) {
            categories[newKey] = categories[oldKey];
            delete categories[oldKey];
        };
    };

    return { 
        getCategories,
        addCategory,
        deleteCategory,
        refreshCategoryKey
    };
})();