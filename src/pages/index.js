import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AI & Mental Health</title>
        <meta name="description" content="AI and Mental Health - Detection, Therapy, Treatment, and Personalized Interventions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>AI & Mental Health</h1>
        <div className={styles.description}>
          <p>Explore the role of artificial intelligence in detecting mental health conditions, providing therapy, treatment, and personalized interventions.</p>
        </div>

        <div className={styles.grid}>
          <a
            href="#detection"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Detection <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn how AI can identify mental health conditions early and accurately.
            </p>
          </a>

          <a
            href="#therapy"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Therapy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover the potential of AI-driven therapy and support systems.
            </p>
          </a>

          <a
            href="#treatment"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Treatment <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Explore how AI can personalize treatment plans for better outcomes.
            </p>
          </a>

          <a
            href="#interventions"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Personalized Interventions <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Understand the role of AI in creating targeted interventions for individuals.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
