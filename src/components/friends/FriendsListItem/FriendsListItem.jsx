import PropTypes from 'prop-types';

import {
  FriendsListItem,
  FriendStatus,
  IsOnline,
  IsOffline,
  FriendAvatar,
  FriendName,
} from './FriendsListItem.styled';

export const FriendsListItemComp = ({ id, isOnline, avatar, name }) => {
  return (
    <FriendsListItem key={id}>
      <FriendStatus>{isOnline ? <IsOnline /> : <IsOffline />}</FriendStatus>
      <FriendAvatar src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </FriendsListItem>
  );
};

FriendsListItemComp.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};
