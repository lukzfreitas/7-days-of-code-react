import React from 'react';
import Logo from '../../../patterns/Logo';
import Menu from '../../../patterns/Menu';
import { Column, Row } from './styled';


type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

const Header = (props: HeaderProps) => {  

  const links = [
    { label: 'Como Fazer', visited: false, onClick: () => { } },
    { label: 'Ofertas', visited: false, onClick: () => { } },
    { label: 'Depoimentos', visited: false, onClick: () => { } },
    { label: 'Vídeos', visited: false, onClick: () => { } },
    { label: 'Meu Carrinho', visited: true, onClick: () => { } }
  ]

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
          <Menu links={links}/>
        </Column>
      </Row>
    </header>
  );

}

export default Header;
