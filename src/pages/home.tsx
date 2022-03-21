import { GetServerSideProps } from "next"
import Head from "next/head";
import { useContext, useEffect, useState } from "react"
import { CreatePost } from "../components/CreatePost";
import { Header } from "../components/Header";
import { ListPosts } from "../components/ListPosts";
import { AuthContext } from "../contexts/AuthContext"
import { api } from "../services/apiClient";
import { Container } from "../styles/home";
import { withSSRAuth } from "../utils/withSSRAuth"

type Posts = {
  id: string;
  content: string;
  user: {
    name: string;
  };
  created_at: Date;
  updated_at: Date;
}

export default function Home() {
  const { user, signOut } = useContext(AuthContext);
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    api.get('posts').then(response => setPosts(response.data));
  }, [])
  
  return (
    <>
      <Head>
        <title>Início | devshare</title>
      </Head>
      <Container>
        <Header />
        <CreatePost />
        <ListPosts posts={posts}/>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {}
  }
})