import LogoIcon from "../assets/Hero-pic-1.jpeg";
import LogoIcon2 from "../assets/Profile-pic.jpeg";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { LightBulbIcon } from "./Icons";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <img
            src={LogoIcon}
            alt="DIATECH Logo"
            className="h-14 w-auto rounded-lg"
          />
          <div className="flex flex-col">
            <CardTitle className="text-lg">DIATECH</CardTitle>
            <CardDescription>Work in Action</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          Our mission is to deliver high-quality metal work and fabrication solutions that drive value and satisfaction for our clients. We strive to achieve excellence through precision, innovation, and a commitment to the highest standards of safety and quality.
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex flex-col items-center pb-2">
          <img
            src={LogoIcon2}
            alt="Nuradeen Tijjani"
            className="absolute grayscale-0 -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Nuradeen Tijjani</CardTitle>
          <CardDescription className="font-normal text-primary">
            CEO DIATECH
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-2">
          <p>
            I provide overall leadership and strategic direction for the company and build and maintain relationships with key stakeholders.
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tjkhalid55@gmail.com&su=Request%20for%20service&body=BODY_TEXT"
              target="_blank"
              rel="noreferrer noopener"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
                className: "flex items-center gap-2 rounded-full border border-gray-300 p-2 hover:bg-gray-200"
              })}
            >
              <SiGmail className="w-5 h-5 text-red-500" />
              <span className="sr-only">Gmail</span>
              <span className="text-sm">MAIL ME</span>
            </a>

            <a
              href="https://web.whatsapp.com/send?phone=PHONE_NUMBER&text=Hello%20there!"
              target="_blank"
              rel="noreferrer noopener"
              className={buttonVariants({
                variant: "outline",
                className: "flex items-center gap-2 rounded-full border border-green-500 p-2 hover:bg-green-100"
              })}
            >
              <FaWhatsapp className="w-5 h-5 text-green-500" />
              <span className="text-sm">WhatsApp</span>
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Operation Hours</CardTitle>
            <CardDescription className="text-md mt-2">
              Monday to Friday: 8:00 AM - 6:00 PM
              <br />
              Saturday: 9:00 AM - 2:00 PM
              <br />
              Sunday: Closed
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
