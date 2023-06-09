import { idFormContext } from '../../context/context';
import styles from './index.module.scss';
import { useContext} from 'react';
export function Header(){
    const idForm = useContext(idFormContext); 
    return(
        <header className={styles.header} id={idForm}>
            <div className={styles.headerContainer}>
                <div className={styles.headerInfos}>
                    <h1 className={styles.headerTitulo}>Tenha o seu corpo dos sonhos</h1>
                    <h2 className={styles.headerSubTitle}>cansado de olhar para o espelho e não ver a sua melhor versão, venha se consultar comigo e <strong>descubra como ter resultados reais na sua dieta</strong></h2>
                </div>
                <form className={styles.headerForm}>
                    <input type='text' placeholder='Seu nome:' className={styles.headerFormInput} />
                    <input type='email' placeholder='Seu melhor email:' className={styles.headerFormInput}/>
                    <input type='submit' value="Quero me consultar" className={styles.headerFormInputSubmit}></input>
                </form>
            </div>
        </header>
    )
}