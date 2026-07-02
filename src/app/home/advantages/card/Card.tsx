import styles from "./Card.module.css";
import {Text} from "@/components/text/Text";

type CardProps = {
    id: string
    title: string
    description: string
}

export const Card = (props: CardProps) => {
    const {id, title, description} = props;

    return (<div className={styles.card}>
        <p className={styles.number}>{id}</p>
        <p className={styles.title}>
            {title}
        </p>
        <Text>
            {description}
        </Text>

        <div className={styles.circle}></div>
    </div>)
}