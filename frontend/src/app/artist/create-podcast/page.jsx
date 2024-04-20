"use client";
import { useFormik } from 'formik';

import React, { useEffect, useState } from 'react'
import { toast } from "react-hot-toast";

const PublishPage = () => {
  const [selImage, setselImage] = useState('');

  const uploadeImage = async (e) => {
    const file = e.target.files[0];
    setselImage(file);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        toast.success('File Uploaded!!');
      }
    });
  }

  const PublishForm = useFormik({
    initialValues: {
      title: '',
      category: '',
      genre: '',
      language: '',
      discription: '',
      image: '',




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

    <section className=" bg-[#c2abc5] py-1 bg-blueGray-50">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        </div>

        <div className='ms-3 mt-3'>
          <div className="flex justify-center mt-5">

            <form className="" onSubmit={PublishForm.handleSubmit}>
              <h1 className='text-center fw-bold text-4xl text-purple-600 mb-12' style={{ fontFamily: "serif" }}>Publish Podcast</h1>
              <hr style={{ color: "black", Size: "10px" }} />


              <div className="mb-2">
                <label htmlFor="" className=' form-label fw-bold'>Title</label>
                <input type="text"
                  id='title'
                  value={PublishForm.values.title}
                  onChange={PublishForm.handleChange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Name"
                />
              </div>



              <div className="mb-2">
                <label htmlFor="" className='form-label fw-bold'>Category</label>
                <input type="text"
                  id='category'
                  value={PublishForm.values.category}
                  onChange={PublishForm.handleChange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Category"
                />
              </div>



              <div className="mb-2">
                <label htmlFor="" className='form-label fw-bold'>Genre</label>
                <input type="text"
                  id='genre'
                  value={PublishForm.values.category}
                  onChange={PublishForm.handleChange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Genre" />
              </div>


              <div className="mb-2">
                <label htmlFor="" className='form-label fw-bold'>Language</label>
                <input type="text"
                  id='language'
                  value={PublishForm.values.category}
                  onChange={PublishForm.handleChange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Language"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="" className='form-label fw-bold'>Description</label>
                <textarea type="text"
                  id='discription'
                  value={PublishForm.values.discription}
                  onChange={PublishForm.handleChange}
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Discription"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="uploade-image" className="form-label fw-bold">Add Image</label>
                <input type="file"
                  id='uploade-image'
                  className='form-control btn-outline-dark'
                  onChange={uploadeImage} />
              </div>

              <div className="text-center mt-5">
                <button className='btn bg-[#b06eb0] text-white hover:bg-purple-700 text-lg' type='submit'>Add Podcast</button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </section>
        )
}

        export default PublishPage