
import React, { useState } from "react";

const AnimalList = () => {


    const [animals, setAnimal] = useState(
        [{
            id: 1,
            species: 'Dog',
            name: 'Tara',
            birth: new Date().toLocaleTimeString()
        },
        {
            id: 2,
            species: 'Cat',
            name: 'Fluffy',
            birth: new Date().toLocaleTimeString()
        },
        {
            id: 3,
            species: 'Rabbit',
            name: 'BugsBunny',
            birth: new Date().toLocaleTimeString()
        },
        {
            id: 4,
            species: 'Hampster',
            name: 'Chick',
            birth: new Date().toLocaleTimeString()
        },
        {
            id: 5,
            species: 'Fish',
            name: 'Goldy',
            birth: ''
        }

        ]);

    const removeHandler = (animalIndex) => {
        setAnimal([...animals.slice(0, animalIndex), ...animals.slice(animalIndex + 1)]);
    };

    const handleMoveAnimalToTop = (animalIndex) => {
        setAnimal([
            animals[animalIndex],
            ...animals.slice(0, animalIndex),
            ...animals.slice(animalIndex + 1)]);
    }

    return (
        <div>
            <h2>List of animals:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Species</th>
                        <th>Name</th>
                        <th>Date of birth</th>
                    </tr>
                </thead>
                <tbody>
                    {animals.map((animal, index) => (
                        <tr key={animal.id}>
                            <td>
                                {animal.species}</td>
                            <td> {animal.name}</td>
                            <td>{animal.birth ? animal.birth.toLocaleString() : 'unknown'}</td>
                            <td><button onClick={() => { removeHandler(index) }}>Remove</button></td>
                            <td><button onClick={() => { handleMoveAnimalToTop(index) }}>Top</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default AnimalList;