import styles from "./index.module.css";
import { IconType } from "react-icons";

type LinkListProps = {
  link: string;
  title: string;
  icon: IconType;
};

export function LinkList({ link, title, icon: Icon }: LinkListProps) {
  return (
    <div className={styles.container}>
      <a href={link} className={styles.button}>
        <Icon className={styles.icon} />
        {title}
      </a>
    </div>
  );
}
