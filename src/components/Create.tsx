import styles from './Create.module.css'
import { PlusCircle } from "phosphor-react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Create({ children, ...rest }: Props) {
    return (
    <button className={styles.container} {...rest}>
        {children}
        Criar
        <PlusCircle size={24} />
    </button> 
    )
}