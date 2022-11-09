import React from 'react';
import { Form } from 'react-router-dom';
import { useState } from 'react';

const AddService = () => {
  const [addService, setAddService] = useState({});

  const handleAddService = (event) => {
    event.preventDefault();
    console.log(addService);
    fetch("http://localhost:5000/add/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Data Added Successfully");
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
  );
};

export default AddService;