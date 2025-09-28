
import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';


const resultData = [
    { "id": 1, "name": "Alice", "physics": 85, "chemistry": 78, "math": 92 },
    { "id": 2, "name": "Bob", "physics": 72, "chemistry": 81, "math": 68 },
    { "id": 3, "name": "Charlie", "physics": 90, "chemistry": 85, "math": 88 },
    { "id": 4, "name": "David", "physics": 65, "chemistry": 70, "math": 75 },
    { "id": 5, "name": "Eva", "physics": 78, "chemistry": 82, "math": 80 },
    { "id": 6, "name": "Frank", "physics": 88, "chemistry": 90, "math": 85 },
    { "id": 7, "name": "Grace", "physics": 95, "chemistry": 92, "math": 98 },
    { "id": 8, "name": "Hannah", "physics": 80, "chemistry": 76, "math": 84 },
    { "id": 9, "name": "Ian", "physics": 70, "chemistry": 68, "math": 72 },
    { "id": 10, "name": "Julia", "physics": 92, "chemistry": 89, "math": 95 }
]




const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis ></YAxis>
                <Line dataKey={'math'}></Line>
                <Line dataKey={'physics'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;