import "./style.css";
import { getData } from "./logic/todo-hub";
import * as catFunction from "./logic/category-functions";
import * as toDoFunction from "./logic/todo-functions";
import * as checklistFunction from "./logic/checklist-functions"

//Test catFunctions
catFunction.add("Chores", "Things to do around the house");
catFunction.add("Office", "Payroll");
catFunction.del("Office");
catFunction.rename("Chores", "House Chores");
catFunction.description("House Chores", "House maintenance");
catFunction.due("House Chores", "10:00am, Thursday 23 Jan 2025");

//Test toDoFunctions
toDoFunction.add(undefined, "Cut Hair", "Go to Joebee");
toDoFunction.add("General", "Cut toenails");
toDoFunction.add("House Chores", "Paint walls");
toDoFunction.add("House Chores", "Do Laundry");
toDoFunction.add("Exercise", "Gym", "Do 22 sets");
toDoFunction.add("Enlightenment", "Meditate", undefined, undefined, 3, "Quite challenging");
toDoFunction.rename("Cut Hair", "Get a haircut");
toDoFunction.assign("Do Laundry", "General");
toDoFunction.del("Do Laundry");
toDoFunction.description("Get a haircut", "Go to Gabriel");
toDoFunction.due("Get a haircut", "24 January 2025");
toDoFunction.priority("Get a haircut", "2");
toDoFunction.notes("Get a haircut", "I have a discount");
toDoFunction.isComplete("Get a haircut", true);

//Test checklistFunctions
checklistFunction.add("Gym", "Incline press", true);
checklistFunction.add("Gym", "Leg raises");
checklistFunction.add("Gym", "Shoulder press");
checklistFunction.add("Gym", "Calf raises");
checklistFunction.add("Gym", "Lateral raises");
checklistFunction.add("Gym", "Bicep curls");
checklistFunction.rename("Gym", "Leg raises", "Bicycle kicks");
checklistFunction.del("Gym", "Bicycle kicks");
checklistFunction.del("Gym", "Bicep curls");
checklistFunction.del("Gym", "Calf raises");
checklistFunction.isComplete("Gym", "Incline press", false);


console.log(getData());
console.log(getData().Exercise.toDo);