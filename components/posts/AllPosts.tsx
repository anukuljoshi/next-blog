import classes from "./css/AllPosts.module.css";
import PostList from "./PostList";

interface AllPostsProps {
	posts: Post[];
}

const AllPosts = ({ posts }: AllPostsProps) => {
	return (
		<section className={classes.posts}>
			<h1>All Posts</h1>
			<PostList posts={posts} />
		</section>
	);
};

export default AllPosts;
