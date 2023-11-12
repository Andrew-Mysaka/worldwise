import {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import {CitiesProvider} from "./contexts/CitiesContext.jsx";
import {AuthProvider} from "./contexts/FakeAuthContext.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage.jsx";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
    return (
        <AuthProvider>
            <CitiesProvider>
                <BrowserRouter>
                    <Suspense fallback={<SpinnerFullPage/>}>
                        <Routes>
                            <Route path={'/'} element={<Homepage/>}/>
                            <Route path={'product'} element={<Product/>}/>
                            <Route path={'pricing'} element={<Pricing/>}/>
                            <Route path={'login'} element={<Login/>}/>
                            <Route path={'app'} element={
                                <ProtectedRoute>
                                    <AppLayout/>
                                </ProtectedRoute>}>
                                <Route index element={<Navigate replace to={'cities'}/>}/>
                                <Route path={'cities'} element={<CityList/>}/>
                                <Route path={'cities/:id'} element={<City/>}/>
                                <Route path={'countries'} element={<CountryList/>}/>
                                <Route path={'form'} element={<Form/>}/>
                            </Route>
                            <Route path={'*'} element={<PageNotFound/>}/>
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </CitiesProvider>
        </AuthProvider>

    );
}

export default App;