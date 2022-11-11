import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/my-profile.png"
          alt="Image showing me"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi im Bucky</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
};

export default Hero;
