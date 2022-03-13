import Head from "next/head";
import { FormRegister } from "../components/Register/FormRegister";
import { Container } from "../styles/register";

export default function Register() {
  return (
    <>
      <Head>
        <title>Cadastre-se | devshare</title>
      </Head>
      <Container>
        <FormRegister />
      </Container>
    </>
  )
}