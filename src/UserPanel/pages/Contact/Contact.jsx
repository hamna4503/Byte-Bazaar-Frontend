// src/Contact.js

import React from 'react';
import ContactLeftSection from '../../components/Contact/ContactLeftSection';
import ContactImage from "../../assets/images/contact/contact.jpg"
const Contact = () => {
  return (
    <div className='flex flex-col'>
        {/* <div style={{backgroundImage:"url('../../assets/images/contact/contact.jpg')"}} className='block w-screen h-[50vh]'>
            <p className='bg-transparent'>Contact Us</p>
        </div> */}

        <div className='relative'>
            <img src={ContactImage} className='object-top w-screen h-[50vh] object-cover'/>
            <p className='block w-full absolute top-3/4 text-white font-bold text-6xl text-center'>Contact Us</p>
        </div>
    <div className="container w-screen h-full flex flex-row justify-center flex-wrap mx-auto my-20 shadow-lg rounded">
      {/* <header className="bg-white w-full shadow p-4">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        </header> */}
        <ContactLeftSection/>
      <main className="w-[100vw] md:w-1/2 p-6">
        <div className=" p-8 mx-auto">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
                />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
                />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                required
                />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-950 text-white p-2 rounded-md hover:bg-purple-900"
              >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
                </div>
  );
};

export default Contact;

