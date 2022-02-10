import Router, { useRouter } from "next/router";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Room: NextPage = () => {
  const router = useRouter();
  const { roomType } = router.query;
  const createRoom = (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Your Name"
        className="w-96 text-4xl rounded-2xl pl-5 py-2 placeholder:text-center border-2 border-sky-700"
      />
      <input
        type="button"
        value="Create and Join"
        className={`${styles.card} ${styles.room_button}`}
      />
    </div>
  );
  const joinRoom = (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Your Name"
        className="w-96 text-4xl mb-2 rounded-2xl pl-5 py-2 placeholder:text-center border-2 border-sky-700"
      />
      <input
        type="text"
        placeholder="Room ID"
        className="w-96 text-4xl rounded-2xl pl-5 py-2 placeholder:text-center border-2 border-sky-700"
      />
      <input
        type="button"
        value="Join Room"
        className={`${styles.card} ${styles.room_button}`}
      />
    </div>
  );
  return (
    <div style={{ backgroundColor: "#fff700" }} className={styles.container}>
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

        <div className={`${styles.center_container} pt-14 px-28 rounded-3xl`}>
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
          {roomType === "create" ? createRoom : joinRoom}
        </div>
      </main>
    </div>
  );
};

export default Room;
