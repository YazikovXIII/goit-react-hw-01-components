import { Container } from './container/Container.styled';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';

import user from 'components/data/user.json';
import data from 'components/data/data.json';

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
      <Statistics title="Upload stats" stats={data} />
    </Container>
  );
};