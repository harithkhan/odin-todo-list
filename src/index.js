import { categoryObj as cat} from "./category-obj";

cat.addCategory("Chores", "Things to do around the house");
cat.renameTitle("Chores", "House Chores");
cat.setDescription("House Chores", "This is the new description.");
console.log(cat.getCategories());