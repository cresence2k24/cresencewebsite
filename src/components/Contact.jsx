import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Reveal } from "../components/Reveal";
function Contact() {
  const [inputValues, setInputValues] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
    console.log(inputValues.Name);
  };
  const resetForm = () => {
    setInputValues({
      Name: "",
      Email: "",
      Phone: "",
      Message: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    const formdata = new FormData(form);

    const dat = new Promise((resolve, reject) => {
      fetch(process.env.REACT_APP_contactForm, {
        method: "POST",
        body: formdata,
      })
        .then((res) => {
          if (res.status === 200) {
            resolve("success");
            resetForm();
          } else {
            reject("error");
            resetForm();
          }
        })
        .catch(() => {
          reject("error");
          resetForm();
        });
    });
    toast.promise(
      dat,
      {
        loading: <b>Loading...</b>,
        success: (
          <div className="bg-gray-">
            <p>
              Thanks for Reaching Out!!! <br />{" "}
              <b>We will reachout to you soon</b>
            </p>
          </div>
        ),
        error: "Message not sent, Try again!!",
      },
      {
        success: {
          style: {
            backgroundColor: "rgb(254, 242, 242)",
            textAlign: "center",
          },
          duration: 5000,
        },
        error: {
          style: {
            backgroundColor: "rgb(254, 202, 202)",
            textAlign: "center",
          },
        },
        loading: {
          style: {
            backgroundColor: "rgb(156, 163, 175)",
            textAlign: "center",
          },
        },
      }
    );
  };
  return (
    <div className="container mx-auto p-6 ">
      <Reveal>
      <Toaster />
      <h1 className="text-3xl font-bold mb-6 text-center text-gradient">
        Contact Us
      </h1>
      <form
        className="max-w-md mx-auto bg-transparent rounded-lg  p-8"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            onChange={handleOnChange}
            value={inputValues.Name}
            className="appearance-none  rounded-lg w-full py-2 px-3 bg-transparent border-[2px] border-purple-800 autofill:bg-transparent  text-white leading-tight focus:outline-none "
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-white font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            onChange={handleOnChange}
            value={inputValues.Email}
            className="shadow appearance-none rounded-lg w-full py-2 px-3 bg-transparent border-[2px] border-purple-800 autofill:bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            pattern="[a-zA-Z0-9._%+-]+@gmail\.com$"
            title="Please enter a valid Gmail address"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-white font-bold mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="Phone"
            value={inputValues.Phone}
            onChange={handleOnChange}
            className="shadow appearance-none rounded-lg w-full py-2 px-3 bg-transparent border-[2px] border-purple-800 autofill:bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your phone number"
            maxLength="10"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-white font-bold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="Message"
            onChange={handleOnChange}
            value={inputValues.Message}
            rows="4"
            className="shadow appearance-none rounded-lg w-full py-2 px-3 bg-transparent border-[2px] border-purple-800 text-white leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="btn btn-sm text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
      </Reveal>
    </div>
  );
}

export default Contact;
