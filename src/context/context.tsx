import { createContext } from "react";
import classNames from "classnames";
import styles from '../component/header/index.module.scss';

const idForme = classNames(styles.formId);
export const idFormContext = createContext(idForme);