import { Error, ErrorLink } from './NotFound.styled';

const NotFound = () => {
  return (
    <Error>
      Sorry, everything is broken, let's go back to the{' '}
      <ErrorLink to={'/'}>main page</ErrorLink>and try again.
    </Error>
  );
};

export default NotFound;
