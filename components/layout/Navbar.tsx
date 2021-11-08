// css
import classes from "./css/Navbar.module.css";

// next/react
import Link from "next/link";

// components
import Logo from "./Logo";

const Navbar = () => {
	return (
		<header className={classes.header}>
			<Link href={"/"}>
				<a>
					<Logo />
				</a>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href={"/posts"}>Posts</Link>
					</li>
					<li>
						<Link href={"/contact"}>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
