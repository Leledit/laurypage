import { Button } from "../button";
import styles from './index.module.scss';
export function NecessaryInvestment(){
    return(
        <section className={styles.containerInvest}>
            <div className={styles.investInfos}>
                <h2 className={styles.investTitle}>Investimento necessario</h2>
                <p className={styles.investDescript}>Aproveite um desconto exclusivo ao assinar o plano de nutrição personalizado. Cuide da sua saúde com orientação especializada e alcance seus objetivos de forma eficiente e econômica. </p>
                <p className={styles.investValorOriginal}>R$ 175</p>
                <p className={styles.investValorDesconto}>R$ 120,00</p>
                <p className={styles.investValorPayment}>Temos diversas formas de pagamento</p>
                <Button text="Quero me consultar" type="smalButton"/>
            </div>
        </section>
    )
}