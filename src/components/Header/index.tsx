import React from 'react';
import styled from 'styled-components';
import Logo from '../../patterns/Logo';
import Link from '../Link';
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}



const Header = (props: HeaderProps) => {

  const Row = styled.div`
      font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;      
      padding: 15px 20px;
      display: flex;      
      align-items: flex-start;
      justify-content: space-between;      
    `;

  const Column = styled.div`
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
  `;


  return (
    <header>
      <Row>
        <Column>
          <Logo
            imageUrl='https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/logo.png?raw=true'
            alt='Casa Verde'
            height={44.84}
            width={177} />
        </Column>
        <Column>
          <Link label='Como Fazer' visited={false} key={1} onClick={() => { }} />
          <Link label='Como Fazer' visited={false} key={1} onClick={() => { }} />
          <Link label='Como Fazer' visited={false} key={1} onClick={() => { }} />
          <Link label='Como Fazer' visited={false} key={1} onClick={() => { }} />
        </Column>
      </Row>
    </header>
  );

}

export default Header;
