import { useEffect, useState } from "react";
import { api } from "../../services/apiClient";
import { Container } from "./styles";

type Posts = {
  id: string;
  content: string;
  user: {
    name: string;
  };
  created_at: Date;
  updated_at: Date;
}

interface ListPostsProps {
  posts: Posts[];
}

export function ListPosts({ posts }: ListPostsProps) {
  return (
    <Container>
      {
        posts.map(post => (
          <div className="publicationContainer" key={post.id}>  
            <div>
              <h3>{post.user.name}</h3>
              <span>·</span>
              <time>{new Intl.DateTimeFormat("pt-BR", {
                day: "2-digit",
                month: "short",
              }).format(new Date(post.created_at))}
              </time>
            </div>
            <p>{post.content}</p>
          </div>
        ))
      }
    </Container>
  )
}