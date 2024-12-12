import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from "react";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


export default function Cadastro () {
  const navigate = useNavigate()
  const initialValues = {
    name: "",
    email:"",
    senha:"",
    cpf:""
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
    senha: Yup.string().required('O senha é obrigatório'),
    cpf: Yup.string().required('O cpf é obrigatório'),
  });

  const onSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:8085/usuario/cadastro', {
        nome: values.name,
        senha: values.senha,
        email: values.email,
        cpf: values.cpf
      });
  
      alert(response.data); // Dados retornados pela API
      navigate("/Login")
    } catch (error) {
      alert("Erro ao cadastrar")
    }
  };
  
  return(
    <div className="div-login">
      <h1>Cadastro Usuario</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
         {() => (
        <Form>
          <div>
            <label htmlFor="name">Nome</label>
            <Field id="name" name="name" placeholder="Digite seu nome" />
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="email">E-mail</label>
            <Field id="email" name="email" type="email" placeholder="Digite seu e-mail" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="senha">Senha</label>
            <Field id="senha" name="senha" type="password" placeholder="Digite sua senha" />
            <ErrorMessage name="senha" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label htmlFor="cpf">CPF</label>
            <Field id="cpf" name="cpf" placeholder="Digite seu cpf" />
            <ErrorMessage name="cpf" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit">Enviar</button>
        </Form>
      )}

      </Formik>
    </div>
  )
}