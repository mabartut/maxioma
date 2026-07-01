import styles from "./page.module.css";
import Stories from "@/components/stories/Stories";
import {Heading} from "@/components/heading/Heading";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                MAIN

                <Heading variant={"h1"}> 123</Heading>

                <Stories/>
            </main>
        </div>
    );
}
