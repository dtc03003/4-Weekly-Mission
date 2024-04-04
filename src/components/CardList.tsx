import Card from "./Card";
import "./CardList.css";

function CardList({ items }: any) {
  return (
    <ul className="card_list">
      {items ? items.map((item: any) => <Card item={item} key={item.id} />) : null}
    </ul>
  );
}

export default CardList;
