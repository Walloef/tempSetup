import useSWR from 'swr';
import { getPosts, postsUrlEndpoint as postsCacheKey } from '../api/posts';

const Posts = () => {
  const { isLoading, error, data: posts } = useSWR(postsCacheKey, getPosts);

  return (
    <>
      <h1>All posts</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </>
  );
};

export default Posts;
