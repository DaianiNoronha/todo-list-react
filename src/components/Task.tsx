import { CheckCircle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export interface TaskProps {
    id?: number;
    content: string;
    isCompleted?: boolean;
}

export function Task({ content, isCompleted }: TaskProps) {
    
    console.log(isCompleted);

    return (
        <div className={styles.task}>
            <p className={isCompleted ? styles.pTaskChecked : styles.pTask}>
                <button className={isCompleted ? styles.iconChecked : styles.iconButtonLeft}>
                    <CheckCircle size={24} />
                </button>
                {content}
                <button className={styles.iconButtonRight}>
                    <Trash size={22}/>
                </button>
            </p>
        </div>
    );
}
