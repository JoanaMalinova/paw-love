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
import { useState } from "react";


function App() {

    const [pets, setPets] = useState([]);   

    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<CreatePost setPets={setPets} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/pet-cave" element={<PetCave setPets={setPets} pets={pets} />} />
                    <Route path="/my-cave" element={<MyCave />} />
                    <Route path="/pet-cave/:petId" element={<Details />} />
                    <Route path="/pet-cave/:petId/comments" element={<Details />} />
                    <Route path="/pet-cave/:petId/edit" element={<Edit setPets={setPets} />} />
                </Routes>
            </main>
            <Footer />
        </div>

    );
}

export default App;
