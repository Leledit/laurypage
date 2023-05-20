import {Accordion} from 'react-bootstrap';
import style from './index.module.scss';
import imgArrow from '../../assets/arrow.png'
export function CommonQuestions(){
    return(
        <section className={style.commonQuestions}>
            <h2 className={style.commonQuestionsTitle}>Perguntas Frequentes</h2>
            <div className={style.commonQuestionsItens}>
                <Accordion bsPrefix={style.accordionItem}>
                    <Accordion.Item eventKey="0" bsPrefix={style.accordionHeaders}>
                        <Accordion.Header bsPrefix={style.accordionHeader}>
                            <img src={imgArrow} alt="Imagem que representa uma seta apontada para a direita"/>
                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        </Accordion.Header>
                        <Accordion.Body bsPrefix={style.accordionBody}><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p> </Accordion.Body>
                    </Accordion.Item>
                    <div className={style.commonDivider}></div>
                    <Accordion.Item eventKey="1" bsPrefix={style.accordionHeaders}>
                        <Accordion.Header bsPrefix={style.accordionHeader}>
                            <img src={imgArrow} alt="Imagem que representa uma seta apontada para a direita"/>
                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        </Accordion.Header>
                        <Accordion.Body bsPrefix={style.accordionBody}><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p> </Accordion.Body>
                    </Accordion.Item>
                    <div className={style.commonDivider}></div>
                    <Accordion.Item eventKey="2" bsPrefix={style.accordionHeaders}>
                        <Accordion.Header bsPrefix={style.accordionHeader}>
                            <img src={imgArrow} alt="Imagem que representa uma seta apontada para a direita"/>
                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        </Accordion.Header>
                        <Accordion.Body bsPrefix={style.accordionBody}><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p> </Accordion.Body>
                    </Accordion.Item>
                    <div className={style.commonDivider}></div>
                    <Accordion.Item eventKey="3" bsPrefix={style.accordionHeaders}>
                        <Accordion.Header bsPrefix={style.accordionHeader}>
                            <img src={imgArrow} alt="Imagem que representa uma seta apontada para a direita"/>
                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        </Accordion.Header>
                        <Accordion.Body bsPrefix={style.accordionBody}><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p> </Accordion.Body>
                    </Accordion.Item>
                    <div className={style.commonDivider}></div>
                    <Accordion.Item eventKey="4" bsPrefix={style.accordionHeaders}>
                        <Accordion.Header bsPrefix={style.accordionHeader}>
                            <img src={imgArrow} alt="Imagem que representa uma seta apontada para a direita"/>
                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        </Accordion.Header>
                        <Accordion.Body bsPrefix={style.accordionBody}><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p> </Accordion.Body>
                    </Accordion.Item>
                    <div className={style.commonDivider}></div>
                </Accordion>
            </div>
        </section>
    )
}

