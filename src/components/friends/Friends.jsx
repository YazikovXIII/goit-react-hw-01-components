import PropTypes from 'prop-types';
import { WrapperCard } from 'components/profile/Profile.styled';
import {
  FriendsList,
  FriendsListItem,
  FriendStatus,
  IsOnline,
  IsOffline,
  FriendAvatar,
  FriendName,
} from './Friends.styled';

export const Friends = ({ data }) => {
  return (
    <WrapperCard>
      <FriendsList>
        {data.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendsListItem key={id}>
              <FriendStatus>
                {isOnline ? <IsOnline /> : <IsOffline />}
              </FriendStatus>
              <FriendAvatar src={avatar} alt={name} />
              <FriendName>{name}</FriendName>
            </FriendsListItem>
          );
        })}
      </FriendsList>
    </WrapperCard>
  );
};

Friends.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
