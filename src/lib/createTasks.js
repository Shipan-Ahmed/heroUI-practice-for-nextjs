import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";


const createTasks = async(formData) => {
    'use server'
    const name = formData.get('name');
    console.log("name from form: ", formData);

    const newTasks = Object.fromEntries(formData.entries());
    console.log("added all data: ", newTasks);
    const res = await postTask(newTasks);
    if (res.ok) {
        revalidatePath('/tasks');
    }
    return res;
};

export default createTasks;