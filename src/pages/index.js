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
        <style>
          {`
          html {
            scroll-behavior: smooth;
          }
          `}
        </style>
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

        <section id="detection" className={styles.section}>
          <h2>Detection</h2>
          <p>Artificial intelligence can play a crucial role in the early detection of mental health conditions. By analyzing data such as speech patterns, facial expressions, and social media activity, AI algorithms can identify signs of mental health issues even before individuals are aware of their condition. Early detection enables timely intervention, which can significantly improve treatment outcomes and overall well-being.</p>
        </section>

        <section id="therapy" className={styles.section}>
          <h2>Therapy</h2>
          <p>AI-driven therapy and support systems can help bridge the gap between mental health professionals and individuals seeking help. Chatbots and virtual therapists can provide on-demand, personalized support and guidance to those in need. These AI tools can also act as supplementary resources for therapists, allowing them to monitor patient progress and provide targeted interventions.</p>
        </section>

        <section id="treatment" className={styles.section}>
          <h2>Treatment</h2>
          <p>AI can analyze large amounts of data to generate personalized treatment plans for individuals with mental health conditions. By considering factors such as medical history, genetic predispositions, and lifestyle habits, AI algorithms can recommend tailored therapies and medications. This personalized approach can lead to more effective treatment outcomes and improved patient satisfaction.</p>
        </section>

        <section id="interventions" className={styles.section}>
          <h2>Personalized Interventions</h2>
          <p>AI can help create targeted interventions for individuals by analyzing their unique needs and circumstances. By combining insights from various sources, such as wearable devices, mobile apps, and online interactions, AI can identify patterns and triggers that may contribute to mental health issues. With this information, mental health professionals can develop customized strategies to help individuals manage their symptoms and improve their overall well-being.</p>
        </section>
      </main>
    </>
  )
}
