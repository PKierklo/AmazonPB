import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, Navigate } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from './pages';
import RootLayout from './layout/RootLayout';
import { AuthProvider } from './context/AuthContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} >
      <Route index element={<Navigate to="/home"/>} />
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
    </Route>
  )
)


function App() {

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  )
}

export default App
