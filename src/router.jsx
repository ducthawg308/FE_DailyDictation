import { createBrowserRouter } from "react-router-dom";
import "./assets/styles/global.css"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import VocabularyPage from "./pages/vocabulary";
import ListenPage from "./pages/listen";
import RatingPage from "./pages/ratings";
import ExamPage from "./pages/exam";
import Banner from "./components/banner";
import VocabLevelBased from "./components/vocab_level_based";
import VocabOverView from "./components/vocab_overview";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index:true,
                element: <Banner/>,
            },
            {
                path: "/listen",
                element: <ListenPage/>,
            },
            {
                path: "/vocabulary",
                element: <VocabularyPage/>,
                children: [
                    {
                        index: true,
                        element: <VocabOverView />,
                    },
                    {
                        path: "level",
                        element: <VocabLevelBased />,
                    },
                ],
            },
            {
                path: "/exam",
                element: <ExamPage/>,
            },  
            {
                path: "/ratings",
                element: <RatingPage/>,
            },  
        ]
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/register",
        element: <RegisterPage/>,
    },
]);

export default router;