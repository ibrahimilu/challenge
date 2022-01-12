import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';

import UserDataGrid from './Grid/UserDataGrid';

const FilterGrid = () => {
    const [list, setList] = useState([]);
    const [selectedItem, setSelectedItem] = useState("");
    const [userAgeList, setUserAgeList] = useState({});
    const Headers = ['Age', 'Count'];
    const HeaderText = 'Age Demographic of Users With ___'

    /*
     * Get Age Demographics as per selected item.
     */
    useEffect(() => {
        if (selectedItem) {
            axios.get("/users/age/" + selectedItem).then(res => setUserAgeList(res.data));
        }
    }, [selectedItem]);

    /*
     * Get item list on render
     */
    useEffect(() => {
        axios.get("/items").then(res => {
            console.log("Items: ", res.data.items);
            setList(res.data.items);
        });
    }, []);

    const handleClick = (itemName) => {
        console.log('selected item: ', itemName);
        setSelectedItem(itemName);
    }

    return (
        <div className="container user-age-table">
            <h2>{HeaderText}</h2>
            <DropdownButton
                id="dropdown-basic-button"
                title="Item">
                {list.map((item, index) =>
                    <Dropdown.Item key={index} eventKey={item} onClick={() => handleClick(item)}>{item}</Dropdown.Item>)}
            </DropdownButton>
            <UserDataGrid data={userAgeList} header={Headers}/>
        </div>
    )
}

export default FilterGrid
