import styles from "./page.module.css";
import Stories from "@/components/stories/Stories";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                MAIN


                <Stories/>
            </main>
        </div>
    );
}
