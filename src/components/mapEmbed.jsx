import React from "react";

function MapEmbed() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold py-5">Join us at</h1>
      <div className="text-center pb-4">
        <p>Jntu Gurajada Vizianagaram</p>
        <p>Dwarapudi, Vizianagaram, 535003</p>
      </div>
      <iframe
        title="clg Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.2780197680754!2d83.37309837526136!3d18.151102282872234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bef0baf9f2a11%3A0xdb0b518115b27e07!2sJNTU-GV%20COLLEGE%20OF%20ENGINEERING%20VIZIANAGARAM!5e0!3m2!1sen!2sin!4v1707845842226!5m2!1sen!2sin"
        className="border-none w-[350px] h-[250px] lg:w-[500px] lg:h-[400px] rounded-xl"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapEmbed;
