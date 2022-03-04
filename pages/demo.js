import { demoPageData } from "../data/demopage";
import styles from "../styles/demo.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { BounceLoader } from "react-spinners";
import axios from "axios";

export default function Demo() {
  const formRef = useRef();
  const [isWhitelist, setIsWhitelist] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const [loading, setLoading] = useState(false);
  const [verifyData, setVerifyData] = useState({
    whitelist: "",
    rootHash: "",
    leafToVerify: "",
  });

  const checkIfWhitelist = async (e) => {
    e.preventDefault();
    setShowIcon(false);
    setLoading(true);
    try {
      const response = await axios.post(
        "https://merklemeApi.vincanger.repl.co/verify/proof",
        verifyData
      );
      const proof = response.data;

      console.log("proof", proof);
      setIsWhitelist(true);
      setShowIcon(true);
      setLoading(false);
      toast.success("Whitelisted");
    } catch (error) {
      console.error(error);
      toast.error("Not Whitelisted");
      setIsWhitelist(false);
      setShowIcon(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    formRef.current.reset();
  }, []);
  return (
    <div>
      <main>
        <nav className={styles.demoNavbar}>
          <div className={styles.demoTreeContainer}>
            <Image
              src={demoPageData.treeImg}
              width="50px"
              height="69px"
              className={styles.demoTree}
              alt="tree"
            />
          </div>
          <div className={styles.demoTitle}>{demoPageData.title}</div>
        </nav>
      </main>

      {/* Main section */}
      <section>
        <h1 className={styles.demoHeadingStyles}>{demoPageData.demoHeading}</h1>
        <form
          ref={formRef}
          className={styles.formSection}
          onSubmit={(e) => checkIfWhitelist(e)}
        >
          <div className={styles.formStyles}>
            <label className={styles.demoLabel} htmlFor="Whitelist link">
              {demoPageData.whitelistInput}
            </label>
            <div className={styles.demoLabelWrapper}>
              <input
                className={styles.whitelistStyles}
                type="text"
                name="whitelist"
                value={verifyData.whitelist}
                onChange={(e) =>
                  setVerifyData({
                    ...verifyData,
                    whitelist: e.target.value,
                  })
                }
                required
              />
            </div>

            <label className={styles.demoLabel} htmlFor="rootHash">
              {demoPageData.rootHash}
            </label>
            <div className={styles.demoLabelWrapper}>
              <input
                className={styles.whitelistStyles}
                type="text"
                name="rootHash"
                value={verifyData.rootHash}
                onChange={(e) =>
                  setVerifyData({
                    ...verifyData,
                    rootHash: e.target.value,
                  })
                }
                required
              />
            </div>

            <label className={styles.addressStyles} htmlFor="Whitelist link">
              {demoPageData.verifyInput}
            </label>
            <div className={styles.verifyAddress}>
              <input
                className={styles.addressInput}
                type="text"
                name="leafToVerify"
                value={verifyData.leafToVerify}
                onChange={(e) =>
                  setVerifyData({
                    ...verifyData,
                    leafToVerify: e.target.value,
                  })
                }
                required
              />
              {showIcon && (
                <div className={styles.isWhitelist}>
                  <Image
                    src={
                      isWhitelist ? "/assets/correct.png" : "/assets/remove.png"
                    }
                    width="25px"
                    height="25px"
                    alt="treeImg"
                  />
                </div>
              )}
            </div>
          </div>
          <div className={styles.demoButtonWrapper}>
            <button className={styles.generateButtonStyles}>
              {demoPageData.generateButton}
              <BounceLoader size={20} color={"#21327d"} loading={loading} />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
