import { pageData, addressPageData } from "../data/pageData";
import Image from "next/image";
import styles from "../styles/address.module.css";
import useGlobalState from "../store/global";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { BounceLoader } from "react-spinners";
import toast from "react-hot-toast";
import NavBar from "../components/navbar";

export default function Address() {
  const [userDataAvailable, setUserDataAvailable] = useState(false);
  const [loading, setLoading] = useState(false);

  const { email, collectionName, updateMerkleProof } = useGlobalState();
  const router = useRouter();
  const [whitelist, setWhitelist] = useState(" ");

  const generateMerkleProof = async (email, whitelist) => {
    setLoading(true);
    try {
      console.log(whitelist, "WHITE LIST str -------");
      let doubleQuotesRemoved = whitelist.replaceAll('"', "");
      let singleQuotesRemoved = doubleQuotesRemoved.replaceAll("'", "");
      let lineBreaksRemoved = singleQuotesRemoved.replaceAll(/\r?\n|\r/g, "");
      let spacesRemoved = lineBreaksRemoved.replaceAll(" ", "").trim();
      const whitelistArray = spacesRemoved.split(",");
      console.log(whitelistArray, "WHITE LIST ARRAY ][][][][][");
      let data = {
        collectionName: collectionName,
        userEmail: email,
        data: whitelistArray,
      };
      const response = await axios.post(
        "https://merklemeapi.vincanger.repl.co/merkleTree/generate ",
        data
      );
      const dataToPassToNextPage = response.data;
      updateMerkleProof(dataToPassToNextPage);
      toast.success("Success");
      setTimeout(() => {
        setLoading(false);
        router.push("/success");
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error("Failed");
      setLoading(false);
    }
  };

  useEffect(() => {
    let mount = true;

    if (mount) {
      if (!collectionName) {
        router.push("/form");
        setUserDataAvailable(false);
      } else {
        setUserDataAvailable(true);
      }
    }
    return () => {
      mount = false;
    };
  }, [collectionName, router]);

  if (!userDataAvailable) return null;

  return (
    <main className={styles.main}>
      <NavBar />
      <section className={styles.addressSection}>
        <div className={styles.userData}>
          <div>Collection name: {collectionName}</div>
          {email && <div>Email: {email}</div>}
        </div>
        <div className={styles.heading}>{addressPageData.addressHeading}</div>

        <div className={styles.addressFormSection}>
          <textarea
            placeholder={addressPageData.placeholderText}
            rows="20"
            cols="40"
            className={styles.textarea}
            value={whitelist}
            onChange={(e) => setWhitelist(e.target.value)}
          ></textarea>

          <div className={styles.buttonWrapper}>
            <button
              onClick={() => generateMerkleProof(email, whitelist)}
              className={styles.nextStyles}
            >
              {addressPageData.merkleButton}
              <BounceLoader size={20} color={"#21327d"} loading={loading} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
