import Link from "next/link";
import m from "./PressetErrorPopup.module.scss";

const PressetErrorPopup = () => {
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <div className={m.modal}>
          <div className={m.textWrapper}>
            <h1 className={m.errorTitle}>Error loading application template</h1>
            <h3 className={m.errorText}>
              go to the store and repurchase the template
            </h3>
          </div>
          <div className={m.buttonWrapper}>
            <Link href={"/market"} className={m.button}>
              Go to market
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressetErrorPopup;
