import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

import {
  FaHome,
  FaSitemap,
  FaUsers,
  FaBook,
  FaThList,
  FaUserCog,
} from 'react-icons/fa';
import history from '~/services/history';

import { MenuContainer } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const currentLocation = window.location.pathname;

  function handleSignOut() {}

  return (
    <MenuContainer>
      <Menu stackable>
        <Menu.Item>
          <img src={FaBook} alt="Logo Contact" />
        </Menu.Item>

        <Menu.Item
          name="Dashboard"
          active={currentLocation === '/dashboard'}
          onClick={() => history.push('/dashboard')}
        >
          <FaHome size={12} />
          Dashboard
        </Menu.Item>

        {profile.tipo === 3 && (
          <Menu.Item
            name="Dominíos"
            active={currentLocation === '/dominios'}
            onClick={() => history.push('/dominios')}
          >
            <FaSitemap />
            Dominíos
          </Menu.Item>
        )}

        <Menu.Item
          name="Usuários"
          active={currentLocation.indexOf('/usuarios') === 0}
          onClick={() => history.push('/usuarios')}
        >
          <FaUsers />
          Usuários
        </Menu.Item>

        <Menu.Item
          name="Chamados"
          active={currentLocation.indexOf('/chamado') === 0}
          onClick={() => history.push('/chamados')}
        >
          <FaBook />
          Chamados
        </Menu.Item>

        <Menu.Item
          name="Contatos"
          active={currentLocation.indexOf('/contato') === 0}
          onClick={() => history.push('/contatos')}
        >
          <FaThList />
          Contatos
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="Contatos"
            active={currentLocation.indexOf('/profile') === 0}
            onClick={() => history.push('/profile')}
          >
            <FaUserCog />
            {profile.nome}
          </Menu.Item>
          <Menu.Item>
            <Button color="red" onClick={() => handleSignOut()}>
              Logout
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </MenuContainer>
  );
}
