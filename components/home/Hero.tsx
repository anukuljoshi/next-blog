import classes from "./css/Hero.module.css";
import Image from "next/image";

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src={"/images/site/hero-image.jpg"}
					alt={"my image"}
					width={500}
					height={500}
				/>
			</div>
			<h1>Hi, I am AJ</h1>
			<p>
				I blog about web development - especially frontend frameworks
				like React.
			</p>
		</section>
	);
};

export default Hero;
