import Link from "next/link";
import { useState } from "react";
import { Container } from "./styles";

export function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(): void {
    console.log({
      email,
      password
    })
  }

  return (
    <Container>
      <h1>Entrar no devshare</h1>
      <form onSubmit={handleSignIn}>
        <input 
          type="email" 
          name="email" 
          onChange={data => setEmail(data.target.value)}
          placeholder="E-mail"
        />
        <input 
          type="password" 
          name="password" 
          onChange={data => setPassword(data.target.value)}
          placeholder="Senha"
        />
        
        <button type="submit">Entrar</button>
      </form>
      <p>Ainda não tem uma conta? <Link href="/register"><a>Cadastra-se</a></Link></p>
    </Container>
  )
}