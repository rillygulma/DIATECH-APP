import { Statistics } from "./Statistics";
import pilot from "../assets/About pic.jpeg";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Founded in [2014], DIA-TECH has established itself as a trusted name in the metal work and fabrication industry. With Company Registration Number [RC:2967527]. Our extensive experience, combined with cutting-edge technology, allows us to offer a comprehensive range of services tailored to the specific needs of our clients. We pride ourselves on our ability to handle complex projects with precision and efficiency.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
