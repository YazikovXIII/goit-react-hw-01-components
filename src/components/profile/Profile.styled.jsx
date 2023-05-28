import styled from 'styled-components';

export const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;

  .description {
    width: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 25px;
  }

  .avatar {
    margin-right: auto;
    margin-left: auto;
    width: 100px;
    height: 100px;
  }

  .name {
    margin: 0 auto;
    margin-top: 20px;
    font-size: 30px;
    color: rgb(120, 120, 120);
  }

  .tag {
    margin-left: auto;
    margin-right: auto;
    color: rgb(120, 120, 120);
  }

  .location {
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    color: rgb(120, 120, 120);
  }

  .stats {
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    background-color: rgb(234, 234, 234);
  }

  .stats-item {
    width: 33.3333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid white;
  }

  .stats-item:first-child {
    border-bottom-left-radius: 5px;
  }

  .stats-item:last-child {
    border-bottom-right-radius: 5px;
  }

  .label {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
  }

  .quantity {
    margin-left: auto;
    margin-right: auto;
  }
`;
