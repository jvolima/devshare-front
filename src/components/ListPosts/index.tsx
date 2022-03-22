import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { api } from "../../services/apiClient";
import { compareTime } from "../../utils/compareTime";
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

type FormatedPost = {
  id: string;
  content: string;
  user: {
    name: string;
  };
  created_at: string;
}

const postsQueue: Post[] = [];

const socket = io('http://localhost:3333')

socket.on('new_post', (newPost: Post) => {
  postsQueue.push(newPost);
})

export function ListPosts() {  
  const [posts, setPosts] = useState<Post[]>([]);
  const [formatedPosts, setFormatedPosts] = useState<FormatedPost[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    setInterval(() => {
      if (postsQueue.length > 0) {
        getPosts()
        postsQueue.splice(0, postsQueue.length)
      }
    }, 1000)
  }, [])

  useEffect(() => {
    const formated = posts.map(post => {
      return {
        id: post.id,
        content: post.content,
        user: {
          name: post.user.name
        },
        created_at: compareTime(post.created_at)
      }
    })

    setFormatedPosts(formated);
  }, [posts]);

  async function getPosts() {
    const response = await api.get('posts');
    setPosts(response.data);
  }

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