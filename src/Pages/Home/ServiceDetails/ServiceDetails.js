import React  from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import ShowReview from './ShowReview';

const ServiceDetails = () => {

  const { _id, title, url, price, info } = useLoaderData();
  const { user } = useContext(AuthContext)

  const handleAddService = (event) => {
    event.preventDefault();
    
    const form = event.target
    const name = form.name.value
    const email = user?.email || 'unregistered'
    const review = form.review.value
    const img = form.url.value

    const reviewinfo = {
      service: _id,
      serviceName: title,
      persion: name,
      email,
      review
    }
    fetch("https://assignment-eleven-server-topaz.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Data Added Successfully");
          event.target.reset();
        }
      });
  };

   



  return (
    <div>
      <div className="text-4xl text-center m-5">
        <h2 className="text-green-900">Service Details</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-rows-1 lg:grid-cols-1">
        <div className="card max-w-screen-md mx-auto bg-base-100 shadow-xl">
          <figure>
            <img src={url} alt="img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{info}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Price</div>
              <div className="badge badge-outline">${price}</div>
            </div>
          </div>
        </div>
        <div className="mx-auto  ">
          <div className="text-4xl text-center m-5">
            <h2 className="text-green-900"> Reviews</h2>
          </div>
          <ShowReview></ShowReview>
        </div>

        <div>
          <div className="text-4xl text-center text-green-900">
            <h2>Add Review For This Service</h2>
          </div>
          <div className=" mx-auto w-3/4 ">
            <Form onSubmit={handleAddService} className="card-body ">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
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
                <textarea
                  className="textarea textarea-primary w-2/4"
                  placeholder="Description"
                  name="review"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary w-2/4 "
                  type="submit"
                  value="Add review"
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;