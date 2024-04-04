import timeAgo from "../util/timeAgo";
import formatDate from "../util/formatDate";
import baseImg from "../assets/png/base.png";
import star from "../assets/svg/star.svg";
import kebab from "../assets/svg/kebab.svg";
import "./Card.css";

function Card({ item }) {
  const formatCreatedDate = formatDate(item.createdAt || item.created_at);

  return (
    <a className="card_list_item" href={item.url} target="_blank" rel="noreferrer noopener">
      <div className="img_area">
        <img className="img_main" src={item.imageSource || item.image_source || baseImg} alt="" />
        <img className="img_star" src={star} alt="" />
      </div>
      <div className="text_area">
        <div className="time_kebab">
          <time className="time">{timeAgo(formatCreatedDate)}</time>
          <img src={kebab} alt="" />
        </div>
        <p className="description">{item.description}</p>
        <p className="created_at">{formatCreatedDate}</p>
      </div>
    </a>
  );
}

export default Card;
