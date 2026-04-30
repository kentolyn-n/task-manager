import { get } from "http";

export type Task = {
    id: string,
    task: string,
    status: "pending" | "done",
    date: string,

};

const STORAGE_KEY = "tasks";
const TRASH_KEY = "trashs";

export const getTasks = ():Task[] => {
    if (typeof window === "undefined") return[];
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
};

export const saveTasks =(tasks: Task[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
};

export const getTrashs = ():Task[] => {
    if(typeof window ==="undefined") return[];
    return JSON.parse(localStorage.getItem(TRASH_KEY) || "[]");
};

export const saveTrashs =(tasks:Task[]) => {
    localStorage.setItem(TRASH_KEY, JSON.stringify(tasks));
};

export const moveToTrash = (task: Task) =>{
    const trash = getTrashs();
    saveTrashs([...trash, task]);

    const tasks = getTasks().filter((t)=>t.id !== task.id);
    saveTasks(tasks)

};

export const clearTrash = () => {
    localStorage.removeItem(TRASH_KEY);
}

export const addTask = (task: Task) => {
    const tasks = getTasks();
    saveTasks([...tasks, task]);
}