import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.1rem;
  margin-bottom: 3em;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserInfo = styled.div`
  h1 {
    display: inline-block;
  }
`;

export const ButtonsWrapper = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Table = styled.div`
  padding: 1em;
  border-radius: 1em;
  position: relative;

  ::before {
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(#1d1b1b, #000000);
    content: "";
    z-index: -1;
    border-radius: 1em;
  }

  td,
  th {
    text-align: center;
    padding: 0.5em 2em;
  }

  @media (max-width: 830px) {
    thead {
      display: none;
    }

    td {
      padding: 0.5em 0;
    }

    tr {
      display: flex;
      flex-direction: column;
      margin-bottom: 2em;
      width: 500px;
    }
  }

  @media (max-width: 600px) {
    tr {
      width: 280px;
    }
  }
`;

export const Order = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TableWrapper = styled.div`
  margin-top: 3em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileDesc = styled.div`
  @media (min-width: 830px) {
    display: none;
  }
`;

export const Mobile = styled.div`
  @media (max-width: 830px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
