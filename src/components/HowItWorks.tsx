import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Excellence",
    description:
      "We are dedicated to delivering superior quality in every project.",
  },
  {
    icon: <MapIcon />,
    title: "Customer Focus",
    description:
      "We prioritize the needs and satisfaction of our clients.",
  },
  {
    icon: <PlaneIcon />,
    title: "Innovation",
    description:
      "We embrace new technologies and creative solutions to stay at the forefront of our industry.",
  },
  {
    icon: <GiftIcon />,
    title: "Safety",
    description:
      "We maintain the highest standards of safety in all our operations.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
      Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Core Values{" "}
        </span>
      </h2>
  
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
