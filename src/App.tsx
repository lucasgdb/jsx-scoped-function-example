import styled from "styled-components";

import { HelloWorld } from "./components/HelloWorld";

const OuterApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  padding: 24px;
`;

const Paragraph = styled.p`
  font: normal normal normal 16px/19px Arial;
  color: #333;

  height: 19px;
`;

export function App() {
  return (
    <OuterApp>
      <HelloWorld>{(props) => <Paragraph>{props.text}</Paragraph>}</HelloWorld>
    </OuterApp>
  );
}
