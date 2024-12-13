export type Post = {
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  tags: string[];
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const response = await fetch("https://dummyjson.com/posts");
  const data: { posts: Post[] } = await response.json();

  return data.posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export type PostDetailProps = {
  params: {
    slug: string;
  };
};

export default async function PostDetail({ params }: PostDetailProps) {
  const { slug } = params;

  const response = await fetch(`https://dummyjson.com/posts/${slug}`);
  const post: Post = await response.json();

  return (
    <div className="max-w-[800px] mx-auto p-5 font-sans bg-gray-100 rounded-lg shadow-md flex flex-col gap-2 h-screen justify-center ">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-[1.1rem] leading-7 text-gray-700 mb-6">{post.body}</p>

      <div className="flex flex-col gap-4 justify-between py-3">
        <span>Likes: {post.reactions.likes}</span>
        <span>Dislikes: {post.reactions.dislikes}</span>
      </div>

      <p className="text-center text-base text-gray-500">Views: {post.views}</p>
      <ul className="flex gap-2 list-none p-0">
        {post.tags.map((tag, index) => (
          <li
            key={index}
            className="px-3 py-1.5 bg-gray-300 rounded-full text-[0.9rem] text-gray-700"
          >
            #{tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
