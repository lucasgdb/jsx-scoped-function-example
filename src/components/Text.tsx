import styled from "styled-components";

const Paragraph = styled.p`
  font: normal normal normal 16px/19px Arial;
  color: #333;

  height: 19px;
`;

interface Props {
  children: React.ReactNode;
}

export function Text(props: Props) {
  return <Paragraph>{props.children}</Paragraph>;
}
