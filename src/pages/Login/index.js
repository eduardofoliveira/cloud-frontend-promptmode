import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Button, Form, Image, Header, Message } from 'semantic-ui-react';
import { LoginContainer } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  senha: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [erroEmail, setErroEmail] = useState(false);

  const [erroSenha, setErroSenha] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit() {
    try {
      setErroSenha(false);
      setErroEmail(false);

      await schema.validate({ email, senha }, { abortEarly: false });
      dispatch(signInRequest({ email, senha }));
    } catch (error) {
      error.inner.map(item => {
        if (item.path === 'email') {
          setErroEmail(item.message);
        }

        if (item.path === 'senha') {
          setErroSenha(item.message);
        }

        return item;
      });
    }
  }

  return (
    <LoginContainer>
      <Message>
        <Form onSubmit={handleSubmit} loading={loading}>
          <Form.Field>
            <Image
              src="https://static.wixstatic.com/media/ab9c7e_9ba9bee2c0db419dbdc13aa125975a7e~mv2.png/v1/fill/w_222,h_46,al_c,q_80,usm_0.66_1.00_0.01/ab9c7e_9ba9bee2c0db419dbdc13aa125975a7e~mv2.webp"
              size="medium"
              centered
            />
            <Header as="h1" color="red">
              Basix Prompt Mode
            </Header>
            <Form.Input
              label="E-mail"
              id="email"
              fluid
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={
                erroEmail
                  ? {
                      content: erroEmail,
                      pointing: 'below',
                    }
                  : false
              }
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Senha"
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              error={
                erroSenha
                  ? {
                      content: erroSenha,
                      pointing: 'below',
                    }
                  : false
              }
            />
          </Form.Field>
          <Button primary type="submit">
            Entrar
          </Button>
        </Form>
      </Message>
    </LoginContainer>
  );
}
