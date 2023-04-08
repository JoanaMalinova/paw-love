import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {
    Routes,
    Route,
} from 'react-router-dom';
import Home from "./components/Home/Home";
import CreatePost from "./components/CreatePost/Create";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PetCave from "./components/PetCave/PetCave";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import MyCave from "./components/MyCave/MyCave";
import ErrorBoundary from "./components/special/ErrorBoundary";
import { RouteGuard } from "./components/special/RouteGuard";
import { useState } from "react";
import { PetOwner } from "./components/special/PetOwner";
import { AuthContext } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";



function App() {

    const [pets, setPets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);    
    const auth = useAuth();

    return (   
        <AuthContext.Provider value={auth}>
            <ErrorBoundary>
                <div>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/pet-cave" element={<PetCave
                                setPets={setPets}
                                pets={pets}
                                isLoading={isLoading}
                                setIsLoading={setIsLoading} />} />
                            <Route path="/pet-cave/:petId" element={<Details
                                setPets={setPets}
                                isLoading={isLoading}
                                setIsLoading={setIsLoading} />} />
                            <Route element={<RouteGuard />}>
                                <Route path="/create" element={<CreatePost setPets={setPets} />} />
                                <Route path="/pet-cave/:petId/comments" element={<Details
                                    setPets={setPets}
                                    isLoading={isLoading}
                                    setIsLoading={setIsLoading} />} />
                                <Route path="/pet-cave/:petId/edit" element={
                                    <PetOwner pets={pets}>
                                        <Edit setPets={setPets} />
                                    </PetOwner>
                                } />
                                <Route path="/my-cave" element={<MyCave
                                    isLoading={isLoading}
                                    setIsLoading={setIsLoading} />} />
                            </Route>
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </ErrorBoundary >
        </AuthContext.Provider>
    );
}

export default App;
