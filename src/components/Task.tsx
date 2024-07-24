import { CheckCircle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export interface TaskProps {
    id?: number;
    content: string;
    isCompleted?: boolean;
}

interface TaskComponentProps extends TaskProps {
    onDeleteTask: (id: number) => void;
    onCompletedTask: (id: number) => void;
}

export function Task({ id, content, isCompleted, onCompletedTask, onDeleteTask }: TaskComponentProps) {
    return (
        <div className={styles.task}>
            <p className={isCompleted ? styles.pTaskChecked : styles.pTask}>
                <button className={isCompleted ? styles.iconChecked : styles.iconButtonLeft} 
                onClick={() => onCompletedTask(id!)}>
                    <CheckCircle size={24} />
                </button>
                {content}
                <button className={styles.iconButtonRight} onClick={() => onDeleteTask(id!)}>
                    <Trash size={22}/>
                </button>
            </p>
        </div>
    );
}
