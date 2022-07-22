import React from 'react';
import Logo from '../../../patterns/Logo';
import Menu from '../../../patterns/Menu';
import { Column, Row } from './styled';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;  
  links: { label: string, visited: boolean, onClick: Function }[];
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

const Header = (props: HeaderProps) => {    

  return (
    <header>
      <Row>
        <Column>
          <Logo
            imageUrl='https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/logo.png?raw=true'
            alt={''}
            height='44.84px'
            width='177px' />
        </Column>
        <Column>
          <Menu links={props.links} />
        </Column>
      </Row>
    </header>
  );

}

export default Header;
