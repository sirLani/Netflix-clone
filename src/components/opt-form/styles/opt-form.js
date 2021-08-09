import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 402px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 50px;
  box-sizing: border-box;
  margin-bottom: 20px
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 14px;
  border: 0;
  cursor: pointer;

  &:hover{
      background: #f40612
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 18px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;
export const Text = styled.p`
  color: #ffffff;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
