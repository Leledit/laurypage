import styles from './index.module.scss';
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
    return(
        <>
            <a href="#" className={classStyle}>{text}</a>
        </>
    )
}