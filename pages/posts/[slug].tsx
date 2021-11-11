// next/react
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

// components
import PostContent from "../../components/posts/post-detail/PostContent";

// utils
import { getPostData, getPostsFiles } from "../../helpers/post-utils";

interface PostDetailPageProps {
	post: Post;
}

const PostDetailPage = ({ post }: PostDetailPageProps) => {
	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta name="description" content={post.excerpt} />
			</Head>
			<PostContent post={post} />
		</>
	);
};

export const getStaticProps: GetStaticProps = (context) => {
	const slug = context.params!.slug as string;
	const postData = getPostData(slug);
	return {
		props: {
			post: postData,
		},
		revalidate: 30 * 60,
	};
};

export const getStaticPaths: GetStaticPaths = (context) => {
	const filesNames = getPostsFiles();
	const slugs = filesNames.map((fileName) => fileName.replace(/\.md$/, ""));
	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
};

export default PostDetailPage;
