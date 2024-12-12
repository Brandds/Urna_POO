import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { loginSuccess } from '../userActions';


export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const initValues = {
    cpf:"",
    senha:""
  }
  const validationSchema = Yup.object({
    cpf: Yup.string().required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório")
  })

  const onSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:8085/usuario/login', {
        senha: values.senha,
        cpf: values.cpf
      });
      
      dispatch(loginSuccess(response.data));
      alert("Login feito com sucesso");
      setTimeout(() => {
        navigate("/Principal")
      }, 3000); // Dados retornados pela API
    } catch (error) {
      if (error.response) {
        // Erro de resposta do servidor
        const status = error.response.status;
        const mensagem = error.response.data || "Erro desconhecido";
        alert(`${mensagem}`);
      } else if (error.request) {
        // Nenhuma resposta recebida
        alert("Erro: Servidor não respondeu.");
      } else {
        // Outro erro ao configurar a requisição
        alert(`Erro na configuração da requisição: ${error.message}`);
      }
    }
  }
    
  return(
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={initValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
          <div>
            <label htmlFor="cpf">CPF</label>
            <Field id="cpf" name="cpf" placeholder="Digite seu CPF" />
            <ErrorMessage name="cpf" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="senha">Senha</label>
            <Field id="senha" name="senha" type="password" placeholder="Digite sua senha" />
            <ErrorMessage name="senha" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}