import styles from './index.module.scss';
import aboutDocMob from '../../assets/aboutDoctMob.png';
import aboutDocTab from '../../assets/aboutDoctTab.png';
import aboutDocDesk from '../../assets/aboutDoctDesk.png';
import aboutDocDeskFull from '../../assets/aboutDoctDeskFull.png';
import { Operationitem } from './operationIten';
import { Button } from '../button';

export function Container(){
    return(
        <section className={styles.container}>
            <div className={styles.about}>
                <h2><strong>Conheça</strong> um pouco sobre min</h2>
                <div className={styles.aboutInfos}>
                    <div className={styles.aboutInfosImg}>
                        <picture>
                            <img src={aboutDocMob}/>
                            <source srcSet={aboutDocTab} media='(min-width:428px'/>
                            <source srcSet={aboutDocDesk} media='(min-width:992px'/>
                            <source srcSet={aboutDocDeskFull} media='(min-width:1400px'/>
                        </picture>
                    </div>
                    <div className={styles.aboutInfo}>
                        <h3>Laury simão</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                    </div>
                </div>
            </div>
            <div className={styles.operation}>
                <h3><strong>Como funciona</strong> a minha consulta ?</h3>
                <div className={styles.operationItens}>
                    <Operationitem title="Consulta de 1h a 2h" text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " imgNumber={1}/>
                    <Operationitem title="Avaliação fisica Completa" text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " imgNumber={2}/>
                    <Operationitem title="Montagem da dieta" text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " imgNumber={3}/>
                    <Operationitem title="Assistencia através do Whatsapp" text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " imgNumber={4}/>
                </div>
                <div className={styles.operationMsg}>
                    <p>Fique tranquilo, nosso time está sempre a disposição, para tirar todas as suas dúvidas. Fique a vontade para tirar suas dúvidas a hora que quiser. </p>
                    <Button text='Quero me consultar'></Button>
                </div>
            </div>
        </section>
    )
}