import { categoryObj as cat} from "./category-obj";

cat.addCategory("Chores", "Things to do around the house");
cat.renameTitle("Chores", "House Chores");
console.log(cat.getCategories());