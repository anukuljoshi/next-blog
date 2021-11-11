// next/react
import type { GetStaticProps } from "next";
import Head from "next/head";

// components
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts";

// utils
import { getFeaturedPosts } from "../helpers/post-utils";

interface HomeProps {
	posts: Post[];
}

const Home = ({ posts }: HomeProps) => {
	return (
		<>
			<Head>
				<title>AJ Blog</title>
				<meta
					name={"description"}
					content={"I post about programming and web development."}
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);
};

export const getStaticProps: GetStaticProps = (context) => {
	const featuredPosts = getFeaturedPosts();
	return {
		props: {
			posts: featuredPosts,
		},
		revalidate: 24 * 60 * 60,
	};
};

export default Home;
