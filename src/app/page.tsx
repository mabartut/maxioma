import styles from "./page.module.css";
import Stories from "@/components/stories/Stories";
import {Heading} from "@/components/heading/Heading";
import {TextWithGradient} from "@/components/text-with-gradient/TextWithGradient";
import {Button} from "@/components/button/Button";

export default function Home() {
    return (
        <div className={`${styles.page} container`}>
            <main className={styles.main}>
                MAIN

                <Heading variant={"h1"}>

                    123
                    <TextWithGradient>456</TextWithGradient>
                    <TextWithGradient variant={'blue'}>789</TextWithGradient>

                </Heading>

                <Stories/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <Button variant={'1'}>Кнопка 1</Button>
                <Button variant={'1'} disabled>Кнопка 1</Button>
                <Button variant={'2'}>Кнопка 2</Button>
                <Button variant={'4'} disabled>Кнопка 4
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.5969 10.8204C24.1205 10.2969 24.1205 9.44801 23.5969 8.92446L15.0651 0.392693C14.5416 -0.130859 13.6927 -0.130859 13.1692 0.392693C12.6456 0.916245 12.6456 1.76509 13.1692 2.28864L20.753 9.87244L13.1692 17.4562C12.6456 17.9798 12.6456 18.8286 13.1692 19.3522C13.6927 19.8757 14.5416 19.8757 15.0651 19.3522L23.5969 10.8204ZM0 9.87244V11.2131H22.6489V9.87244V8.5318H0V9.87244Z"
                            fill="currentColor"/>
                        <path
                            d="M23.5969 10.8204C24.1205 10.2969 24.1205 9.44801 23.5969 8.92446L15.0651 0.392693C14.5416 -0.130859 13.6927 -0.130859 13.1692 0.392693C12.6456 0.916245 12.6456 1.76509 13.1692 2.28864L20.753 9.87244L13.1692 17.4562C12.6456 17.9798 12.6456 18.8286 13.1692 19.3522C13.6927 19.8757 14.5416 19.8757 15.0651 19.3522L23.5969 10.8204ZM0 9.87244V11.2131H22.6489V9.87244V8.5318H0V9.87244Z"
                            fill="currentColor" fill-opacity="0.2"/>
                    </svg>
                </Button>
                <Button variant={'5'}>Кнопка 5</Button>
                <Button variant={'6'}>Кнопка 6</Button>
                <Button variant={'6'} disabled>Кнопка 6</Button>
                <Button variant={'7'}>Кнопка 7

                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.5969 10.8204C24.1205 10.2969 24.1205 9.44801 23.5969 8.92446L15.0651 0.392693C14.5416 -0.130859 13.6927 -0.130859 13.1692 0.392693C12.6456 0.916245 12.6456 1.76509 13.1692 2.28864L20.753 9.87244L13.1692 17.4562C12.6456 17.9798 12.6456 18.8286 13.1692 19.3522C13.6927 19.8757 14.5416 19.8757 15.0651 19.3522L23.5969 10.8204ZM0 9.87244V11.2131H22.6489V9.87244V8.5318H0V9.87244Z"
                            fill="currentColor"/>
                        <path
                            d="M23.5969 10.8204C24.1205 10.2969 24.1205 9.44801 23.5969 8.92446L15.0651 0.392693C14.5416 -0.130859 13.6927 -0.130859 13.1692 0.392693C12.6456 0.916245 12.6456 1.76509 13.1692 2.28864L20.753 9.87244L13.1692 17.4562C12.6456 17.9798 12.6456 18.8286 13.1692 19.3522C13.6927 19.8757 14.5416 19.8757 15.0651 19.3522L23.5969 10.8204ZM0 9.87244V11.2131H22.6489V9.87244V8.5318H0V9.87244Z"
                            fill="currentColor" fill-opacity="0.2"/>
                    </svg>

                </Button>
                <Button variant={'4_Blue'}>Кнопка 4_Blue</Button>
                <Button variant={'5_Blue'}>Кнопка 5_Blue</Button>
                <Button variant={'5_Blue'} disabled>Кнопка 5_Blue</Button>
            </main>
        </div>
    );
}
