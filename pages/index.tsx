// next/react
import type { NextPage } from "next";

// components
import Hero from "../components/home/Hero";
import FeaturedPosts from "../components/home/FeaturedPosts";

const DUMMY_POSTS: Post [] = [
    {
        title: "Title 1",
        slug: "title-1",
        date: "2021-11-08",
        image: "title-1.jpg",
        excerpt: "this is an excerpt",
        content: "this is some content"
    },
    {
        title: "Title 2",
        slug: "title-2",
        date: "2021-11-08",
        image: "title-1.jpg",
        excerpt: "this is an excerpt",
        content: "this is some content"
    },
    {
        title: "Title 3",
        slug: "title-3",
        date: "2021-11-08",
        image: "title-1.jpg",
        excerpt: "this is an excerpt",
        content: "this is some content"
    }
]

const Home: NextPage = () => {
	return (
		<>
			<Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
		</>
	);
};

export default Home;
