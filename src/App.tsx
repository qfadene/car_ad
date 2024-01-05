import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageLayout from './components/pageLayout/PageLayout';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path="/"
                    element={
                            <PageLayout />
                    }
                >
                </Route>
            </>
        )
    );

    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
        }
    });

    return (
        <ThemeProvider theme={darkTheme}>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <CssBaseline />
                <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
