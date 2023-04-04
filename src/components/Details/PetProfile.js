import LikesAndButtons from './LikesAndButtons';

export function PetProfile({data, petId}){

    return (<div className="details-info-wrapper">
        <ul>
            <li>
                <h1>{data.name}</h1>
            </li>
            <li><span className="pink bold">Breed:</span> {data.breed}</li>
            <li><span className="pink bold">Age:</span> {data.age}</li>
            <li><span className="pink bold">Gender:</span> {data.gender}</li>
            <li>
                <p className="details-story"><span className="pink bold">Story:</span> {data.petStory}</p>
            </li>
        </ul>
        <LikesAndButtons id={petId} ownerId={data._ownerId} petName={data.name}  />
    </div>)
}