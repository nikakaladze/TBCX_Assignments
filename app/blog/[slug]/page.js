// Generate static params for static generation of each post
export async function generateStaticParams() {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();

    return data.posts.map((post) => ({
        slug: post.id.toString(),  // Generate slug for each post
    }));
}

// Server-side component for rendering post details
export default async function PostDetail({ params }) {
    const { slug } = params;

    const response = await fetch(`https://dummyjson.com/posts/${slug}`);
    const post = await response.json();

    return (
        <div className="container">
            <h1 className="text-center text-4xl text-gray-800 my-5 font-sans">{post.title}</h1>
            <p className="body">{post.body}</p>

            
            <div className="reactions">
                <span>Likes: {post.reactions.likes}</span>
                <span>Dislikes: {post.reactions.dislikes}</span>
            </div>

            
            <p className="views">Views: {post.views}</p>
            <ul className="tags">
                {post.tags.map((tag, index) => (
                    <li key={index}>#{tag}</li>
                ))}
            </ul>
        </div>
    );
}

