import * as hub from "./category-obj";

hub.addCategory("Chores", "Things to do around the house");
hub.renameTitle("Chores", "House Chores");
hub.setDescription("House Chores", "This is the new description.");
hub.setDue("House Chores", "3:55pm Thursday, 23 Jan 2025");
console.log(hub.getData());