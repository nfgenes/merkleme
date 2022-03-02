import { addressPage } from "../data/addresspage";
import Image from "next/image";
import styles from "../styles/address.module.css";
import useGlobalState from "../store/global";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Address() {
  const [userDataAvailable, setUserDataAvailable] = useState(false);
  const { email, collectionName } = useGlobalState();
  const router = useRouter();
  const [userAddress, setUserAddress] = useState([]);

  const generateMerkleProof = async (email, userAddress) => {
    try {
      const test = [
        "0x47295F5dE6A35910cC5AA910643f7e087D18f903","0x1D42025CDE94B60e99542E537f8E1eeCE9BB109c","0x2EF9A043955f934c93632C9E45BA739e5468DA6d","0x36ca470Dbe63d2628f4CA2dEaE16ea5f2eD6106a","0x47BB7eBeBaa6Cb3c48547A78740E68270A043FEe","0x5d95E8c0c6aA9d5bAD5A6a4155FE485Bca3000a5","0x6CA1a6928b7CDD926cfdf8200197833520E9e9DF","0x7a76D4A70131D0E4BDCB8c5C294C0c475D5FF024","0x8a41612B7cB57f87Bb3D6708eD35bD72E66d78BD","0x9E49685636a037416569d1d03f87BA5955ccFbe7","0x105D6467F1F42103cC07ca91733E8DaFB3c27D57"
      ]
      let data = {
        "collectionName": "orlundo",
        "userEmail": email,
        "data": userAddress,
      }
      const response = await axios.post('https://merklemeapi.vincanger.repl.co/merkleTree/generate ', data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


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
      <nav className={styles.nav}>
        <div className={styles.treeImgContain}>
          <Image
            src={addressPage.treeImgAsset}
            width="50px"
            height="69px"
            alt="treeImg"
            className={styles.treeImg}
          />
        </div>
        <div className={styles.title}>{addressPage.merkleTitle}</div>
      </nav>

      <section className={styles.addressSection}>
        <div className={styles.userData}>
          <div>Collection name: {collectionName}</div>
          {email && <div>Email: {email}</div>}
        </div>
        <div className={styles.heading}>{addressPage.addressHeading}</div>

        <div className={styles.addressFormSection}>
          <textarea
            placeholder={addressPage.placeholderText}
            rows="20"
            cols="40"
            className={styles.textarea}
            value={userAddress}
            onChange={(e) => setUserAddress([...e.target.value])}
          ></textarea>

          <div className={styles.buttonWrapper}>
            <button onClick={() => generateMerkleProof(email, userAddress)} className={styles.nextStyles}>
              {addressPage.merkleButton}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
