import React from "react";

const AnimalList = () => {
    const animals = [
        {
            id: 1,
            species: 'Dog',
            name: 'Tara',
            birth: new Date()
        },
        {
            id: 2,
            species: 'Cat',
            name: 'Fluffy',
            birth: new Date()
        },
        {
            id: 3,
            species: 'Rabbit',
            name: 'BugsBunny',
            birth: new Date()
        },
        {
            id: 4,
            species: 'Hampster',
            name: 'Chick',
            birth: new Date()
        },
        {
            id: 5,
            species: 'Fish',
            name: 'Goldy',
            birth: new Date()
        }

    ]
    return (
        <div>
            <h2>List of animals:</h2>
            <table>
                <thead>
                    <tr>
                        <th>species</th>
                        <th>name</th>
                        <th>Date of birth</th>
                    </tr>
                </thead>
                <tbody>
                    {animals.map((animal) => (
                        <tr key={animal.id}>
                            <td>
                                {animal.species}</td>
                            <td> {animal.name}</td>
                            <td>{animal.birth.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AnimalList;