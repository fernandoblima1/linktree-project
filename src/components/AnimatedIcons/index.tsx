import { AiFillAndroid } from "react-icons/ai";
import styles from "./index.module.css";
import { FaApple, FaDocker, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiSpringboot, SiTypescript } from "react-icons/si";
const iconList = [
  FaReact,
  FaApple,
  AiFillAndroid,
  IoLogoJavascript,
  SiSpringboot,
  FaDocker,
  SiTypescript,
];

export function AnimatedIcons() {
  return (
    <div className={styles.container}>
      <div className={styles.divAnimated}>
        <ul className={styles.iconList}>
          {iconList.map((Icon, index) => (
            <li key={index}>
              <Icon className={styles.icon} size={40} />
            </li>
          ))}
        </ul>
        <ul className={styles.iconList}>
          {iconList.map((Icon, index) => (
            <li key={index}>
              <Icon className={styles.icon} size={40} />
            </li>
          ))}
        </ul>
        <ul className={styles.iconList}>
          {iconList.map((Icon, index) => (
            <li key={index}>
              <Icon className={styles.icon} size={40} />
            </li>
          ))}
        </ul>
        <ul className={styles.iconList}>
          {iconList.map((Icon, index) => (
            <li key={index}>
              <Icon className={styles.icon} size={40} />
            </li>
          ))}
        </ul>
        <ul className={styles.iconList}>
          {iconList.map((Icon, index) => (
            <li key={index}>
              <Icon className={styles.icon} size={40} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
