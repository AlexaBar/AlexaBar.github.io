import React, { useState } from 'react'
import './Add.css'
import { assets, url } from '../../assets/assets';
import { toast } from 'react-toastify';

const Add = ({url}) => {

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Jucării Luminoase"
    });

    const onSubmitHandler = async (event) => {
        event.preventDefault();
    
        if (!image) {
            toast.error('Image not selected');
            return;
        }
    
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
    
        try {
            const response = await fetch(`${url}/api/toy/add`, {
                method: "POST",
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error("Failed to submit the form");
            }
    
            const result = await response.json();
    
            if (result.success) {
                toast.success(result.message);
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: data.category,
                });
                setImage(false);
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };
    
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };
    
    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Upload image</p>
                    <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
                    <label htmlFor="image">
                        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
                    </label>
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product name</p>
                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Product description</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Write content here' required />
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product category</p>
                        <select name='category' onChange={onChangeHandler} >
                            <option value="Jucării Luminoase">Jucării Luminoase</option>
                            <option value="Montessori">Montessori</option>
                            <option value="Racing Cars">Racing Cars</option>
                            <option value="Jucării Educative">Jucării Educative</option>
                            <option value="Magnetic Blocks">Magnetic Blocks</option>
                            <option value="Seturi de constructie">Seturi de constructie</option>
                            <option value="Jucării Disney">Jucării Disney</option>
                            <option value="Jucării Interactive">Jucării Interactive</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input type="Number" name='price' onChange={onChangeHandler} value={data.price} placeholder='25' />
                    </div>
                </div>
                <button type='submit' className='add-btn' >ADD</button>
            </form>
        </div>
    )
}

export default Add
