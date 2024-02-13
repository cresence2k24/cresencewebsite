import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");
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
          if (res.status === 200) resolve("success");
          else reject("error");
        })
        .catch(() => {
          reject("error");
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
    <>
      <Toaster />
      <form
        //   action={process.env.REACT_APP_contactForm}
        method="post"
        className="form flex flex-col w-fit text-black"
        onSubmit={handleSubmit}
      >
        <input type="email" name="Email" placeholder="Email" required />
        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
          required
        />
        <input
          type="number"
          maxLength={10}
          name="Phone"
          placeholder="Mobile Number"
          required
        />
        <textarea
          name="Message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submit"
          className="flex items-center justify-center  bg-gray-500 rounded-r-md p-2 w-40 h-[45px] "
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Contact;
