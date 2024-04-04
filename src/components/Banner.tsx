import "./Banner.css";
import avatarImg from "../assets/png/avatar.png";

function Banner({ userName }: { userName: string | undefined }) {
  return (
    <div className="banner">
      <div className="banner_contents">
        <div className="banner_inner">
          <div className="banner_user">
            <div className="banner_user_avatar">
              <img src={avatarImg} alt="" />
            </div>
            <div className="banner_user_name">@{userName}</div>
          </div>
          <div className="banner_title">⭐️ 즐겨찾기</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
