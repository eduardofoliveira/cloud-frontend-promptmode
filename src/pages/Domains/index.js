import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showDomainsRequest } from '~/store/modules/domains/actions';

import { Container } from './styles';

export default function Domains() {
  const dispatch = useDispatch();
  const { domains } = useSelector(state => state.domains);

  useEffect(() => {
    dispatch(showDomainsRequest());
  }, [dispatch]);

  return (
    <Container>
      <h1>Listar dominios</h1>
      <p>{domains && domains.length}</p>
    </Container>
  );
}
