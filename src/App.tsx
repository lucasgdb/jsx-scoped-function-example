import styled from "styled-components";

import { HelloWorld } from "./components/HelloWorld";
import { Text } from "./components/Text";

const OuterApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  padding: 24px;
`;

export function App() {
  return (
    <OuterApp>
      <HelloWorld>{(props) => <Text>{props.text}</Text>}</HelloWorld>
    </OuterApp>
  );
}
