import { AddTasks } from '@/Components/AddTasks';
import Tasks from '@/Components/Tasks';
import createTasks from '@/lib/createTasks';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const Taskpage = async () => {
    const tasks = await getTasks();
    return (
        <div className='max-w-11/12 mx-auto my-10 p-4 space-y-4'>
            <h1> Tasks length: {tasks.length} </h1>
            <AddTasks createTasks={createTasks}></AddTasks>
            <div className='grid grid-cols-3 gap-4'>
                {
                    tasks.map(task => <Tasks key={task.id} task={task}></Tasks>)
                }
           </div>
        </div>
    );
};

export default Taskpage;