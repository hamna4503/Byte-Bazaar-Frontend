import React, { useState } from "react";
import ContactLeftSection from "../../components/Contact/ContactLeftSection";
import ContactImage from "../../assets/images/contact/contact.jpg";
import { toast } from "react-toastify";
import axios from "axios";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:6005/api/contact/`,
        formData
      );
      console.log(response);
      if (response.status == 200) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          draggable: false,
          closeOnClick: false,
          theme: "colored",
          transition: toast.flip,
          onClose: () => {},
        });
        setFormData({
          name: "",
          email: "",
          topic: "",
          message: "",
        });
      } else {
        toast.error(response.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          draggable: false,
          closeOnClick: false,
          theme: "colored",
          transition: toast.flip,
          onClose: () => {},
        });
      }
    } catch (error) {
      toast.error(error.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        draggable: false,
        closeOnClick: false,
        theme: "colored",
        transition: toast.flip,
        onClose: () => {},
      });
    }
  };
  return (
    <div className="flex flex-col">
      {/* <div style={{backgroundImage:"url('../../assets/images/contact/contact.jpg')"}} className='block w-screen h-[50vh]'>
            <p className='bg-transparent'>Contact Us</p>
        </div> */}

      <div className="relative">
        <img
          src={ContactImage}
          className="object-top w-screen h-[60vh] object-cover"
        />
        <p className="block w-full absolute top-3/4 text-white font-bold text-6xl text-center">
          Contact Us
        </p>
      </div>
      <div className="container w-screen h-full flex flex-row justify-evenly flex-wrap mx-auto my-7 shadow-lg rounded">
        {/* <header className="bg-white w-full shadow p-4">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        </header> */}
        <ContactLeftSection />
        <main className="w-[100vw] md:w-1/3 p-6">
          <div className="p-4 mx-auto">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Name<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email<span className="text-red-700">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="topic"
                >
                  Topic of Contact<span className="text-red-700">*</span>
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="" disabled>
                    Select Topic of Contact
                  </option>
                  <option value="Product Feedback">Product Feedback</option>
                  <option value="Website Concern">Website Concern</option>
                  <option value="New Product Request">
                    New Product Request
                  </option>
                  <option value="Order Complaint">Order Complaint</option>
                  <option value="Other">Other..</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="message"
                >
                  Message<span className="text-red-700">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
