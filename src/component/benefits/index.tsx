import styles from './index.module.scss';
import { BenefitsItem } from './item';
import imgBenefitEmagrecimento from '../../assets/benefits/emagrecimentoDefinitivo.png';
import imgBenefirGanhoMassa from  '../../assets/benefits/ganhoDeMassa.png';
import imgBenefirAlimentacaoPesonalizada from  '../../assets/benefits/alimentacaoPersonalizada.png';
import imgBenefirMelhorQualidadeDeVida from  '../../assets/benefits/melhorQualidadeDeVida.png';
import imgBenefirAcopanhamentoProcesso from  '../../assets/benefits/acopanhamentoProcesso.png';
import { Button } from '../button';
export function Benefits(){
    return(
        <section className={styles.benefits}>
            <h2 className={styles.benefitsTitle}><strong>Através das minhas consultas</strong> você terá:</h2>
            <div className={styles.benefitsItens}>
                <BenefitsItem textIten='Emagrecimento Definitivo' imgItem={imgBenefitEmagrecimento}/>
                <BenefitsItem textIten='Ganho de massa' imgItem={imgBenefirGanhoMassa}/>
                <BenefitsItem textIten='Alimentação personalizada' imgItem={imgBenefirAlimentacaoPesonalizada}/>
                <BenefitsItem textIten='Melhor qualidade de vida' imgItem={imgBenefirMelhorQualidadeDeVida}/>
                <BenefitsItem textIten='Acompanhamento durante todo o processo' imgItem={imgBenefirAcopanhamentoProcesso}/>
            </div>
            <Button text={'Quero me consultar'}></Button>
        </section>
    )
}