import React from "react";
import NextLink from "next/link"; // DOES NOT WORK
import { GetServerSideProps } from "next/types";

type Posts = {
  id: number;
  title: string;
};

export default function Home({ posts }: { posts: Posts[] }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Happy Diwali</h1>
      <hr />
      {posts?.map((post) => {
        return (
          <div key={post?.id}>
            <a href={`/posts/${post?.id}`}>
              <h2>{post.title}</h2>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://63527c41a9f3f34c373ef188.mockapi.io/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
