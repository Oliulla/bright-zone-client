import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import CheckOut from "../../components/CheckOut/CheckOut";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import FAQ from "../../components/FAQ/FAQ";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layouts/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Courses />
            },
            {
                path: '/courses',
                element: <Courses />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/course/:id',
                loader: ({params}) => fetch(`https://bright-zone-server.vercel.app/course/${params.id}`),
                element: <CourseDetails />
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut /></PrivateRoute>
            }
        ]
    }
])

export default routes;