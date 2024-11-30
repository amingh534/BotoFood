import styles from "./Restriction.module.css";

function Restriction() {
  return (
    <div className={styles.container}>
      <h3>Restriction</h3>
      <p>
        Prohibted items.Merchants may only offer to sell item expressly
        permitted by thier argreement with Uber.A merchant cannot offer
        specially regulated or illicit items,like cannabidiol (CBD) and
        tetrahyrocannabinoal (THC),on their Uber Eats menu
      </p>
    </div>
  );
}

export default Restriction;
