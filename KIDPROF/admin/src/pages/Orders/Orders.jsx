import React, { useEffect, useState } from 'react'
import './Orders.css'
import { toast } from 'react-toastify';
import { assets, url, currency } from '../../assets/assets';

const Order = () => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
        const response = await fetch(`${url}/api/order/list`);

        if (!response.ok) {
            throw new Error("Failed to fetch orders");
        }

        const result = await response.json();

        if (result.success) {
            setOrders(result.data.reverse());
        } else {
            toast.error("Error");
        }
    } catch (error) {
        console.error("Error fetching orders:", error);
        toast.error("Error");
    }
};

const statusHandler = async (event, orderId) => {
    try {
        const response = await fetch(`${url}/api/order/status`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderId,
                status: event.target.value,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to update order status");
        }

        const result = await response.json();

        if (result.success) {
            await fetchAllOrders();
        } else {
            toast.error("Failed to update status");
        }
    } catch (error) {
        console.error("Error updating order status:", error);
        toast.error("Error");
    }
};

useEffect(() => {
    fetchAllOrders();
}, []);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-toy'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity
                  }
                  else {
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>
              <p className='order-item-name'>{order.address.firstName + " " + order.address.lastName}</p>
              <div className='order-item-address'>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>{currency}{order.amount}</p>
            <select onChange={(e) => statusHandler(e, order._id)} value={order.status} name="" id="">
              <option value="Toy Processing">Toy Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order
