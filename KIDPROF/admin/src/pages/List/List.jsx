import React, { useEffect, useState } from 'react'
import './List.css'
import { url, currency } from '../../assets/assets'
import { toast } from 'react-toastify';

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
        const response = await fetch(`${url}/api/toy/list`);
        if (!response.ok) {
            throw new Error("Failed to fetch toy list");
        }

        const result = await response.json();
        if (result.success) {
            setList(result.data);
        } else {
            toast.error("Error");
        }
    } catch (error) {
        console.error("Error fetching toy list:", error);
        toast.error("Error");
    }
};

const removeToy = async (toyId) => {
    try {
        const response = await fetch(`${url}/api/toy/remove`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: toyId }),
        });

        if (!response.ok) {
            throw new Error("Failed to remove toy item");
        }

        const result = await response.json();
        await fetchList(); // Refresh the toy list

        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error("Error");
        }
    } catch (error) {
        console.error("Error removing toy item:", error);
        toast.error("Error");
    }
};

useEffect(() => {
    fetchList();
}, []);

  return (
    <div className='list add flex-col'>
      <p>All Toys List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p className='cursor' onClick={() => removeToy(item._id)}>x</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
