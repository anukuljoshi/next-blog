// css
import classes from "./css/PostListItem.module.css";

// next/react
import Link from "next/link";
import Image from "next/image";

interface PostListItemProps {
	post: Post;
}

const PostListItem = ({ post }: PostListItemProps) => {
	const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	const imagePath = `/images/posts/${post.slug}/${post.image}`;
    const linkPath = `/posts/${post.slug}`

	return (
		<li className={classes.post}>
			<Link href={linkPath}>
				<a>
					<div className={classes.image}>
						<Image
							src={imagePath}
							alt={post.title}
							width={500}
							height={400}
                            layout={"responsive"}
						/>
					</div>
					<div className={classes.content}>
						<h3>{post.title}</h3>
						<time>{formattedDate}</time>
						<p>{post.excerpt}</p>
					</div>
				</a>
			</Link>
		</li>
	);
};

export default PostListItem;
