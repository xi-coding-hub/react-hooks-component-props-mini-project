import Article from "./Article";
import blogData from "../data/blog";

export default function ArticleList() {
   
    const articles = blogData.posts.map((post) => <Article 
    key = {post.id} title = {post.title}/>)
   
    return (
        <main>
            {articles}
        </main>

    )
}