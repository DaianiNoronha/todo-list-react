import { CheckCircle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task({ content }) {
    return (
        <div className={styles.tasksContent}>
            <button className={styles.iconButton}>
                <CheckCircle size={24} />
            </button>
            <p className={styles.pTask}>{content}</p>
            <button className={styles.iconButton}>
                <Trash size={24}/>
            </button>
        </div>
    );
}
