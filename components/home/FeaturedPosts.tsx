// css
import classes from "./css/FeaturedPosts.module.css";

// components
import PostList from "../posts/PostList";

interface FeaturedPostsProps {
    posts: Post [];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostList posts={ posts } />
        </section>
    )
}

export default FeaturedPosts
