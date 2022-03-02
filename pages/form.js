import { informationData } from "../data/information";
import Image from "next/image";
import styles from "../styles/Form.module.css";
import Link from "next/link";
import useGlobalState from "../store/global";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Form() {
  const router = useRouter();
  const formRef = useRef();
  const [userData, setUserData] = useState({
    email: "",
    collectionName: "",
  });

  const { updateEmailAndName } = useGlobalState();

  const saveAndRedirect = (e) => {
    e.preventDefault();
    updateEmailAndName(userData);
    router.push("/address");
  };

  //reset form on mount
  useEffect(() => {
    formRef.current.reset();
  }, []);
  return (
    <div className={styles.container}>
      {/* Navbar Section */}
    <nav className={styles.nav}>
        <div className={styles.treeImgContain}>
        <Image
            src={informationData.treeImg}
            width="50px"
            height="69px"
            alt="treeImg"
            className={styles.treeImg}
        />
        </div>
        <div className={styles.title}>{informationData.title}</div>
    </nav>

      {/* Hero Section */}
    <main className={styles.heroMain}>
        <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
            <div className={styles.heroHeading}>{informationData.heading}</div>
        </div>

        <section className={styles.formContainer}>
            <div className={styles.progressBarWrapper}>
            <div className={styles.progressBarOne}></div>
            <div className={styles.progressBarTwo}></div>
            </div>

            {/* Form Section */}
            <form
            ref={formRef}
            className={styles.formSection}
            onSubmit={(e) => saveAndRedirect(e)}
            >
            <div className={styles.formStyles}>
                <div>
                <label className={styles.collectionTitle} htmlFor="name">
                    {informationData.collectionTitle}
                </label>
                <div className={styles.labelWrapper}>
                    <input
                    type="text"
                    name="collectionName"
                    className={styles.collectionForm}
                    value={userData.collectionName}
                    onChange={(e) =>
                        setUserData({
                        ...userData,
                        collectionName: e.target.value,
                        })
                    }
                    required
                    />
                </div>
                </div>
                {/* Tagging for the email form*/}
                <div>
                <label className={styles.emailStyles} htmlFor="email">
                    {informationData.emailTitle}
                </label>
                <div className={styles.labelWrapper}>
                    <input
                    type="email"
                    name="email"
                    className={styles.emailForm}
                    value={userData.email}
                    onChange={(e) =>
                        setUserData({
                        ...userData,
                        email: e.target.value,
                        })
                    }
                    />
                </div>
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                {/* <Link href="/address" passHref={true}> */}
                <button className={styles.nextStyles}>
                {informationData.nextButton}
                </button>
                {/* </Link> */}
            </div>
            </form>
        </section>
        </section>
    </main>
    </div>
);
}
