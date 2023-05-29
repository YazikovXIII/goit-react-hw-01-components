import PropTypes from 'prop-types';

import { WrapperCard } from 'components/profile/Profile.styled';
import { FriendsList } from './Friends.styled';
import { FriendsListItemComp } from './FriendsListItem/FriendsListItem';

export const Friends = ({ data }) => {
  return (
    <WrapperCard>
      <FriendsList>
        <FriendsListItemComp data={data} />
      </FriendsList>
    </WrapperCard>
  );
};

Friends.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
