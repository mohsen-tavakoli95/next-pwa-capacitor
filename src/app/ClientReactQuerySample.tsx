"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/apis";

export default function ClientReactQuerySample() {
  const { data } = useQuery({
    queryKey: ["post"],
    queryFn: getPosts,
  });

  return (
    <div>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
