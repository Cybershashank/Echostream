"use client";
import { useFormik } from 'formik';

import React, { useEffect, useState } from 'react'
import { toast } from "react-hot-toast";
 
const PublishPage = () => {
  const[selImage, setselImage] = useState('');

  const uploadeImage = async (e) => {
    const file = e.target.files[0];
     setselImage(file);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile",{
        method: "POST",
        body: fd,
    }) .then((res) => {
    if(res.status === 200){
        console.log("file uploaded");
        toast.success('File Uploaded!!');
    }
    });    
}

  const PublishForm = useFormik({
    initialValues: {
      title: '',
      
      category: '',
      
      discription: '',
      image: ''
      
      
      
      
    },
    onSubmit: async (values) => {
      values.image = selImage.name;
      console.log(values);

      const res = await fetch("http://localhost:5000/podcast/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res.status);

      if (res.status === 200) {
        toast.success("Publish Successfully");
      } else if (res.status === 400) {
        toast.error("Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return (

    <div className='ms-3 mt-3'>
     <div className="flex justify-center mt-5">
        <form className="" onSubmit={PublishForm.handleSubmit}>
          <h1 className='text-center fw-bold text-4xl text-purple-600 mb-12' style={{ fontFamily: "cursive" }}>Publish Podcast</h1>
          <hr style={{ color: "black", Size: "10px" }} />
          <div className="mb-2">
            <label htmlFor="" className=' fw-bold'>Title</label>
            <input type="text" className="form-control btn-outline-dark "
              id='title' value={PublishForm.values.title} onChange={PublishForm.handleChange} />
          </div>
          <div className="mb-2">
            <label htmlFor="" className='form-label fw-bold'>Category</label>
            <input type="text" className="form-control btn-outline-dark "
              id='category' value={PublishForm.values.category} onChange={PublishForm.handleChange} />
          </div>
          <div className="mb-2">
            <label htmlFor="" className='form-label fw-bold'>Description</label>
            <textarea type="text" className="form-control btn-outline-dark h-75" placeholder='Comment...'
              id='discription' value={PublishForm.values.discription} onChange={PublishForm.handleChange} />
          </div>
          <div className="mb-5">
            <label htmlFor="uploade-image" className="form-label fw-bold">Add Image</label>
            <input type="file" id='uploade-image' className='form-control btn-outline-dark' onChange={uploadeImage} />
          </div>
  
          <div className="text-center mt-5">
            <button className='btn bg-purple-600 text-white hover:bg-purple-700 text-lg' type='submit'>Add Podcast</button>
          </div>
        </form>

      </div>
    
    </div>
  )
}

export default PublishPage