import React, { useState } from "react";
import styled from "styled-components";

const OuterHelloWorld = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #333;
  color: #333;

  border: double 3px transparent;
  border-radius: 6px;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #41d1ff, #bd34fe, #ffea83, #ffdd35, #ffa800);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  outline: none;
`;

interface ChildrenProps {
  text: string;
}

export interface Props {
  children(props: ChildrenProps): React.ReactElement;
}

export function HelloWorld({ children }: Props) {
  const [text, setText] = useState("Hello, world!");

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <OuterHelloWorld>
      <Input
        type="text"
        value={text}
        onChange={handleChangeText}
        placeholder="Hello, world!"
        maxLength={24}
      />

      {children({ text })}
    </OuterHelloWorld>
  );
}
