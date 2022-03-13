import Head from "next/head";
import { FormLogin } from "../components/SignIn/FormLogin";
import { Container } from "../styles/signIn";

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
