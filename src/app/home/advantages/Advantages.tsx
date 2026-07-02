import styles from "./Advantages.module.css";
import {Heading} from "@/components/heading/Heading";
import {TextWithGradient} from "@/components/text-with-gradient/TextWithGradient";
import {Text} from "@/components/text/Text";
import {Card} from "@/app/home/advantages/card/Card";


const cardsData = [
    {
        id: '01',
        title: 'Точность данных',
        description: 'Проверенная информация и экспертная аналитика для принятия взвешенных решений в любой ситуации.'
    },
    {
        id: '02',
        title: 'Технологичность',
        description: 'Современные цифровые инструменты, основанные на проверенных данных и передовых технологиях.'
    },
    {
        id: '03',
        title: 'Надёжность',
        description: 'Более 20 лет опыта в предоставлении актуальной информации и практичных инструментов для бизнеса.'
    },
    {
        id: '04',
        title: 'Гибкость решений',
        description: 'Адаптивные продукты, которые помогают быстро реагировать на изменения рыночных условий.'
    },
    {
        id: '05',
        title: 'Поддержка в пути',
        description: 'Персональный менеджер и круглосуточная техническая поддержка для каждого клиента.'
    },
    {
        id: '06',
        title: 'Прозрачность',
        description: 'Открытые условия сотрудничества и понятное ценообразование без скрытых комиссий.'
    }
];

export const Advantages = () => {
    return (
        <section className={styles.section}>
            <Heading variant={'h1'}>
                <TextWithGradient>Преимущества </TextWithGradient>
                работы с нами
            </Heading>

            <Text className={styles.text}>
                Мы формируем современные надёжные решения, основанные на проверенных данных, для того, чтобы наши
                клиенты были уверены в любой ситуации, могли быстро адаптироваться к изменяющимся условиям.
            </Text>


            <div className={styles.cards}>
                {cardsData.map(c => <Card key={c.id} id={c.id} title={c.title} description={c.description}/>)}
            </div>

        </section>
    );
}

