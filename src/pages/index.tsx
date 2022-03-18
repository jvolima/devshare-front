import { GetServerSideProps } from "next";
import Head from "next/head";
import { FormLogin } from "../components/SignIn/FormLogin";
import { Container } from "../styles/signIn";
import { withSSRGuest } from "../utils/withSSRGuest";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Entrar | devshare</title>
      </Head>
      <Container>
        <FormLogin />
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async (context) => {
  return {
    props: {}
  }
})
