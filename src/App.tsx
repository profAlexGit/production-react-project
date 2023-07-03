import { Link, Route, Routes } from "react-router-dom";
import { Suspense, useContext, useState } from "react";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageAsync } from "./pages/MainPage/MainPage.lazy";

import './styles/index.scss';
import { Theme } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme]) }>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to='/'>
                Главная
            </Link>

            <Link to='/about'>
                О сайте
            </Link> 
            <Suspense fallback='loading'>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                    <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    )
}