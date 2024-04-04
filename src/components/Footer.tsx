import "./Footer.css";
import { ICONS } from "../constants/path";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="codeIt">
          <p>©codeit - 2023</p>
        </div>
        <div className="privacy">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/faq.html">FAQ</a>
        </div>
        <div className="external_link">
          {ICONS.map(({ id, name, url, img }) => (
            <a className="icon" key={id} href={url} target="_blank" rel="noreferrer noopener">
              <img src={img} alt={name + " 아이콘"} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
