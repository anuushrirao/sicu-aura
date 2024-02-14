import React, { useState } from 'react';
import Navbar from './Navbar';
import boy from '../images/boy.png';
import './Home.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const getDatafromLS = () => {
    const data = localStorage.getItem('user');
    if (data) {
        return [JSON.parse(data)]; // Convert user data object into an array with a single element
    } else {
        return [];
    }
}

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(getDatafromLS());

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        const filtered = getDatafromLS().filter(user =>
            user.Hname.toLowerCase().includes(query.toLowerCase()) ||
            user.email.toLowerCase().includes(query.toLowerCase()) ||
            user.address.toLowerCase().includes(query.toLowerCase()) ||
            user.phoneNumber.toLowerCase().includes(query.toLowerCase()) ||
            user.city.toLowerCase().includes(query.toLowerCase()) ||
            user.state.toLowerCase().includes(query.toLowerCase()) ||
            user.pincode.toLowerCase().includes(query.toLowerCase()) ||
            user.date.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    }

    return (
        <div className="home-wrapper">
            <Navbar />
            <div className="boy-wrapper">
                <img src={boy} alt="" className="boy-image" />
            </div>

            <div className='main-div'>
                <h2 className='title-name'>Hospital Registrations</h2>
                <div className='search-box'>
                    <input
                        placeholder='  Search'
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <SearchOutlinedIcon />
                </div>

                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Hospital Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone No</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Pincode</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.Hname}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.city}</td>
                                <td>{user.state}</td>
                                <td>{user.pincode}</td>
                                <td>{user.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
