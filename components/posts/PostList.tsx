// css
import classes from "./css/PostList.module.css";
import PostListItem from "./PostListItem";

interface PostListProps {
	posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
	return (
		<ul className={classes.grid}>
			{posts.map((post, index) => (
				<PostListItem post={post} key={index} />
			))}
		</ul>
	);
};

export default PostList;
