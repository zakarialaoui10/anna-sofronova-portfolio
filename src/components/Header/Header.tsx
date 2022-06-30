import cn from "classnames/bind";
import Cookies from "js-cookie";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import styles from "./Header.module.scss";
import MyPhoto from "../../assets/img-home.png";
import Socials from "./Socials/Socials";
import CTA from "./CTA/CTA";
import { useTheme } from "../../hooks/useTheme";
import { FormControl, MenuItem, Select } from "@mui/material";

const Header = ({ handleChange }: { handleChange: (e: string) => void }) => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const currentLocale = Cookies.get("i18next") || "en";
  return (
    <header className={styles.header} id={"home"}>
      <div className={cn("container", styles.container)}>
        <div>
          <h3>{t("header_hello")}</h3>

          <h1>{t("header_name")}</h1>
          <h3 className={cn("text-light")}>{t("header_profession")}</h3>
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
            <a href={"#contact"}>{t("header_scroll")}</a>
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
              <MenuItem value={"ru"}>🇷🇺</MenuItem>
              <MenuItem value={"en"}>🇬🇧</MenuItem>
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
