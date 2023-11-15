import styles from "./index.module.scss";
import { BenefitsItem } from "./item";
import imgBenefitEmagrecimento from "../../../../public/images/benefits/emagrecimentoDefinitivo.webp";
import imgBenefirGanhoMassa from "../../../../public/images/benefits/ganhoDeMassa.webp";
import imgBenefirAlimentacaoPesonalizada from "../../../../public/images/benefits/alimentacaoPersonalizada.webp";
import imgBenefirMelhorQualidadeDeVida from "../../../../public/images/benefits/melhorQualidadeDeVida.webp";
import imgBenefirAcopanhamentoProcesso from "../../../../public/images/benefits/acopanhamentoProcesso.webp";
import { Button } from "../button";
interface Iprops {
  refForm: React.RefObject<HTMLDivElement>;
}
export function BenefitsComponent({ refForm }: Iprops) {
  return (
    <section className={styles.benefits}>
      <h2 className={styles.benefitsTitle}>
        <strong>Através das minhas consultas</strong> você terá:
      </h2>
      <div className={styles.benefitsItens}>
        <BenefitsItem
          textIten="Emagrecimento Definitivo"
          imgItem={imgBenefitEmagrecimento}
        />
        <BenefitsItem
          textIten="Ganho de massa"
          imgItem={imgBenefirGanhoMassa}
        />
        <BenefitsItem
          textIten="Alimentação personalizada"
          imgItem={imgBenefirAlimentacaoPesonalizada}
        />
        <BenefitsItem
          textIten="Melhor qualidade de vida"
          imgItem={imgBenefirMelhorQualidadeDeVida}
        />
        <BenefitsItem
          textIten="Acompanhamento durante todo o processo"
          imgItem={imgBenefirAcopanhamentoProcesso}
        />
      </div>
      <Button text={"Quero me consultar"} refForm={refForm}></Button>
    </section>
  );
}
