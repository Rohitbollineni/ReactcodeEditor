// import { useRef, useState } from "react";
// import { Box, HStack } from "@chakra-ui/react";
// import { Editor } from "@monaco-editor/react";
// import LanguageSelector from "./LanguageSelector";
// import { CODE_SNIPPETS } from "../constants";
// import Output from "./Output";

// const CodeEditor = () => {
//   const editorRef = useRef();
//   const [value, setValue] = useState("");
//   const [language, setLanguage] = useState("javascript");

//   const onMount = (editor) => {
//     editorRef.current = editor;
//     editor.focus();
//   };

//   const onSelect = (language) => {
//     setLanguage(language);
//     setValue(CODE_SNIPPETS[language]);
//   };

//   return (
//     <Box>
//       <HStack spacing={4}>
//         <Box w="50%">
//           <LanguageSelector language={language} onSelect={onSelect} />
//           <Editor
//             options={{
//               minimap: {
//                 enabled: false,
//               },
//             }}
//             height="75vh"
//             theme="vs-dark"
//             language={language}
//             defaultValue={CODE_SNIPPETS[language]}
//             onMount={onMount}
//             value={value}
//             onChange={(value) => setValue(value)}
//           />
//         </Box>
//         <Output editorRef={editorRef} language={language} />
//       </HStack>
//     </Box>
//   );
// };
// export default CodeEditor;

import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box
          w="50%" // Width of the container
          sx={{
            width: "50vw",
            height: "90vh",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            backdropFilter: "blur(19px) saturate(180%)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;