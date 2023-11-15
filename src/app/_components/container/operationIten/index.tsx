import styles from "./index.module.scss";
import numberOne from "../../../../../public/images/numbers/one.webp";
import numberTwo from "../../../../../public/images/numbers/two.webp";
import numberThree from "../../../../../public/images/numbers/three.webp";
import numberFour from "../../../../../public/images/numbers/four.webp";
import Image from "next/image";

interface props {
  title: string;
  text: string;
  imgNumber: number;
}

export function Operationitem({ title, text, imgNumber }: props) {
  const numberItem: any = returnImgNumber();

  return (
    <div className={styles.item}>
      <Image
        src={numberItem}
        alt="Imagem que representa um dos passos da consulta da doutora"
      />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );

  function returnImgNumber() {
    switch (imgNumber) {
      case 1:
        return numberOne;
      case 2:
        return numberTwo;
      case 3:
        return numberThree;
      case 4:
        return numberFour;
      default:
        return numberOne;
    }
  }
}
