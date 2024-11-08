// import { Box } from "@chakra-ui/react";
// import CodeEditor from "./components/CodeEditor";

// function App() {
//   return (
//     <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
//       <CodeEditor />
//     </Box>
//   );
// }

// export default App;
import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import bgImage from "./components/bg.jpg";

function App() {
  return (
    <Box
      minH="100vh"
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      color="gray.500"
      px={6}
      py={8}
    >
      <CodeEditor />
    </Box>
  );
}

export default App;
