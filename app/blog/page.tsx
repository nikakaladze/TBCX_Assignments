import Link from "next/link";

const POSTS_PER_PAGE = 9;

type Post = {
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number;
  };
  views: number;
};

type BlogProps = {
  searchParams: {
    page?: string;
  };
};

const Blog = async ({ searchParams }: BlogProps) => {
  const currentPage = parseInt(searchParams.page || "1");
  const postsUrl = `https://dummyjson.com/posts?limit=${POSTS_PER_PAGE}&skip=${
    (currentPage - 1) * POSTS_PER_PAGE
  }`;

  try {
    const response = await fetch(postsUrl);
    const data: { posts: Post[]; total: number } = await response.json();
    const posts = data.posts || [];
    const totalPosts = data.total || 0;
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

    return (
      <div>
        <div className="main-title min-h-full">
          <h1 className="text-center text-4xl text-gray-800 my-5 font-sans">
            News Page
          </h1>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 p-5 max-w-[1200px] mx-auto opacity-100 transform scale-100 transition-opacity transition-transform duration-500 ease-in-out">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                className="p-5 border-none rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out cursor-pointer flex flex-col justify-between h-full"
                key={post.id}
                href={`/blog/${post.id}`}
              >
                <h2 className="mb-4 text-xl text-gray-900 font-semibold font-sans">
                  {post.title}
                </h2>
                <p>{post.body}</p>
                <div className="flex justify-between items-center mt-5 text-gray-500 text-sm">
                  <span className="flex items-center dark:bg-gray-800 text-gray-900">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="18"
                      height="18"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    {post.reactions.likes} Likes
                  </span>
                  <span className="flex items-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="18"
                      height="18"
                    >
                      <path d="M12 4.5C7 4.5 2.73 8.11 1 12c1.73 3.89 6 7.5 11 7.5s9.27-3.61 11-7.5c-1.73-3.89-6-7.5-11-7.5zm0 11.25c-2.35 0-4.25-1.9-4.25-4.25S9.65 7.25 12 7.25 16.25 9.15 16.25 12 14.35 15.75 12 15.75zm0-6.5A2.25 2.25 0 109 12a2.25 2.25 0 003-2.25z" />
                    </svg>
                    {post.views} Views
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
        <div className="flex w-full justify-center bg-gray-50 border-t border-gray-300">
          <div className="max-w-[1200px] w-full flex justify-between items-center font-sans px-5 py-2.5">
            <div className="flex justify-center items-center gap-5">
              <Link
                href={`?page=${currentPage - 1}`}
                className={`bg-transparent border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md cursor-pointer text-base flex items-center justify-center transition-colors duration-300 font-bold ${
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }`}
              >
                ←
              </Link>
              <Link
                href={`?page=${currentPage + 1}`}
                className={`bg-transparent border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md cursor-pointer text-base flex items-center justify-center transition-colors duration-300 font-bold ${
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }`}
              >
                Next page →
              </Link>
            </div>
            <div className="flex items-center gap-1.5 text-base text-gray-700">
              <span>Page</span>
              <input
                type="text"
                value={currentPage}
                readOnly
                className="w-10 h-8 text-center border border-gray-300 rounded text-base text-gray-800 bg-white mx-1.5"
              />
              <span>of {totalPages}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    return <p>Error loading posts: {error.message}</p>;
  }
};

export default Blog;
