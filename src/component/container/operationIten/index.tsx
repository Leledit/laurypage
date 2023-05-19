import styles from './index.module.scss';
import numberOne from '../../../assets/numbers/aboutNumberOne.png';
import numberTwo from '../../../assets/numbers/aboutNumberTwo.png';
import numberThree from '../../../assets/numbers/aboutNumberThree.png';
import numberFour from '../../../assets/numbers/aboutNumberFour.png';

interface props{
    title: string,
    text: string,
    imgNumber:number,
}

export function Operationitem({title,text,imgNumber}:props){
    const numberItem:string = returnImgNumber();
    
    return(
        <div className={styles.item}>
            <img src={numberItem} alt="Imagem que representa um dos passos da consulta da doutora"/>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )

    function returnImgNumber(){
        switch(imgNumber){
            case 1:
                return numberOne;
            case 2:
                return numberTwo;
            case 3:
                return numberThree;
            case 4:
                return numberFour;
            default:
                return numberOne;
        }
    }
}    