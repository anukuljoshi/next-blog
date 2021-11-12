// css
import classes from "./css/PostContent.module.css";

// next/react
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

// components
import PostHeader from "./PostHeader";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

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
