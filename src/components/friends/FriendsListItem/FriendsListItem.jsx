import PropTypes from 'prop-types';

import {
  FriendsListItem,
  FriendStatus,
  IsOnline,
  IsOffline,
  FriendAvatar,
  FriendName,
} from './FriendsListItem.styled';

export const FriendsListItemComp = ({ data }) => {
  return data.map(({ avatar, name, isOnline, id }) => {
    return (
      <FriendsListItem key={id}>
        <FriendStatus>{isOnline ? <IsOnline /> : <IsOffline />}</FriendStatus>
        <FriendAvatar src={avatar} alt={name} />
        <FriendName>{name}</FriendName>
      </FriendsListItem>
    );
  });
};

FriendsListItemComp.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
