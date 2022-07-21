import React from 'react';
import { useIntl } from 'react-intl';
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

  const intl = useIntl();

  const houseGreen = intl.formatMessage({ id: "page.home.houseGreen" })

  const links = [
    { label: intl.formatMessage({ id: "page.home.howToDo" }), visited: false, onClick: () => { } },
    { label: intl.formatMessage({ id: "page.home.sales" }), visited: false, onClick: () => { } },
    { label: intl.formatMessage({ id: "page.home.depoinments" }), visited: false, onClick: () => { } },
    { label: intl.formatMessage({ id: "page.home.videos" }), visited: false, onClick: () => { } },
    { label: intl.formatMessage({ id: "page.home.myCart" }), visited: true, onClick: () => { } }
  ]

  return (
    <header>
      <Row>
        <Column>
          <Logo
            imageUrl='https://github.com/lukzfreitas/7-days-of-code-react/blob/main/public/logo.png?raw=true'
            alt={houseGreen}
            height='44.84px'
            width='177px' />
        </Column>
        <Column>
          <Menu links={links} />
        </Column>
      </Row>
    </header>
  );

}

export default Header;
