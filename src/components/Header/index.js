import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { FaHome, FaSitemap, FaUsers, FaUserCog } from 'react-icons/fa';
import { signOut } from '~/store/modules/auth/actions';

import history from '~/services/history';

import { MenuContainer } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const currentLocation = window.location.pathname;

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <MenuContainer>
      <Menu stackable>
        <Menu.Item
          name="Dashboard"
          active={currentLocation === '/dashboard'}
          onClick={() => history.push('/dashboard')}
        >
          <FaHome size={12} />
          Dashboard
        </Menu.Item>

        <Menu.Item
          name="Dominíos"
          active={currentLocation.indexOf('/dominios') === 0}
          onClick={() => history.push('/dominios')}
        >
          <FaSitemap />
          Dominíos
        </Menu.Item>

        <Menu.Item
          name="Usuários"
          active={currentLocation.indexOf('/usuarios') === 0}
          onClick={() => history.push('/usuarios')}
        >
          <FaUsers />
          Usuários
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="Contatos"
            active={currentLocation.indexOf('/profile') === 0}
            onClick={() => history.push('/profile')}
          >
            <FaUserCog />
            {user.nome || ''}
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
