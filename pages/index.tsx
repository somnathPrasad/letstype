import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#fff700" }} className={`${styles.container} h-screen w-screen`}>
      <Head>
        <title>Lets Type</title>
        <meta name="description" content="Lets Type home page" />
      </Head>

      <main className={styles.main}>
        {/* background box designs */}
        <div
          className={`${styles.container_background} ${styles.show} ${styles.one}`}
        ></div>
        <div
          className={`${styles.container_background} ${styles.show} ${styles.two}`}
        ></div>
        <div
          className={`${styles.container_background} ${styles.show} ${styles.three}`}
        ></div>
        <div
          className={`${styles.container_background} ${styles.show} ${styles.four}`}
        ></div>
        <div
          className={`${styles.container_background} ${styles.show} ${styles.five}`}
        ></div>

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
            <code className={styles.code}>
              challenge your friend in a typing race.
            </code>
          </p>

          <div className={`${styles.grid}`}>
            <Link href="/room/create">
              <a className={`${styles.card} ${styles.room_button}`}>
                <h2 className="pt-3">CREATE ROOM</h2>
              </a>
            </Link>
            <Link href="/room/join">
            <a
              className={`${styles.card} ${styles.room_button}`}
            >
              <h2 className="pt-3">JOIN ROOM</h2>
            </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
