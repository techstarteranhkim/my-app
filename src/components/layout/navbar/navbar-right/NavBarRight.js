import { Link } from "react-router-dom";
import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";

function NavBarRight() {
  return (
    <div className={styles.mainContainer}>
      <Link to="/login">
        <StandardBtn text={"Login"} />
      </Link>
      <div className={styles.spacer} />
      <StandardBtn text={"Sign Up"} />
    </div>
  );
}

export default NavBarRight;
