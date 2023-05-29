import styled from 'styled-components';

export const FriendsListItem = styled.li`
  display: flex;

  margin: 10px 10px;
  padding: 10px 20px;

  border-radius: 5px;
  background-color: rgb(234, 234, 234);
`;

export const FriendStatus = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  height: 100%;
  width: 40px;
`;

export const IsOnline = styled.span`
  display: block;
  border-radius: 50%;
  background-color: green;
  height: 20px;
  width: 20px;
`;

export const IsOffline = styled.span`
  display: block;
  border-radius: 50%;
  background-color: red;
  height: 20px;
  width: 20px;
`;

export const FriendAvatar = styled.img`
  width: 48px;
  margin-left: 10px;
`;

export const FriendName = styled.p`
  margin-left: auto;
  margin-right: auto;
`;
