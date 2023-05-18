import styles from './index.module.scss';
interface props{
    text:string
}

export function Button({text}:props){
    return(
        <>
            <a href="#" className={styles.button}>{text}</a>
        </>
    )
}