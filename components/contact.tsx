"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";


export default function Contact() {
  const { ref } = useSectionInView("Contacto");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contacto</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80 mb-14">
       Para contactarse puede utilizar cualquiera de los siguientes enlances{" "} 
       <br/>
       <br/>
       

        <a className="bg-white borderBlack rounded-xl my-10 px-3 py-1 dark:bg-white/10 dark:text-white/80 hover:bg-gray-950 hover:text-gray-200" href="mailto:nicolasgfalabella@gmail.com">
          Mail  
        </a>{" "}

        <a className="bg-white borderBlack rounded-xl my-10 px-3 py-1 dark:bg-white/10 dark:text-white/80 hover:bg-gray-950 hover:text-gray-200" href="https://api.whatsapp.com/send?phone=5492324584106">
        Whatsapp
        </a>{" "}

        <a className="bg-white borderBlack rounded-xl my-10 px-3 py-1 dark:bg-white/10 dark:text-white/80 hover:bg-gray-950 hover:text-gray-200"  href="https://www.instagram.com/nfalabella_/ ">
         Instagram
        </a>{" "}

        <br/>
        <br></br>

       o a traves del siguiente formulario
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email enviado exitosamente");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Ingresar Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Su mensaje"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
