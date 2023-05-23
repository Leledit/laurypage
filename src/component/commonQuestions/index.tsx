import {Accordion} from 'react-bootstrap';
import style from './index.module.scss';
import imgArrow from '../../assets/arrow.webp'
export function CommonQuestions(){
    return(
        <section className={style.commonQuestions}>
            <h2 className={style.commonQuestionsTitle}>Perguntas Frequentes</h2>
            <div className={style.commonQuestionsItens}>
                <Accordion bsPrefix={style.accordionItem}>
                    <Accordion.Item eventKey="0" bsPrefix={style.accordionHeaders}>
                        <Accordion.Header bsPrefix={style.accordionHeader}>
                            <img src={imgArrow} alt="Imagem que representa uma seta apontada para a direita"/>
                            <p>Por que devo me consultar com um nutricionista?</p>
                        </Accordion.Header>
                        <Accordion.Body bsPrefix={style.accordionBody}><p>Um nutricionista é um profissional especializado em alimentação e nutrição, capaz de fornecer orientações personalizadas para alcançar seus objetivos de saúde. A consulta com um nutricionista pode ajudar a identificar necessidades nutricionais específicas, criar um plano alimentar adequado e promover mudanças saudáveis ​​nos hábitos alimentares.</p> </Accordion.Body>
                    </Accordion.Item>
                    <div className={style.commonDivider}></div>
                    <Accordion.Item eventKey="1" bsPrefix={style.accordionHeaders}>
                        <Accordion.Header bsPrefix={style.accordionHeader}>
                            <img src={imgArrow} alt="Imagem que representa uma seta apontada para a direita"/>
                            <p> Como um nutricionista pode me ajudar a atingir meus objetivos de perda de peso? </p>
                        </Accordion.Header>
                        <Accordion.Body bsPrefix={style.accordionBody}><p>Um nutricionista pode fornecer orientações sobre como criar um déficit calórico saudável para perda de peso, equilibrando a dieta e garantindo a ingestão adequada de nutrientes. Eles podem ajudar a identificar padrões alimentares inadequados, fornecer dicas para controlar a fome e estabelecer metas realistas e sustentáveis ​​para perda de peso.</p> </Accordion.Body>
                    </Accordion.Item>
                    <div className={style.commonDivider}></div>
                    <Accordion.Item eventKey="2" bsPrefix={style.accordionHeaders}>
                        <Accordion.Header bsPrefix={style.accordionHeader}>
                            <img src={imgArrow} alt="Imagem que representa uma seta apontada para a direita"/>
                            <p>Quais são os benefícios de consultar um nutricionista para controle de doenças crônicas, como diabetes ou hipertensão?</p>
                        </Accordion.Header>
                        <Accordion.Body bsPrefix={style.accordionBody}><p>Um nutricionista pode ajudar a controlar doenças crônicas por meio de um plano alimentar personalizado, levando em consideração as necessidades nutricionais específicas e a medicação em uso. Eles podem orientar sobre escolhas alimentares saudáveis, controle de peso, monitoramento de açúcar no sangue ou pressão arterial, e fornecer suporte contínuo para gerenciar melhor a condição.</p> </Accordion.Body>
                    </Accordion.Item>
                    <div className={style.commonDivider}></div>
                    <Accordion.Item eventKey="3" bsPrefix={style.accordionHeaders}>
                        <Accordion.Header bsPrefix={style.accordionHeader}>
                            <img src={imgArrow} alt="Imagem que representa uma seta apontada para a direita"/>
                            <p>Qual é a importância da consulta de acompanhamento com um nutricionista? </p>
                        </Accordion.Header>
                        <Accordion.Body bsPrefix={style.accordionBody}><p>As consultas de acompanhamento permitem avaliar o progresso, fazer ajustes no plano alimentar conforme necessário e fornecer motivação e suporte contínuos. Um nutricionista pode monitorar sua evolução, responder a perguntas, fornecer orientações adicionais e ajudá-lo(a) a manter o foco em seus objetivos de saúde a longo prazo.</p> </Accordion.Body>
                    </Accordion.Item>
                    <div className={style.commonDivider}></div>
                    <Accordion.Item eventKey="4" bsPrefix={style.accordionHeaders}>
                        <Accordion.Header bsPrefix={style.accordionHeader}>
                            <img src={imgArrow} alt="Imagem que representa uma seta apontada para a direita"/>
                            <p>Como um nutricionista pode me ajudar a melhorar minha performance esportiva?</p>
                        </Accordion.Header>
                        <Accordion.Body bsPrefix={style.accordionBody}><p> Um nutricionista especializado em esportes pode fornecer orientações sobre a alimentação adequada para melhorar seu desempenho esportivo. Eles podem ajudar a otimizar a ingestão de nutrientes antes, durante e após os treinos, recomendar suplementos nutricionais adequados e personalizar um plano alimentar para atender às necessidades energéticas e nutricionais específicas do seu esporte. Um nutricionista pode ajudar a maximizar a recuperação muscular, prevenir lesões e melhorar a resistência e a força física.</p> </Accordion.Body>
                    </Accordion.Item>
                    <div className={style.commonDivider}></div>
                </Accordion>
            </div>
        </section>
    )
}

