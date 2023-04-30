import {
    createBrowserRouter, Navigate,
} from "react-router-dom";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import Main from "../layouts/Main";
import Newslayout from "../layouts/Newslayout";
import Category from "../Pages/Home/Catagory/Category";
import News from "../Pages/Home/News/News";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element: <AuthenticationLayout></AuthenticationLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/category",
        element: <Main></Main>,
        children: [
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element:<Newslayout></Newslayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router