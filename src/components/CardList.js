import Card from "./Card";
import "./CardList.css";

function CardList({ items }) {
  return (
    <ul className="card_list">
      {items.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default CardList;
