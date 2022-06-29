import cn from "classnames/bind";
import { FormattedMessage } from "react-intl";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import styles from "./Header.module.scss";
import MyPhoto from "../../assets/img-home.png";
import Socials from "./Socials/Socials";
import CTA from "./CTA/CTA";
import { useTheme } from "../../hooks/useTheme";
import { FormControl, MenuItem, Select } from "@mui/material";

const Header = ({
  currentLocale,
  handleChange,
}: {
  currentLocale: string;
  handleChange: (e: string) => void;
}) => {
  const { theme, setTheme } = useTheme();
  return (
    <header className={styles.header} id={"home"}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3>
            <FormattedMessage id={"header_hello"} />
          </h3>
          <h1>
            <FormattedMessage id={"header_name"} />
          </h1>
          <h3 className={cn("text-light")}>
            <FormattedMessage id={"header_profession"} />
          </h3>
        </div>
        <CTA currentLocale={currentLocale} />
        <div className={styles.me}>
          <div className={styles.social}>
            <Socials />
          </div>
          <div className={styles.photo}>
            <img src={MyPhoto} alt="me" />
          </div>
          <div className={styles.scrollDown}>
            <a href={"#contact"}>
              <FormattedMessage id={"header_scroll"} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.other}>
        <div className={styles.lang}>
          <FormControl fullWidth>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              label="lang"
              value={currentLocale}
              onChange={(e) => handleChange(e.target.value)}
            >
              <MenuItem value={"ru-RU"}>🇷🇺</MenuItem>
              <MenuItem value={"en-US"}>🇬🇧</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          className={styles.switch}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </div>
      </div>
    </header>
  );
};

export default Header;
