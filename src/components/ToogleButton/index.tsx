import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { FiMoon, FiSun } from "react-icons/fi";

export function ToggleButton() {
  const [isToggled, setIsToggled] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    handleToggleTheme(isToggled);
  }, [isToggled]);

  const handleToggle = () => {
    const toggled = !isToggled;
    setIsToggled(toggled);
    localStorage.setItem("theme", toggled ? "dark" : "light");
  };

  const handleToggleTheme = (isToggled: boolean) => {
    const body = document.querySelector("body");
    if (body) {
      body.setAttribute("data-theme", isToggled ? "dark" : "light");
    }
  };

  return (
    <button className={styles.toggleButton} onClick={handleToggle}>
      {isToggled ? (
        <FiMoon className={styles.icon} />
      ) : (
        <FiSun className={styles.icon} />
      )}
    </button>
  );
}
