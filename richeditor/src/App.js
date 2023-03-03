import { useMemo, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
// import rehypeHighlight from "rehype-highlight";
// import remarkBreaks from "remark-breaks";

// #1 Import quill-image-uploader
import ImageUploader from "quill-image-uploader";

// #2 Register module
Quill.register("modules/imageUploader", ImageUploader);

const App = () => {
  const [rText, setRText] = useState();
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: (file) => {
          return new Promise((resolve, reject) => {
            try {
              // If we return right away it's giving error
              setTimeout(() => {
                resolve("hi");
              }, 1000);
            } catch (e) {
              reject(e);
            }
          });
        },
        // Delete
        // We need to hold all the uploaded image urls in a variable and we can run a cron job to test is the url is still in use or not
        // On creation server should move the image from temp to a stable path or we should allow user to add rich text once they create the post
        // For example if we are creating a product we can have 2 steps and in first step we can ask product name quantity and then we can ask description in second step,
        // This way we can hold the image urls inside created product
      },
    }),
    []
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
        modules={modules}
        style={{ height: 512, width: 512 }}
      />
    </div>
  );
};

export default App;
