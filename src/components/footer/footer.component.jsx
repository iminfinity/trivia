import React from "react";
import "./footer.styles.scss";
import { ReactComponent as Github } from "../../assets/github.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/iminfinity/trivia">
        <Github />
      </a>
    </footer>
  );
};

export default Footer;
