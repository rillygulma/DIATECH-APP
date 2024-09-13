import sponsor1Img from '../assets/Bade Metal.png';
import sponsor2Img from '../assets/JUDE.png';
import sponsor3Img from '../assets/Ola.png';
import sponsor4Img from '../assets/SURA TECHNICAL.png';

interface SponsorProps {
  icon: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: sponsor1Img,
    name: "Partnership",
  },
  {
    icon: sponsor2Img,
    name: "Partnership",
  },
  {
    icon: sponsor3Img,
    name: "Partnership",
  },
  {
    icon: sponsor4Img,
    name: "Partnership",
  }
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Our Partners
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <img src={icon} alt={name} className="w-1/2 h-1/2 rounded-lg" />
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
