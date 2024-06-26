import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message: msg,
    };

    emailjs.send('service_hn7fwgr', 'template_6k6p1sw', templateParams, 'aqC8cD0YeHVCthF87')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus("Email sent successfully!");
      }, (error) => {
        console.log('FAILED...', error);
        setStatus("Failed to send email.");
      });

    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <div className="w-full text-white py-[10rem] mb-24 p-10">
      <div className="mx-auto max-w-[1240px] text-center" >
        <h2 className="text-2xl mb-2 tracking-wide md:text-4xl">
          SEND ME AN EMAIL
        </h2>
        <div className="w-[100px] h-[5px] mx-auto bg-sky-300 rounded-md mt-4"></div>
        <p className="md:mt-3 md:pt-3 md:text-lg xs:text-base">
          Feel free to contact me through this form or through SMS. <br />
          Mobile number: 0967 243 9625
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-[2.5rem] md:grid md:grid-cols-2 gap-8">
            <input
              type="text"
              id="name"
              name="from_name"
              value={name}
              placeholder="Your Name"
              className="w-full px-3 py-2 text-black border rounded-md focus:outline-none xs:mb-4 md:mb-0"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              id="email"
              value={email}
              name="from_email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border text-black rounded-md focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              placeholder="Message"
              value={msg}
              name="message"
              className="w-full px-3 py-2 border text-black rounded-md focus:outline-none"
              onChange={(e) => setMsg(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center mt-[2rem]">
            <button
              type="submit"
              className="bg-sky-700 rounded-full text-white py-2 px-6 font-medium hover:bg-sky-800"
            >
              SUBMIT
            </button>
          </div>
          {status && <p className="mt-4">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
