import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import { toast, ToastContainer } from "react-toastify";
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

    try { 
      await signIn(credentials);
    } catch (err) {
      toast.error("Email ou senha incorretos!")
    }
  }

  return (
    <Container>
      <ToastContainer 
        theme="colored" 
        toastClassName="errorAlert"
        autoClose={3000} 
        pauseOnHover={false} 
      />
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