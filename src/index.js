import { getData } from "./todo-hub";
import * as catFunction from "./category-functions";

catFunction.addCategory("Chores", "Things to do around the house");
catFunction.setTitle("Chores", "House Chores");
catFunction.setDescription("House Chores", "This is the new description.");
catFunction.setDue("House Chores", "3:55pm Thursday, 23 Jan 2025");
console.log(getData());