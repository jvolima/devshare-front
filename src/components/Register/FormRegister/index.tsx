import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import 'react-toastify/dist/ReactToastify.min.css';
import { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { api } from "../../../services/api";
import { Button } from "../../FormElements/Button";
import { Input } from "../../FormElements/Input";
import { Container } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";

interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup.string().required('Password is required').min(6, 'At least 6 caracters')
});

export const FormRegister = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleRegister: SubmitHandler<CreateUserFormData> = async (data, event: FormEvent) => {
    console.log(data)
    event.preventDefault();

    try {
      const response = await api.post("/users", {
        data
      });

      console.log(response)
    } catch (err) {
      toast.error("An user with this email already exists!");
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
      <h1>Criar sua conta no devshare</h1>
      <form onSubmit={handleSubmit(handleRegister)}>
        <Input 
          type="text" 
          name="name" 
          placeholder="Nome"
          {...register('name')}
        />
        <Input 
          type="email" 
          name="email" 
          placeholder="E-mail"
          {...register('email')}
        />
        <Input 
          type="password" 
          name="password" 
          placeholder="Senha"
          autoComplete="on"
          {...register('password')}
        />

        <Button>Cadastrar</Button>
      </form>
      <p>Deseja voltar para a tela de login? <Link href="/"><a>Voltar</a></Link></p>
    </Container>
  )
}