import styles from './index.module.scss';
export function Container(){
    return(
        <section className={styles.container}>
            <div className={styles.about}>
                About
            </div>
            <div className={styles.operation}>
                operação
            </div>
        </section>
    )
}