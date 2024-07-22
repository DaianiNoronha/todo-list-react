import { Input } from './components/Input';
import { Header } from './components/Header';
import { Create } from './components/Create';
import styles from './App.module.css'
import './global.css'



export function App() {
  
  return (
    <main>
       <Header/>
       <div className={styles.div}>
        <Input/>
        <Create/>
       </div>
        
      
    </main> 
  )
}


