import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { PieChart, Pie } from 'recharts';
import FetchDataByIdSearvice from '../services/FetchDataByIdService';

export default function DeviceData() {
    let { id } = useParams();
    const [locations, setLocations] = useState([])
    const [deviceData, setDeviceData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            FetchDataByIdSearvice(id).then((data) => {
                setDeviceData(data);
            });
        }, 4000); 
    }, [id]);



    const row = deviceData.map((data) => {
        return (
            <>
                    <tr key={data.id}>
                        <td>{data.DeviceId}</td>
                        <td> -- </td>
                        <td>{data.DeviceType}</td>
                        <td> -- </td>
                        <td>{data.Timing}</td>
                        <td> -- </td>
                        <td>{data.Location}</td>
                    </tr>
            </>
        );
    });



    const data = [
        { name: 'Geeksforgeeks', students: 400 },
        { name: 'Technical scripter', students: 700 },
        { name: 'Geek-i-knack', students: 200 },
        { name: 'Geek-o-mania', students: 1000 }
    ];


    return (<>
        <table>
            {row}
        </table>
        <PieChart width={400} height={400}>
            <Pie data={data} dataKey="students" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
        </PieChart>

    </>);
}



// const loc = ['l1', 'l1','l2']
// DeviceData.map((data)=>{
// loc.push(data.location);    
// })