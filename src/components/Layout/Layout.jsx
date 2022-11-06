import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  Header,
  Nav,
  StyledLinkHead,
  SelfThumb,
  GitLink,
  Border,
} from './Layout.styled';
import { Container } from 'components/App/App.styled';
import { Footer } from 'components/Footer/Footer';

const Layout = () => {
    return (
      <>
    <Container>
      <Header>
        <Nav>
          <div>
            <StyledLinkHead to="/" end>
              Home
            </StyledLinkHead>
            <StyledLinkHead to="/movies">Movies</StyledLinkHead>
          </div>
          <SelfThumb>
            <GitLink href="https://github.com/VladyslavIT" target="_blank">
              Vladyslav Chorniy
            </GitLink>
            <Border>|</Border>
            <GitLink href="https://goit.global/ua/" target="_blank">
              GoIT
            </GitLink>
          </SelfThumb>
        </Nav>
      </Header>
      <Outlet />
      </Container>
            <Footer />
            </>
  );
};

export { Layout };
