import { IoSend } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { db } from "/src/config/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const SendMessage = () => {
  const [loading, setLoading] = useState(false);
  const userCollectionRef = collection(db, "contactss");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await addDoc(userCollectionRef, data);
      toast.success("Successfully Sent");
      reset();
    } catch (err) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="mt-28">
        <div className="grid justify-center" data-aos="fade-up" data-aos-offset="50">
          <h1 className="text-white font-poppins text-3xl sm:text-4xl font-bold uppercase">
            Send Messages
          </h1>
          <p className="uppercase text-pink-400 text-center tracking-widest">Connect with us</p>
        </div>
        <div
          className="boxContainer mt-5"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="400"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="md:w-2/3 w-full m-auto flex flex-col gap-5"
          >
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="text-white font-poppins text-lg tracking-wider font-semibold"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                id="firstName"
                className="py-3 md:py-3 px-4 mt-3 rounded-md bg-[#1b1b1b] outline-none border-none ring-1 focus:ring-2 font-poppins text-white placeholder:text-slate-300 ring-pink-500"
                {...register("firstName", {
                  required: "Full Name is required",
                })}
              />
              <p className="text-red-500 font-karla mt-2">
                {errors?.firstName?.message}
              </p>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-white font-poppins text-lg tracking-wider font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email Address"
                className="py-3 md:py-3 px-4 mt-3 rounded-md bg-[#1b1b1b] outline-none border-none ring-1 focus:ring-2 font-poppins text-white placeholder:text-slate-300 ring-pink-500"
                {...register("email", { required: "Email is required" })}
              />
              <p className="text-red-500 font-karla mt-2">
                {errors?.email?.message}
              </p>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-white font-poppins text-lg tracking-wider font-semibold"
              >
                Message
              </label>
              <textarea
                placeholder="Enter your Message"
                id="message"
                className="py-2 md:py-3 h-52 resize-none px-4 mt-3 rounded-md bg-[#1b1b1b] outline-none border-none ring-1 focus:ring-2 font-poppins text-white placeholder:text-slate-300 ring-pink-500"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              <p className="text-red-500 font-karla mt-2">
                {errors?.message?.message}
              </p>
            </div>
            <button
              className="py-3 px-5 rounded-md w-full flex items-center justify-center gap-3 bg-pink-600 shadow-sm ring-2 ring-pink-600 hover:ring-pink-500"
              disabled={loading}
            >
              <IoSend className="text-white text-xl" />
              <span className="text-white font-karla text-xl font-bold">
                {loading ? "Sending..." : "Send"}
              </span>
            </button>
          </form>
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default SendMessage;
