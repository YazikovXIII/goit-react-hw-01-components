import styled from 'styled-components';

export const WrapperCard = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 360px;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
`;

export const UserCard = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 25px;
`;

export const UserAvatar = styled.img`
  margin-right: auto;
  margin-left: auto;
  width: 100px;
  height: 100px;
`;

export const UserName = styled.p`
  margin: 0 auto;
  margin-top: 20px;
  font-size: 30px;
  color: rgb(120, 120, 120);
`;

export const UserTag = styled.p`
  margin-left: auto;
  margin-right: auto;
  color: rgb(120, 120, 120);
`;

export const UserLocation = styled.p`
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  color: rgb(120, 120, 120);
`;

export const UserStats = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  background-color: rgb(234, 234, 234);
`;

export const StatsItem = styled.li`
  width: 33.3333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid white;

  &:first-child {
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-bottom-right-radius: 5px;
  }
`;

export const StatsInnerItem = styled.span`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
  margin-top: 5px;
`;
