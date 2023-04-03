import "./card.styles.css";

import { Monster } from "../../App";

type CardProps = {
  monster: Monster
}
// const Card = ({id, name, email } : Monster) => {
const Card = ({monster } : CardProps) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="cartoon-monster"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;