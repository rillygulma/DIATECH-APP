import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Expertise",
    comment: "Our team consists of highly skilled professionals with extensive industry experience.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Quality",
    comment: "We use the latest technology and high-grade materials to ensure top-quality results.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Customization",
    comment: "We offer tailored solutions to meet the unique requirements of each project.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Timeliness",
    comment: "We are committed to delivering projects on time and within budget.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Customer Service",
    comment: "We provide exceptional support throughout the project lifecycle.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mt-8"> {/* Added mt-8 for margin-top */}
        Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Choose {" "}
        </span>
        Us
      </h2>
      <div className="grid mt-5 md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(({ image, name, comment }, index) => (
          <Card
            key={index} // Ensure each card has a unique key
            className="max-w-md md:break-inside-avoid overflow-hidden"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage alt="" src={image} />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{name}</CardDescription> {/* Changed from userName to name */}
              </div>
            </CardHeader>

            <CardContent>{comment}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
