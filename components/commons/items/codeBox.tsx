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
    <div>
      <SyntaxHighlighter style={anOldHope} language={language}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBox;
