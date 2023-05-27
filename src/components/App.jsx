import { Container } from './container/Container.styled';
import { Profile } from './profile/Profile';

import user from 'components/data/user.json';

export const App = () => {
  return (
    <Container>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
};
