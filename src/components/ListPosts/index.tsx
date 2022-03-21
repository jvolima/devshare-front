import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { api } from "../../services/apiClient";
import { Container } from "./styles";

type Post = {
  id: string;
  content: string;
  user: {
    name: string;
  };
  created_at: Date;
  updated_at: Date;
}

interface ListPostsProps {
  posts: Post[];
}

export function ListPosts({ posts }: ListPostsProps) {  
  function compareTime(date: Date) {
    if((new Date().getDay() - new Date(date).getDay()) <= 0) {
      if((new Date().getHours() - new Date(date).getHours()) <= 0) {
        if((new Date().getMinutes() - new Date(date).getMinutes()) <= 0) {
          if((new Date().getSeconds() - new Date(date).getSeconds()) <= 0) {
            return 'Publicado agora'
          } else {
            return `${new Date().getSeconds() - new Date(date).getSeconds()} segundos atrás` 
          }
        } else {
          return `${new Date().getMinutes() - new Date(date).getMinutes()} minutos atrás` 
        }
      } else {
        return `${new Date().getHours() - new Date(date).getHours()} horas atrás`
      }
    } else {
      return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "short",
      }).format(new Date(date))
    }
  } 

  const formatedPosts = posts.map(post => {
    compareTime(post.created_at)
    return {
      id: post.id,
      content: post.content,
      user: {
        name: post.user.name
      },
      created_at: compareTime(post.created_at)
    }
  })

  return (
    <Container>
      {
        formatedPosts.map(post => (
          <div className="publicationContainer" key={post.id}>  
            <div>
              <h3>{post.user.name}</h3>
              <span>·</span>
              <time>{post.created_at}</time>
            </div>
            <p>{post.content}</p>
          </div>
        ))
      }
    </Container>
  )
}