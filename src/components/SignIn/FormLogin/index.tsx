import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthContext";
import { Button } from "../../FormElements/Button";
import { Input } from "../../FormElements/Input";
import { Container } from "./styles";

export function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { signIn } = useContext(AuthContext);
 
  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    const credentials = {
      email,
      password
    };

    await signIn(credentials);
  }

  return (
    <Container>
      <h1>Entrar no devshare</h1>
      <form onSubmit={handleSignIn}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail" 
          onChange={data => setEmail(data.target.value)}
        />

        <Input 
          type="password"
          name="password"
          placeholder="Senha"
          onChange={data => setPassword(data.target.value)}
          autoComplete="on"
        />
        
        <Button>Entrar</Button>
      </form>
      <p>Ainda não tem uma conta? <Link href="/register"><a>Cadastra-se</a></Link></p>
    </Container>
  )
}