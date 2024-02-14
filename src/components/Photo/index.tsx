import styles from "./index.module.css";
export function Photo() {
  return (
    <div className={styles.container}>
      <img
        className={styles.foto}
        src="https://i.ibb.co/ySmWXWF/IMG-7518.jpg"
        alt="foto"
        width={124}
      />
      <div className={styles.header}>
        <div className={styles.ola}>
          <img
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
            width="30"
          />
          <span>Olá! Eu sou</span>
        </div>
        <div className={styles.nome}>
          <span>Luis Fernando</span>
        </div>

        <div className={styles.description}>
          <span>
            Sou desenvolvedor fullstack, especializado em Spring Boot e React,
            usando as linguagens <strong>Java</strong> e{" "}
            <strong>Typescript</strong>.
          </span>
        </div>
      </div>
    </div>
  );
}
