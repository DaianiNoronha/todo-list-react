import { CheckCircle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export interface TaskProps {
    id?: number;
    content: string;
    isCompleted?: boolean;
}

export function Task({ content }: TaskProps) {
    return (
        <div className={styles.task}>
            <p className={styles.pTask}>
                <button className={styles.iconButtonLeft}>
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
