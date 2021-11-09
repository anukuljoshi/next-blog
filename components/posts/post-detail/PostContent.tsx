// css
import classes from "./css/PostContent.module.css";

// next/react
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

// components
import PostHeader from "./PostHeader";

interface PostContentProps {
	post: Post;
}

const PostContent = ({ post }: PostContentProps) => {
	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const customComponents = {
		img(image: any) {
			return (
				<Image
					src={`/images/posts/${post.slug}/${image.src}`}
					alt={image.alt}
					width={900}
					height={400}
				/>
			);
		},
		code(code: any) {
			const { className, children } = code;
			const language = className.split("-")[1];
			return (
				<SyntaxHighlighter style={atomDark} language={language}>
					{children}
				</SyntaxHighlighter>
			);
		},
	};

	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={customComponents}>
				{post.content}
			</ReactMarkdown>
		</article>
	);
};

export default PostContent;
