import styled from "styled-components";
import Background from "./assets/333.jpg";

export const AppContainer = styled.div`
  align-content: center;
  text-align: center;
  background-image: url(${Background});
  width: 99vw;
  height: 2000px;
  position: absolute;
  left: 0;
  top: 0;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
export const Content = styled.div`
  width: 60vw;
  position: relative;
  padding: 30px;
  padding-top: 10px;
  margin: auto;
  margin-top: 100px;
  border-radius: 25px;
  background-color: rgb(54, 52, 52);
  h1 {
    color: white;
  }
`;
