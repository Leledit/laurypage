import { Button } from '../button';
import styles from './index.module.scss';
import {Carousel} from 'react-bootstrap';
import prevIcon from '../../assets/prevIcon.webp';
import nextIcon from '../../assets/nestIcon.webp';
export function Testimony(){
    return(
        <section className={styles.testimony}>
            <h2 className={styles.testimonyTitle}>Veja alguns depoimentos</h2>
            <div className={styles.testimonyContainer}>
                <h3 className={styles.testimonySubTitle}>Depoimentos de pacientes que ja consultaram comigo, é tiveram <strong>resultados positivos</strong></h3>
                <div className={styles.carousel}>
                    <Carousel indicators={false} prevIcon={<img src={prevIcon}/>} nextIcon={<img src={nextIcon}/>}>
                        <Carousel.Item>
                            <p className={styles.carroselTestimony}>Antes de me consultar com a Dra. Laury Simão, eu estava lutando para perder peso e me sentia constantemente cansada e desmotivada. Após a consulta, a Dra. Laury criou um plano alimentar personalizado e me deu orientações valiosas sobre hábitos saudáveis. Com sua ajuda, consegui perder peso de forma saudável e sustentável. Além disso, minha energia aumentou significativamente e agora me sinto mais confiante e feliz com meu corpo. Sou muito grata pelo suporte e pelos resultados incríveis que obtive com a consulta da Dra. Laury Simão. </p>
                            <p className={styles.carroselTestimonyPeople}>Ana, 34 anos.</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <p className={styles.carroselTestimony}>Consultar-me com a Dra. Laury Simão foi uma das melhores decisões que tomei para melhorar minha saúde. Eu estava lutando com problemas digestivos crônicos e me sentia constantemente inchada e desconfortável. A Dra. Laury realizou uma avaliação completa, ouviu minhas preocupações e me guiou com um plano alimentar personalizado. Os resultados foram surpreendentes! Minha digestão melhorou, minha sensação de inchaço diminuiu e recuperei a qualidade de vida que havia perdido. Estou muito grata pela atenção, cuidado e conhecimento da Dra. Laury Simão.</p>
                            <p className={styles.carroselTestimonyPeople}>Carlos, 42 anos.</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <p className={styles.carroselTestimony}>Após anos de dietas restritivas e sem sucesso, decidi me consultar com a Dra. Laury Simão. Sua abordagem foi totalmente diferente e focada em uma alimentação equilibrada e saudável. Ela me ajudou a entender a importância de ouvir meu corpo e a desenvolver uma relação positiva com a comida. Com seu apoio e orientação, perdi peso de maneira gradual e sustentável, e o mais importante, aprendi a cuidar de mim mesma de forma saudável e sem restrições extremas. Estou verdadeiramente grata pela paciência, compreensão e resultados incríveis que obtive com a consulta da Dra. Laury Simão.</p>
                            <p className={styles.carroselTestimonyPeople}>Renata, 28 anos.</p>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div>
                <Button text='Quero me consultar'></Button>
            </div>
        </section>
    )
}