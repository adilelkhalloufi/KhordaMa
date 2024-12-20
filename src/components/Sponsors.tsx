import { useTranslation } from "react-i18next";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}



export const Sponsors = () => {
    const { t  } = useTranslation()
  
  const sponsors: SponsorProps[] = [
    {
      icon: <img src="./s1.png" className="size-28" />,
      name: "Sponsor 1",
    },    {
      icon: <img src="./s2.png" className="size-28"  />,
      name: "Sponsor 1",
    },    {
      icon: <img src="./s3.png" className="size-28"  />,
      name: "Sponsor 1",
    },    {
      icon: <img src="./s4.png" className="size-28"  />,
      name: "Sponsor 1",
    },
   
  ];
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        {t("title_sponsor")}
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            {/* <h3 className="text-xl  font-bold">{name}</h3> */}
          </div>
        ))}
      </div>
    </section>
  );
};
