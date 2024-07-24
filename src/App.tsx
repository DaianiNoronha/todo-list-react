import { useState } from 'react';
import { Input } from './components/Input';
import { Header } from './components/Header';
import { Create } from './components/Create';
import { Task, TaskProps } from './components/Task';

import styles from './App.module.css';
import './global.css';

export function App() {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState<TaskProps[]>([
        {
            id: 1,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam earum odit culpa recusandae deleniti fugit omnis labore voluptatem aliquam.',
            isCompleted: true
        },
        {
            id: 2,
            content: 'Bru ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam earum odit culpa recusandae deleniti fugit omnis labore voluptatem aliquam.',
            isCompleted: false
        },
    ]);

    function handleCreateTask(newTaskContent: string) {
        const newTask = {
            id: tasks.length + 1, 
            content: newTaskContent,
            isCompleted: false,
        };
        setTasks([...tasks, newTask]);
        setInputValue('');
    }

    function completedTask(id: number) {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function countTasksCompleted() {
        const countCompleted = tasks.filter(task => task.isCompleted === true);
        return countCompleted.length;
    }

    function deleteTask(id: number) {
        const tasksWithoutDeletedOne = tasks.filter(task => task.id !== id);
        setTasks(tasksWithoutDeletedOne);
    }

    return (
        <div>
            <Header />
            <div className={styles.div}>
                <Input value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <Create onClick={() => handleCreateTask(inputValue)} />
            </div>
            <section>
                <div>
                    <div className={styles.titleTop}>
                        <h4 className={styles.title}>Tarefas criadas {tasks.length}</h4>
                        <h4 className={styles.titleDois}>Concluídas {countTasksCompleted()} de {tasks.length}</h4>
                    </div>
                    {tasks.map(task => (
                        <Task key={task.id} {...task} onDeleteTask={deleteTask} onCompletedTask={completedTask} />
                    ))}
                </div>
            </section>
        </div>
    );
}
