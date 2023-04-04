import {useNavigate} from 'react-router-dom';

export default function Card({pet}){

    const navigate = useNavigate();

    const onClickHandler= () =>{
        navigate(`/pet-cave/${pet._id}`);
       }    

    return(
        <div className="card" onClick={onClickHandler} >
                <img src= {pet.imageUrl} />
                <div className="short-info-wrapper">
                    <h3>{pet.name}</h3>
                    <ul>
                        <li><i className="fa-solid fa-paw"></i><span className="pink bold">Breed:</span> {pet.breed}</li>
                        <li><i className="fa-solid fa-paw"></i><span className="pink bold">Age:</span> {pet.age} </li>
                        <li><i className="fa-solid fa-paw"></i><span className="pink bold">Gender:</span> {pet.gender} </li>
                    </ul>
                </div>
        </div> 
    )
}