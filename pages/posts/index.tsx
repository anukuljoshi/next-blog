// components
import { GetStaticProps } from "next";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../helpers/post-utils";

interface PostListPageProps {
	posts: Post[];
}

const PostListPage = ({ posts }: PostListPageProps) => {
	return (
		<>
			<AllPosts posts={posts} />
		</>
	);
};

export const getStaticProps: GetStaticProps = (context) => {
	const allPosts = getAllPosts();
	return {
		props: {
			posts: allPosts,
		},
		revalidate: 24 * 60 * 60,
	};
};

export default PostListPage;
