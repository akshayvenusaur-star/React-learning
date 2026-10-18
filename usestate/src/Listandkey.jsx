import React from 'react'

function Linsandkey() {
 
    const students = [
        { id: 101, name: "Akshay" },
        { id: 102, name: "Rahul" },
        { id: 103, name: "Priya" }
    ];

    return (
        <div>
            {students.map((student) => (
                <h2 key={student.id}>
                    {student.id}{student.name} 
                </h2>
            ))}
        </div>
    );
}



export default Linsandkey
