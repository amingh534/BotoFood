import Attributes from "../module/Attributes";
import Banner from "../module/Banner";
import Companies from "../module/Companies";
import Definition from "../module/Definition";
import Guide from "../module/Guide";
import Instruction from "../module/Instruction";
import Restriction from "../module/Restriction";
import styles from "./HomePage.module.css";
function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes/>
      <Definition/>
      <Companies/>
      <Instruction/>
      <Guide/>
      <Restriction/>
    </div>
  );
}

export default HomePage;
