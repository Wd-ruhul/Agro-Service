import React from 'react';
import { Form } from 'react-router-dom';

const AddService = () => {
  return (
    <Form className="card-body ">
      <div className="form-control">
        <input
          type="text"
          placeholder="Name"
          name="title"
          className="input input-bordered input-primary w-2/4 "
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Image Url"
          name="url"
          className="input input-bordered input-primary w-2/4 "
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Price"
          name="price"
          className="input input-bordered input-primary w-2/4 "
        />
      </div>
      <div className="form-control">
        <textarea
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