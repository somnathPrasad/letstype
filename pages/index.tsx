import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";

const Home: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#fff700" }} className={styles.container}>
      <Head>
        <title>Lets Type</title>
        <meta name="description" content="Lets Type home page" />
      </Head>

      <main className={styles.main}>
        <div className={`${styles.container_background} ${styles.show} ${styles.one}`}></div>
        <div className={`${styles.container_background} ${styles.show} ${styles.two}`}></div>
        <div className={`${styles.container_background} ${styles.show} ${styles.three}`}></div>
        <div className={`${styles.container_background} ${styles.show} ${styles.four}`}></div>
        <div className={`${styles.container_background} ${styles.show} ${styles.five}`}></div>
        <div className={`${styles.center_container} py-14 px-28 rounded-3xl`}>
          <h1 className={styles.title}>
            <Typewriter
              options={{
                strings: ["Lets Type"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className={`${styles.grid}`}>
            <a
              href="/create"
              className={`${styles.card} ${styles.room_button}`}
            >
              <h2 className="pt-3">CREATE ROOM</h2>
            </a>

            <a
              href="https://nextjs.org/learn"
              className={`${styles.card} ${styles.room_button}`}
            >
              <h2 className="pt-3">JOIN ROOM</h2>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
