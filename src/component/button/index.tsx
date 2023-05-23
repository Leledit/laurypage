import { idFormContext } from '../../context/context';
import styles from './index.module.scss';
import { useContext} from 'react';
interface props{
    text:string,
    type?:string,
}

export function Button({text,type='default'}:props){
    let classStyle = '';
    if(type === 'default'){
        classStyle = styles.button;
    }else{  
        classStyle = styles.smalButon;
    }
  
    const idForm = useContext(idFormContext);   
   console.log(idForm);
    const refForm = document.querySelector("#header_formId__Nc7pp" );
    console.log(refForm);
    return(
        <>
            <a href="" className={classStyle} onClick={(e)=>{e.preventDefault();formClickEvent()}}>{text}</a>
        </>
    )
    function formClickEvent(){
        if (refForm) {
            refForm.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            });
            console.log("Ola mundo")
        }
    
    }
}