import React from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostDetail({ posts }: { posts: Post }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>{posts.title}</h1>

      <hr />
      <p>{posts.body}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://63527c41a9f3f34c373ef188.mockapi.io/${context.resolvedUrl}`
  );
  const posts = await res.json();
  return { props: { posts } };
}