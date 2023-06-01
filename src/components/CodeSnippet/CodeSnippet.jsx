import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";

import React, { useEffect, useRef } from "react";

const CodeSnippet = ({ code }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    Prism.highlightAllUnder(codeRef.current);
  }, [code]);

  return (
    <div className="code-container">
      <pre ref={codeRef} className="language-javascript">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
