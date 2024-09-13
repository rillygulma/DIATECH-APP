import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { FaWhatsapp } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-2xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              DIA-TECH
            </span>{" "}
              is a leading provider of metal work, fabrication, and welding services, renowned for delivering high-quality and precision-engineered solutions. With a commitment to excellence and innovation, we cater to diverse industries, including construction, automotive, and manufacturing. Our state-of-the-art facilities
          </h1>{" "}
          and{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              skilled workforce
            </span>{" "}
            ensure that we meet and exceed client expectations with every project.
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
	We provide superior metal work, fabrication, and welding services that meet the highest standards of quality and safety.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="https://web.whatsapp.com/send?phone=number&text=message&app_absent=0"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            WhatsApp
            <FaWhatsapp className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
