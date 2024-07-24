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
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam earum odit culpa recusandae deleniti fugit omnis labore voluptatem aliquam.',
        isCompleted: true
    },
    {
        id: 2,
        content: 'Bru ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam earum odit culpa recusandae deleniti fugit omnis labore voluptatem aliquam.',
        isCompleted: false
    },
];

export function App() {
    const [inputValue, setInputValue] = useState('');
    const [taskList, setTaskList] = useState<TaskProps[]>(tasks);

    function handleCreateTask(newTaskContent: string) {
        const newTask = {
            id: taskList.length + 1, 
            content: newTaskContent,
            isCompleted: false,
        };
    
        setTaskList([...taskList, newTask]);
        setInputValue('');
    }

    function countTasksCompletds (){
        const countCompleted = taskList.filter((task)=> task.isCompleted === true)

        return countCompleted.length
    } 

    return (
        <div>
            <Header />
            <div className={styles.div}>
                <Input value={inputValue}
                 onChange={e => setInputValue(e.target.value)}/>
                <Create onClick={() => handleCreateTask(inputValue)} />
            </div>
            <section>
                <div>
                    <div className={styles.titleTop}>
                        <h4 className={styles.title}>Tarefas criadas {taskList.length}</h4>
                        <h4 className={styles.titleDois}>Concluídas {countTasksCompletds()} de {taskList.length}</h4>
                    </div>
                    {taskList.map(task => (
                        <Task key={task.id} content={task.content} isCompleted={task.isCompleted} />
                    ))}
                </div>
            </section>
        </div>
    );
}
