import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { getPostsByUserId, postsUrlEndpoint as postsCacheKey } from '../api/posts';

const User = () => {
  const { userId } = useParams();

  const {
    isLoading,
    error,
    data: posts,
  } = useSWR(userId ? [postsCacheKey, userId] : null, ([url, userId]) => {
    return getPostsByUserId(url, userId);
  });

  return (
    <>
      <h1>Posts from: {userId}</h1>
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

export default User;
