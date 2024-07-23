import { useState } from 'react';
import { Input } from './components/Input';
import { Header } from './components/Header';
import { Create } from './components/Create';
import { Task, TaskProps } from './components/Task';

import styles from './App.module.css';
import './global.css';

const tasks: TaskProps[] = [
    {
        id: 1,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam earum odit culpa recusandae deleniti fugit omnis labore voluptatem aliquam.'
    },
    {
        id: 2,
        content: 'Bru ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam earum odit culpa recusandae deleniti fugit omnis labore voluptatem aliquam.'
    },
];

export function App() {
    const [newTaskContent, setNewTaskContent] = useState('');
    const [taskList, setTaskList] = useState(tasks);

    function handleCreateTask(newTaskContent: string) {
        const newTask = {
            id: taskList.length + 1, 
            content: newTaskContent,
        };
    
        setTaskList([...taskList, newTask]);
        setNewTaskContent('');
    }


    return (
        <div>
            <Header />
            <div className={styles.div}>
                <Input value={newTaskContent}
                 onChange={e => setNewTaskContent(e.target.value)}/>
                <Create onClick={() => handleCreateTask(newTaskContent)} />
            </div>
            <section>
                <div>
                    <div className={styles.titleTop}>
                        <h4 className={styles.title}>Tarefas criadas</h4>
                        <h4 className={styles.titleDois}>Concluídas</h4>
                    </div>
                    {taskList.map(task => (
                        <Task key={task.id} content={task.content} />
                    ))}
                </div>
            </section>
        </div>
    );
}
