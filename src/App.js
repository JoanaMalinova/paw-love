import {
    Routes,
    Route,
    useNavigate,
    useLocation
} from 'react-router-dom';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import CreatePost from "./components/CreatePost/Create";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PetCave from "./components/PetCave/PetCave";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import MyCave from "./components/MyCave/MyCave";
import Logout from "./components/Logout/Logout";
import NotFound from "./components/special/404";
import { RouteGuard } from "./components/special/RouteGuard";
import { history } from './helpers/history';

import { useState } from "react";
import { PetOwner } from "./components/special/PetOwner";
import { AuthContext } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";

import { createStory, editStory } from "./service/petService";


function App() {

    const [pets, setPets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useAuth();
    history.navigate = useNavigate();
    history.location = useLocation();

    const submitHandler = async (data, userId) => {

        await createStory(data, userId);
        setPets(state => [...state, data]);
        history.navigate("/pet-cave");
    };

    const onSubmitHandler = async (data, petId) => {

        const formValues = data;
        delete formValues.created;
        delete formValues.comments;

        let currPet = pets.find(pet => pet.petId === petId);

        if (!currPet) {
            currPet = {};
        }

        const currPetvalues = Object.values(currPet);

        const valueArr = Object.values(formValues).filter(curr => !currPetvalues.includes(curr));

        if (valueArr.length) {
            const values = {};

            valueArr.forEach((value) => {
                const key = Object.keys(formValues).find(key => formValues[key] === value);
                values[key] = value;
            });

            await editStory(petId, values);

            setPets(state => state.map(curr => curr.petId === formValues.petId ? data : curr));

        }

        history.navigate(`/pet-cave/${petId}`);
    };

    return (
        <AuthContext.Provider value={user}>
            <>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pet-cave" element={<PetCave
                            setPets={setPets}
                            pets={pets}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading} />} />
                        <Route path="/pet-cave/:petId" element={<Details
                            setPets={setPets}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading} />} />
                        <Route element={<RouteGuard isLoading={isLoading} setIsLoading={setIsLoading} />}>
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/create" element={<CreatePost submitHandler={submitHandler} />} />
                            <Route path="/pet-cave/:petId/comments" element={<Details
                                setPets={setPets}
                                isLoading={isLoading}
                                setIsLoading={setIsLoading} />} />
                            <Route path="/pet-cave/:petId/edit" element={
                                <PetOwner pets={pets} isLoading={isLoading} setIsLoading={setIsLoading}>
                                    <Edit onSubmitHandler={onSubmitHandler} />
                                </PetOwner>
                            } />
                            <Route path="/my-cave" element={<MyCave
                                isLoading={isLoading}
                                setIsLoading={setIsLoading} />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </>
        </AuthContext.Provider>
    );
}

export default App;
