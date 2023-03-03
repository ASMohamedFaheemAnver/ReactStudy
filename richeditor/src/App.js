import { useState } from "react";
import ReactQuill from "react-quill";
import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
// import rehypeHighlight from "rehype-highlight";
// import remarkBreaks from "remark-breaks";

const App = () => {
  const [rText, setRText] = useState(
    "# Hello\n\nThis is a **paragraph** with some `inline code`"
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        // If markdown html has large line height
        // lineHeight: 0,
      }}
    >
      {/* This will show md and html, we can't see md initial value because
          of onChange={setRText} setting html values
      */}
      <ReactMarkdown
        // remarkPlugins={[remarkBreaks]}
        rehypePlugins={[
          // remarkGfm, rehypeHighlight,
          rehypeRaw,
        ]}
        children={rText}
      />
      <ReactQuill
        value={rText}
        onChange={setRText}
        style={{ height: 512, width: 512 }}
      />
    </div>
  );
};

export default App;
