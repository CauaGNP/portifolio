import CodeDescription from "@/components/CodeDescription/CodeDescription";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className={styles.divContain}>
        <Header />
        <main className={styles.main}>
          <section className={styles.section}>
              <h1 className={styles.title}>Como eu fiz o meu portifólio?</h1>
              <h2 className={styles.subTitle}>Essa página foi feita para explicar como foi construido o site.</h2>
              
              <section>

                <CodeDescription title="Nextjs" description="O Next.js é um framework para React, que facilita a criação de sites e aplicações web modernas, que facilita oferencendo vários tipos de recursos. Tudo isso torna os projetos mais rápidos, escaláveis e fáceis de desenvolver."/>

                <CodeDescription title="Componentes" description="Componentes são linhas de códigos que iremos reutilizá-los durate nossa aplicação. Esses códigos ficam dentro da pasta Components." urlImage="componentsFiles.png"/>

                <CodeDescription title="NavBar" description="Para criar a navBar criei um componete Header e dentro dele criei a navBar onde toda a lógica de marcar com uma barra lateral foi construída." urlImage="headerComponent.png"/>

                <CodeDescription title="Estados" description="Durante a aplicação temos alguns estados que estão sendo utilizados. Podemos observar uma grande utilização no jogo" urlImage="useState.png"/>

                <CodeDescription title="Lucide" description="Lucide foi a biblioteca que eu escolhi para criar os ícones. Nela você irá importar como um componente e personalizá-la com você quiser(size={}, color={},...)" urlImage="lucideImage.png"/>
              </section>
          </section>
        </main>
    </div>
  );
}

