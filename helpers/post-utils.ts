import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = path.join(process.cwd(), "data", "posts");

export const getPostData = (postIdentifier: string) => {
	// remove extension .md
	const postSlug = postIdentifier.replace(/\.md$/, "");
	const filePath = path.join(postDir, `${postSlug}.md`);
	const fileContent = fs.readFileSync(filePath, "utf-8");

	const { data, content } = matter(fileContent);

	const postData = {
		slug: postSlug,
		...data,
		content: content,
	};
	return postData;
};

export const getPostsFiles = () => {
	return fs.readdirSync(postDir);
};

export const getAllPosts = () => {
	const postFiles = getPostsFiles();

	const allPostsData = postFiles.map((postFile) => {
		return getPostData(postFile);
	});

	const sortedPostsData = allPostsData.sort((postA: any, postB: any) =>
		postA.date > postB.date ? -1 : 1
	);
	return sortedPostsData;
};

export const getFeaturedPosts = () => {
	const allPosts = getAllPosts();

	const featuredPosts = allPosts.filter((post: any) => post.isFeatured);
	return featuredPosts;
};
