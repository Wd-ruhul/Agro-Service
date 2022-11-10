import React from 'react';

const Blog = () => {
  return (
    <div>
      <h2 className='text-primary text-4xl text-center m-5'>Welcome To Blog Section </h2>
      <div className="bg-amber-100 text-amber-content h-20 w-2/4 rounded mx-auto p-5 m-5 h-48">
        <h2 className="text-2xl">Difference between SQL and NoSQL</h2>
        <p>
          SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL.
        </p>
      </div>
      <div className="bg-amber-100 text-amber-content h-20 w-2/4 rounded mx-auto p-5 m-5 h-96">
        <h2>What is JWT, and how does it work?</h2>
        <p>
          SON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object. It is
          compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP). So the integrity and
          authenticity of the token can be verified by other parties involved.
          The purpose of using JWT is not to hide data but to ensure the
          authenticity of the data. JWT is signed and encoded, not encrypted.
          JWT is a token based stateless authentication mechanism. Since it is a
          client-side based stateless session, server doesn't have to completely
          rely on a datastore(database) to save session information.
        </p>
      </div>
      <div className="bg-amber-100 text-amber-content h-20 w-2/4 rounded mx-auto p-5 m-5 h-48">
        <h2>What is the difference between javascript and NodeJS?</h2>
        <p>
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language.
        </p>
      </div>
      <div className="bg-amber-100 text-amber-content h-20 w-2/4 rounded mx-auto p-5 m-5 h-96">
        <h2>How does NodeJS handle multiple requests at the same time?</h2>
        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;