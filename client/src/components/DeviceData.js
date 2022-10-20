import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { PieChart, Pie } from 'recharts';
import FetchDataByIdSearvice from '../services/FetchDataService';
import { Link } from 'react-router-dom'
export default function DeviceData() {
    let { id } = useParams();
    const [devideData, setDeviceData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            FetchDataByIdSearvice(id).then((data) => {
                setDeviceData(data);
            });
        }, 4000);
    }, [id]);

    // TODO: handle logic for calculating location and generate pie based on that
    const row = devideData?.map((data) => {
        return (
            <>
                <Link to={`/gps/${data.DeviceId}`}>
                    <tr key={data.id}>
                        <td>{data.DeviceId}</td>
                        <td> -- </td>
                        <td>{data.DeviceType}</td>
                        <td> -- </td>
                        <td>{data.Timing}</td>
                        <td> -- </td>
                        <td>{data.Location}</td>
                    </tr>
                </Link>
                <hr />
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
        <PieChart width={400} height={400}>
            <Pie data={data} dataKey="students" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
        </PieChart>

    </>);
}



const loc = ['l1', 'l1','l2']
DeviceData.map((data)=>{
loc.push(data.location);    
})