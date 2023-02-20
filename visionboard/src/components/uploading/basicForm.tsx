// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

// interface PostData {
//   title: string;
//   body: string;
// }

// const Form: React.FunctionComponent = () => {
//   const [formValues, setFormValues] = useState<PostData>({
//     title: "",
//     body: "",
//   });

//   // Handlers for the input
//   const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues((prevFormValues) => ({
//       ...prevFormValues,
//       title: event.target.value,
//     }));
//   };

//   const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues((prevFormValues) => ({
//       ...prevFormValues,
//       body: event.target.value,
//     }));
//   };

//   return (
//     <>
//       <Box
//         display="flex"
//         height="100%"
//         flexDirection="column"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Box marginY={2}>
//           <TextField
//             onChange={handleTitleChange}
//             value={formValues.title}
//             label="Post Title"
//             name="title"
//           />
//         </Box>
//         <Box marginY={2}>
//           <TextField
//             onChange={handleBodyChange}
//             multiline
//             minRows={5}
//             label="Post Body"
//             name="body"
//           />
//         </Box>
//         <Box marginY={3}>
//           <Button onClick={() => console.log("submit")}>Submit Post </Button>
//         </Box>
//       </Box>
//       <Box marginY={2}>
//         <TextField
//           onChange={handleBodyChange}
//           multiline
//           minRows={5}
//           label="Post Body"
//           name="body"
//         />
//       </Box>
//       <Button variant="contained" component="label">
//         <input type="file" hidden />
//       </Button>
//       <Box marginY={3}>
//         <Button onClick={() => console.log("submit")}>Submit Post </Button>
//       </Box>
//     </>
//   );
// };

// export default Form;
