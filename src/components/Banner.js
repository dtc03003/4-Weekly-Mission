import { useEffect, useState } from "react";
import "./Banner.css";
import { getUser } from "../api/api";
import avatarImg from "../assets/png/avatar.png";

function Banner() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const result = await getUser();
        setUsers(result);
      } catch (error) {
        console.error(error);

        return;
      }
    };
    loadUserData();
  }, []);

  return (
    <div className="banner">
      <div className="banner_contents">
        <div className="banner_inner">
          <div className="banner_user">
            <div className="banner_user_avatar">
              <img src={avatarImg} alt="" />
            </div>
            <div className="banner_user_name">@{users.name}</div>
          </div>
          <div className="banner_title">⭐️ 즐겨찾기</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
