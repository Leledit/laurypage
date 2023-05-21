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
                        <p>Olá! Sou Laury Simão, uma apaixonada pelo universo da nutrição e comprometida em promover uma vida saudável e equilibrada. Com vasta experiência na área, busco constantemente atualizar meus conhecimentos para oferecer um atendimento personalizado e de qualidade.</p>
                        <p>Acredito que a alimentação é a base para uma vida plena, e é por isso que me empenho em desenvolver planos nutricionais que se adequem às necessidades individuais de cada cliente. Minha abordagem é pautada na ciência e em princípios éticos, sempre respeitando as particularidades de cada pessoa.</p>
                        <p>Meu compromisso é estar ao seu lado em cada etapa da sua jornada em busca de uma vida mais saudável. Seja para perda de peso, ganho de massa muscular, controle de doenças crônicas ou simplesmente para melhorar sua qualidade de vida, estou aqui para ajudá-lo(a).</p>
                    </div>
                </div>
            </div>
            <div className={styles.operation}>
                <h3><strong>Como funciona</strong> a minha consulta ?</h3>
                <div className={styles.operationItens}>
                    <Operationitem title="Consulta de 1h a 2h" text="Durante a consulta, dedicaremos de uma a duas horas para compreender completamente suas necessidades e objetivos de saúde." imgNumber={1}/>
                    <Operationitem title="Avaliação fisica Completa" text="Realizaremos uma avaliação física completa, que incluirá medições de peso, altura, circunferência corporal e composição corporal." imgNumber={2}/>
                    <Operationitem title="Montagem da dieta" text="Com base nas informações coletadas durante a consulta e na avaliação física, irei montar uma dieta personalizada para você. " imgNumber={3}/>
                    <Operationitem title="Assistencia através do Whatsapp" text="Para garantir um acompanhamento contínuo e apoio durante o processo, estarei disponível através do Whatsapp." imgNumber={4}/>
                </div>
                <div className={styles.operationMsg}>
                    <p>Fique tranquilo, nosso time está sempre a disposição, para tirar todas as suas dúvidas. Fique a vontade para tirar suas dúvidas a hora que quiser. </p>
                    <Button text='Quero me consultar'></Button>
                </div>
            </div>
        </section>
    )
}