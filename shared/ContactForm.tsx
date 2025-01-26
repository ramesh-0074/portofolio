// components/ContactForm.tsx
"use client";
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  mobile: string;
  message: string;
};

export default function ContactForm() {
  const [message, setMessage] = React.useState("");
  const [success, setSuccess] = React.useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("Message sent successfully!");
        setSuccess(true)
      } else {
        setMessage("There was an error sending your message.");
        setSuccess(false)
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("There was an error sending your message.");
      setSuccess(false)
    }
  };

  return (
    <div className="flex-1 px-2 lg:px-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 bg-white dark:bg-[#5483b3] p-8 rounded-xl shadow-lg"
      >
        <div>
          <label className="block text-base font-semibold mb-2 dark:text-white text-[#1c2e4a]">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 border rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-[#7DA0CA] dark:border-gray-600 dark:text-white"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-base font-semibold mb-2 dark:text-white text-[#1c2e4a]">
            Mobile
          </label>
          <input
            type="text"
            {...register("mobile", {
              required: "Mobile is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid mobile number",
              },
            })}
            className="w-full px-4 py-2 border rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-[#7DA0CA] dark:border-gray-600 dark:text-white"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
          )}
        </div>

        <div>
          <label className="block text-base font-semibold mb-2 dark:text-white text-[#1c2e4a]">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-[#7DA0CA] dark:border-gray-600 dark:text-white"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-base font-semibold mb-2 dark:text-white text-[#1c2e4a]">
            Message
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-[#7DA0CA] dark:border-gray-600 dark:text-white"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 text-base font-medium rounded-xl ${
            isSubmitting
              ? "bg-gray-500 pointer-events-none"
              : "bg-[#021024] hover:bg-[#1c2e4a] text-white"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {message && <div className={`mt-4 ${success ? "text-green-500" : "text-red-500"}`}>{message}</div>}
      </form>
    </div>
  );
}
