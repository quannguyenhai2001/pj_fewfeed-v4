import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import 'react-quill/dist/quill.snow.css';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { RouterWrapper } from "routes/RouterWrapper";
import './App.css';
import { themeMainOptions } from "themes/themes";



const theme = createTheme(themeMainOptions);
function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <RouterWrapper />
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
