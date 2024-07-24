import { CheckCircle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export interface TaskProps {
    id?: number;
    content: string;
    isCompleted?: boolean;
}

export function Task({ id, content, isCompleted }: TaskProps) {
    
    function teste(){
        console.log(id)
    }

    return (
        <div className={styles.task}>
            <p className={isCompleted ? styles.pTaskChecked : styles.pTask}>
                <button onClick={teste} className={isCompleted ? styles.iconChecked : styles.iconButtonLeft}>
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
