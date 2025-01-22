import { categoryObj as cat} from "./category-obj";

cat.addCategory("Chores", "Things to do around the house");
cat.renameTitle("Chores", "House Chores");
cat.setDescription("House Chores", "This is the new description.");
cat.setDue("House Chores", "3:55pm Thursday, 23 Jan 2025");
console.log(cat.getCategories());