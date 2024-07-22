// Task.js
import { CheckCircle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task({ content }) {
    return (
        <div className={styles.task}>
            <p className={styles.pTask}>
                <button className={styles.iconButtonLeft}>
                    <CheckCircle size={24} />
                </button>
                {content}
                <button className={styles.iconButtonRight}>
                    <Trash size={24}/>
                </button>
            </p>
        </div>
    );
}
