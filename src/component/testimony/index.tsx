import { Button } from '../button';
import styles from './index.module.scss';
import {Carousel} from 'react-bootstrap';
import prevIcon from '../../assets/prevIcon.png';
import nextIcon from '../../assets/nestIcon.png';
export function Testimony(){
    return(
        <section className={styles.testimony}>
            <h2 className={styles.testimonyTitle}>Veja alguns depoimentos</h2>
            <div className={styles.testimonyContainer}>
                <h3 className={styles.testimonySubTitle}>Depoimentos de pacientes que ja consultaram comigo, é tiveram <strong>resultados positivos</strong></h3>
                <div className={styles.carousel}>
                    <Carousel indicators={false} prevIcon={<img src={prevIcon}/>} nextIcon={<img src={nextIcon}/>}>
                        <Carousel.Item>
                            <p className={styles.carroselTestimony}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's is simply dummy text of the printing and typesetting industry. Lorem Ipsum has typesetting industry. Lorem Ipsum has Lorem Ipsum has typesetting industry. Lorem Ipsum has </p>
                            <p className={styles.carroselTestimonyPeople}>Leandro caixeta</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <p className={styles.carroselTestimony}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's is simply dummy text of the printing and typesetting industry. Lorem Ipsum has typesetting industry. Lorem Ipsum has Lorem Ipsum has typesetting industry. Lorem Ipsum has </p>
                            <p className={styles.carroselTestimonyPeople}>Leandro caixeta</p>
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