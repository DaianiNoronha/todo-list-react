import { Trash } from 'phosphor-react';
import styles from './Input.module.css'

export function Input({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <div>

      <input
      className={styles.inputArea}
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
    </div>
    
  )
}