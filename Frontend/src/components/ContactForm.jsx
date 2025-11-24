import { useState } from "react";
import axios from "axios";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import toast from "react-hot-toast";

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "4ffb443f-a840-415d-a724-e422e0e05011");

    const { data } = await axios.post(
      "https://api.web3forms.com/submit",
      formData
    );
    if (data.success) {
      toast.success("Message sent successfully!");
    } else {
      toast.error("Error in sending message!");
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center mt-10 overflow-hidden mb-10"
      id="contact"
    >
      <h1 className="text-6xl text-white font-medium text-center">
        Get In Touch
      </h1>
      <div className="w-[80%] lg:max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start justify-center mt-15 gap-10">
        {/* left */}
        <div className="w-full lg:w-[40%] flex flex-col items-start justify-start gap-5 px-2">
          <h1 className="text-4xl lg:text-5xl text-transparent bg-clip-text bg-linear-to-r from-[#1717be] to-[#b910b9] font-semibold">
            Let's Talk
          </h1>
          <p className="text-md text-white text-start">
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="flex flex-col items-start justify-start gap-5">
            <div className="flex items-start gap-5">
              <IoMail className="text-[#dfd2d2] size-8" />
              <span className="text-[#dfd2d2] text-md text-start mt-1">
                srijanspl2017@gmail.com
              </span>
            </div>
            <div className="flex items-start gap-5">
              <FaGithub className="text-[#dfd2d2] size-8" />
              <span className="text-[#dfd2d2] text-md text-start mt-1">
                https://github.com/thrivingSec/
              </span>
            </div>
            <div className="flex items-start gap-5">
              <FaLinkedin className="text-[#dfd2d2] size-8" />
              <span className="text-[#dfd2d2] text-md text-start mt-1">
                https://www.linkedin.com/in/srijan-karn-81507b27a/
              </span>
            </div>
            <div className="flex items-start gap-5">
              <FaPhoneAlt className="text-[#dfd2d2] size-8" />
              <span className="text-[#dfd2d2] text-md text-start mt-1">
                +91 6204899352
              </span>
            </div>
            <div className="flex items-start gap-5">
              <FaLocationDot className="text-[#dfd2d2] size-8" />
              <span className="text-[#dfd2d2] text-md text-start mt-1">
                India, Bihar
              </span>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full lg:w-[50%] flex flex-col items-start justify-start gap-5 px-2">
          <form
            className="w-full flex flex-col items-start justify-start gap-7"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name="name"
              required
              className="w-full h-[55px] outline-none border-0 rounded-md px-4 bg-[#878585fe] text-black font-medium"
              placeholder="John Doe"
            />
            <input
              type="text"
              name="email"
              required
              className="w-full h-[55px] outline-none border-0 rounded-md px-4 bg-[#878585fe] text-black font-medium"
              placeholder="john@doe.com"
            />
            <textarea
              rows={5}
              cols={30}
              name="message"
              className="w-full h-[300px] outline-none border-0 rounded-md px-4 bg-[#878585fe] text-black font-medium pt-2"
              placeholder="Your message"
              required
            ></textarea>
            <div className="hidden lg:flex items-center justify-center">
              <button
                type="submit"
                className="mt-2 px-5 py-3 bg-linear-to-r  from-[#1717be] to-[#b910b9] rounded-full text-white text-md font-medium cursor-pointer"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
