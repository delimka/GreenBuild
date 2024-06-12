import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./styles.module.scss";
import { formatDate } from "@/shared/helpers/formatDate";
import { Link } from "react-router-dom";
import ThemeButton from "@/feauters/theme/ui/ThemeButton/ThemeButton";

const Header = () => {
  const { isDark } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <Link to={"/"}>       </Link>

        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <ThemeButton />
    </header>
  );
};

export default Header;
