import styles from './index.module.scss';
interface props{
    textIten:string,
    imgItem:string
}
export function BenefitsItem({textIten,imgItem}:props){
    return(
        <div className={styles.benefitsItem}>
            <img src={imgItem} alt='Icone que representa um dos beneficios da consultoria' className={styles.benefitsImg}/>
            <h3>{textIten}</h3>
        </div>
    )
}