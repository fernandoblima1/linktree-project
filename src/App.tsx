import { ToggleButton } from "./components/ToogleButton";
import { Photo } from "./components/Photo";
import styles from "./App.module.css";
import { AnimatedIcons } from "./components/AnimatedIcons";
import { Footer } from "./components/Footer";
import { LinkList } from "./components/LinkList";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
export function App() {
  const links = [
    {
      link: "https://www.instagram.com/fernandoborg3s",
      title: "Me acompanhe no Instagram",
      icon: FaInstagram,
    },
    {
      link: "https://github.com/fernandoblima1/",
      title: "Meus projetos no GitHub",
      icon: FaGithub,
    },
    {
      link: "https://www.linkedin.com/in/leandro-ferreira-oliveira/",
      title: "Minha carreira no LinkedIn",
      icon: FaLinkedin,
    },
    {
      link: "mailto:luisfernando2002@gmail.com",
      title: "Meu email para contato",
      icon: FiMail,
    },
  ];

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.header}>
          <ToggleButton />
        </div>
        <Photo />
        <AnimatedIcons />
        {links.map((link, index) => (
          <LinkList
            key={index}
            link={link.link}
            title={link.title}
            icon={link.icon}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
