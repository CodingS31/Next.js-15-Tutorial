type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

const getUserPosts = async (userId: string) => {
  await new Promise((res) => setTimeout(res, 1000)); // simulate delay
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return res.json();
};

const getUserAlbums = async (userId: string) => {
  await new Promise((res) => setTimeout(res, 1000)); // simulate delay
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  return res.json();
};

export default async function UserProfile({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const postsPromise = getUserPosts(id);
  const albumsPromise = getUserAlbums(id);

  const [posts, albums] = await Promise.all([postsPromise, albumsPromise]);

  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h2 className="text-xl font-bold mb-2">📮 Posts</h2>
        {posts.map((post: Post) => (
          <div key={post.id} className="mb-4 border rounded p-3">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">📸 Albums</h2>
        {albums.map((album: Album) => (
          <div key={album.id} className="mb-4 border rounded p-3">
            <h3 className="font-semibold">{album.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
