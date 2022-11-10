import React from 'react';
import { Form } from 'react-router-dom';
import { useState } from 'react';
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const AddService = () => {
  const [addService, setAddService] = useState({});

  const handleAddService = (event) => {
    event.preventDefault();
    console.log(addService);
    fetch("https://assignment-eleven-server-topaz.vercel.app/add/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          
          toast("Data Added Successfully!");
          
          event.target.reset();
        }
      });
  };
  

    const handleInputBlur = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      const newService = { ...addService };
      newService[field] = value;
      setAddService(newService);
    };
  return (
    <div>
      <h2 className="text-4xl text-primary text-center">Add Services</h2>
      <Form onSubmit={handleAddService} className="card-body ">
        <div className="form-control">
          <input
            onBlur={handleInputBlur}
            type="text"
            placeholder="Name"
            name="title"
            className="input input-bordered input-primary w-2/4 "
          />
        </div>
        <div className="form-control">
          <input
            onBlur={handleInputBlur}
            type="text"
            placeholder="Image Url"
            name="url"
            className="input input-bordered input-primary w-2/4 "
          />
        </div>
        <div className="form-control">
          <input
            onBlur={handleInputBlur}
            type="text"
            placeholder="Price"
            name="price"
            className="input input-bordered input-primary w-2/4 "
          />
        </div>
        <div className="form-control">
          <textarea
            onBlur={handleInputBlur}
            className="textarea textarea-primary w-2/4"
            placeholder="Description"
            name="info"
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <input
            className="btn btn-primary w-2/4 "
            type="submit"
            
            value="Add Service"
          />
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default AddService;