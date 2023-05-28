import {
  WrapperCard,
  UserCard,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  StatsItem,
  StatsInnerItem,
} from './Profile.styled';

export const Profile = user => {
  return (
    <WrapperCard>
      <UserCard>
        <UserAvatar src={user.avatar} alt={user.name} />
        <UserName>{user.name}</UserName>
        <UserTag>{user.tag}</UserTag>
        <UserLocation>{user.location}</UserLocation>
      </UserCard>
      <UserStats>
        <StatsItem>
          <StatsInnerItem>Followers</StatsInnerItem>
          <StatsInnerItem>{user.stats.followers}</StatsInnerItem>
        </StatsItem>
        <StatsItem>
          <StatsInnerItem>Views</StatsInnerItem>
          <StatsInnerItem>{user.stats.views}</StatsInnerItem>
        </StatsItem>
        <StatsItem>
          <StatsInnerItem>Likes</StatsInnerItem>
          <StatsInnerItem>{user.stats.likes}</StatsInnerItem>
        </StatsItem>
      </UserStats>
    </WrapperCard>
  );
};
