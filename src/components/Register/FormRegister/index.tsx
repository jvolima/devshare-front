import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "../../FormElements/Button";
import { Input } from "../../FormElements/Input";
import { Container } from "./styles";

export function FormRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister(event: FormEvent): void {
    event.preventDefault();

    console.log({
      name,
      email, 
      password
    })
  }

  return (
    <Container>
      <h1>Criar sua conta no devshare</h1>
      <form onSubmit={handleRegister}>
        <Input 
          type="text" 
          name="name" 
          onChange={data => setName(data.target.value)}
          placeholder="Nome"
        />
        <Input 
          type="email" 
          name="email" 
          onChange={data => setEmail(data.target.value)}
          placeholder="E-mail"
        />
        <Input 
          type="password" 
          name="password" 
          onChange={data => setPassword(data.target.value)}
          placeholder="Senha"
          autoComplete="on"
        />

        <Button>Cadastrar</Button>
      </form>
      <p>Deseja voltar para a tela de login? <Link href="/"><a>Voltar</a></Link></p>
    </Container>
  )
}