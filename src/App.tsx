import { Input } from './components/Input';
import { Header } from './components/Header';
import { Create } from './components/Create';
import { Task } from './components/Task';

import styles from './App.module.css';
import './global.css';

const tasks = [
    {
        id: 1,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam earum odit culpa recusandae deleniti fugit omnis labore voluptatem aliquam.'
    },
    {
        id: 2,
        content: 'Bru ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam earum odit culpa recusandae deleniti fugit omnis labore voluptatem aliquam.'
    },
    {
        id: 3,
        content: 'Dolo ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam earum odit culpa recusandae deleniti fugit omnis labore voluptatem aliquam.'
    },
    {
        id: 4,
        content: 'Azri ipsum dolor sit amet consectetur adipisicing elit. Possimus aperiam earum odit culpa recusandae deleniti fugit omnis labore voluptatem aliquam.'
    },
];

export function App() {
    return (
        <div>
            <Header />
            <div className={styles.div}>
                <Input />
                <Create />
            </div>
            <section>
                <div>
                    <div className={styles.titleTop}>
                        <h4 className={styles.title}>Tarefas criadas</h4>
                        <h4 className={styles.titleDois}>Concluídas</h4>
                    </div>
                    {tasks.map(task => (
                        <Task key={task.id} content={task.content} />
                    ))}
                </div>
            </section>
        </div>
    );
}
