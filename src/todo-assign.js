import { categoryObj } from "./category";

export function assignToDo(toDoObj, category) {
    if (!category) {
        categoryObj.General._toDo[toDoObj._title] = toDoObj;
    } else {
        category._toDo[toDoObj._title] = toDoObj;
    };
};