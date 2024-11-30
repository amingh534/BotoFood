import styles from "./Card.module.css";
import Loacation from "../icons/Location";
import Doller from "../icons/Dollar";
import Link from "next/link";

function Card(props) {
  const { id, name, price, details, discount } = props;
  return (
    <div className={styles.container}>
      <img src={`/images/${id}.jpeg`} alt={name} />
      <div className={styles.details}>
        <h4>{name}</h4>
        <div>
          <Loacation />
          {details[0].Cuisine}
        </div>
      </div>
      <div className={styles.price}>
        <Doller />
        {discount ? (
          <span className={styles.discount}>
            {(price * (100 - discount)) / 100}$
          </span>
        ) : (
          <span>{price}$</span>
        )}
        {discount ? <div className={styles.badge}>{discount}%</div> :null}
      </div>
      <Link href={`/menu/${id}`}>See Details</Link>
    </div>
  );
}

export default Card;
