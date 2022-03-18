import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import 'react-toastify/dist/ReactToastify.min.css';
import { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { api } from "../../../services/apiClient";
import { Button } from "../../FormElements/Button";
import { Input } from "../../FormElements/Input";
import { Container } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { setInterval } from "timers";
import Router from "next/router";

interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('Email é obrigatório').email('Email inválido'),
  password: yup.string().required('Senha é obrigatória').min(6, 'Pelo menos 6 caracteres para a senha')
});

export const FormRegister = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const onSubmit: SubmitHandler<CreateUserFormData> = async (data) => {
    try {
      await api.post("/users", {
        name: data.name,
        email: data.email,
        password: data.password
      });

      toast.success("Usuário cadastrado com sucesso!");
      setTimeout(() => {
        Router.push("/")
      }, 2000)
    } catch (err) {
      toast.error("Já existe um usuário com esse e-mail!");
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input 
          type="text" 
          name="name" 
          placeholder="Nome"
          error={formState.errors.name}
          {...register('name')}
        />
        <Input 
          type="email" 
          name="email" 
          placeholder="E-mail"
          error={formState.errors.email}
          {...register('email')}
        />
        <Input 
          type="password" 
          name="password" 
          placeholder="Senha"
          autoComplete="on"
          error={formState.errors.password}
          {...register('password')}
        />

        <Button>Cadastrar</Button>
      </form>
      <p>Deseja voltar para a tela de login? <Link href="/"><a>Voltar</a></Link></p>
    </Container>
  )
}