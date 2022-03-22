import { GetServerSideProps } from "next"
import Head from "next/head";
import { CreatePost } from "../components/CreatePost";
import { Header } from "../components/Header";
import { ListPosts } from "../components/ListPosts";
import { Container } from "../styles/home";
import { withSSRAuth } from "../utils/withSSRAuth"

type Post = {
  id: string;
  content: string;
  user: {
    name: string;
  };
  created_at: Date;
  updated_at: Date;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | devshare</title>
      </Head>
      <Container>
        <Header />
        <CreatePost />
        <ListPosts />
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {}
  }
})