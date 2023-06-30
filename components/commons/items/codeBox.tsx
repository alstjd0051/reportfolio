import React from "react";
import { Code } from "../../lib/typings";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type Props = {
  code: string | string[];
  language: string | undefined;
};

const CodeBox = ({ code, language }: Props) => {
  return (
    <>
      <SyntaxHighlighter style={anOldHope} language={language}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeBox;
