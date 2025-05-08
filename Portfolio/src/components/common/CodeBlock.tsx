import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "../../context/ThemeContext";

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  fileName?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  showLineNumbers = true,
  fileName,
}) => {
  const { theme } = useTheme();
  const codeStyle = theme === "dark" ? vscDarkPlus : prism;

  return (
    <div className="rounded-lg overflow-hidden shadow-md my-6">
      {fileName && (
        <div className="bg-neutral-200 dark:bg-neutral-800 px-4 py-2 text-sm flex items-center justify-between">
          <span className="font-mono">{fileName}</span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {language}
          </span>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={codeStyle}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        customStyle={{
          margin: 0,
          padding: "1rem",
          borderRadius: fileName ? "0 0 0.5rem 0.5rem" : "0.5rem",
          fontSize: "14px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
