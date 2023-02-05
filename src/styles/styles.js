import styled from "@emotion/styled";

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;

export const Container = styled.div`
  width: 90%;
  height: 1200px;
  margin: auto;
`;

export const ButtonExportar = styled.button`
  border: 3px solid rgba(100, 100, 100, 0.1);
  margin-bottom: 10px;
  padding: 10px;
  width: 200px;
  cursor: pointer;
  color: #fff;
  border-radius: 8px;
  background-size: 300%;
  background-image: linear-gradient(to left, #00b7da, #161569, #00b7da);
`;

export const ContainerOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
