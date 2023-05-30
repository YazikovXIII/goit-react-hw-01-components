import PropTypes from 'prop-types';

import { WrapperCard } from 'components/profile/Profile.styled';
import { FriendsList } from './Friends.styled';
import { FriendsListItemComp } from './FriendsListItem/FriendsListItem';

export const Friends = ({ data }) => {
  return (
    <WrapperCard>
      <FriendsList>
        {data.map(({ id, name, avatar, isOnline }) => {
          return (
            <FriendsListItemComp
              key={id}
              name={name}
              avatar={avatar}
              isOnline={isOnline}
            />
          );
        })}
      </FriendsList>
    </WrapperCard>
  );
};

Friends.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
