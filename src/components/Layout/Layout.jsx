import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/App/App.styled';
import { Footer } from 'components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AiFillGithub } from 'react-icons/ai';

import {
  Header,
  Nav,
  StyledLinkHead,
  SelfThumb,
  GitLink,
  Border,
} from './Layout.styled';

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
                <AiFillGithub className="icon-git" />
                Vladyslav Chorniy
              </GitLink>
              <Border>|</Border>
              <GitLink href="https://goit.global/ua/" target="_blank">
                GoIT
              </GitLink>
            </SelfThumb>
          </Nav>
        </Header>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default Layout;
