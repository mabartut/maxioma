import styles from "./page.module.css";
import Stories from "@/components/stories/Stories";
import {Heading} from "@/components/heading/Heading";
import {TextWithGradient} from "@/components/text-with-gradient/TextWithGradient";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                MAIN

                <Heading variant={"h1"}>

                    123
                    <TextWithGradient>456</TextWithGradient>
                    <TextWithGradient variant={'blue'}>789</TextWithGradient>

                </Heading>

                <Stories/>
            </main>
        </div>
    );
}
