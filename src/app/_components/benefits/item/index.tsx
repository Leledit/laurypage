import Image from "next/image";
import styles from "./index.module.scss";
interface props {
  textIten: string;
  imgItem: any;
}
export function BenefitsItem({ textIten, imgItem }: props) {
  return (
    <div className={styles.benefitsItem}>
      <Image
        src={imgItem}
        alt="Icone que representa um dos beneficios da consultoria"
        className={styles.benefitsImg}
      />
      <h3>{textIten}</h3>
    </div>
  );
}
