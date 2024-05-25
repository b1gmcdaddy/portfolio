import React, { useState } from 'react'

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Details submitted through contact form:", {
        name,
        email,
        msg,
      });
      setName("");
      setEmail("");
      setMsg("");
    };


  return (
      <div className="w-full text-white py-[10rem]">
        <div className="mx-auto max-w-[1240px] text-center">
          <h2 className="text-2xl mb-2 tracking-wide md:text-4xl">
            SEND ME AN EMAIL
          </h2>
          <div className="w-[100px] h-[2.5px] mx-auto bg-sky-300 rounded-md mt-4"></div>
          <p className="md:mt-3 md:pt-3 md:text-lg xs:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-[3.5rem] grid grid-cols-2 gap-8">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Your Name"
                className="w-full px-3 py-2 text-black border rounded-md focus:outline-none"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                id="email"
                value={email}
                name="email"
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
          </form>
        </div>
      </div>
  )
}

export default Contact