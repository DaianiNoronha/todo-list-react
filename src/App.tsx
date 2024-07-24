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
            content: 'Finalizar o Projeto em ReactJS de um "ToDo List", e fundamentar conceitos de estado, imutabilidade do estado, listas e chaves no ReactJS, propriedades e componentização.',
            isCompleted: true
        },
        {
            id: 2,
            content: 'Estudar para a certificação AI-900, e realizar dois simulados por dia até sexta-feira.',
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

    const isNewTaskEmpty = inputValue.length == 0;

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.areaTask}>
                <div className={styles.div}>
                <Input value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <Create onClick={() => handleCreateTask(inputValue)} disabled={isNewTaskEmpty}/>
            </div>
            <section>
                <div>
                    <div className={styles.titleTop}>
                        <div className={styles.titleCount}>
                            <h4 className={styles.title}>Tarefas criadas</h4>
                            <p className={styles.pCount}>{tasks.length}</p>
                        </div>
                        <div className={styles.titleCount}>
                            <h4 className={styles.titleDois}>Concluídas</h4>
                            <p className={styles.pCount}>{countTasksCompleted()} de {tasks.length}</p>
                        </div> 
                    </div>
                    {tasks.map(task => (
                        <Task key={task.id} {...task} onDeleteTask={deleteTask} onCompletedTask={completedTask} />
                    ))}
                </div>
            </section>
            </div>
        </div>
    );
}
