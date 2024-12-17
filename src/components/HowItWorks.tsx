import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import { useTranslation } from "react-i18next";

interface FeatureProps {
  icon: JSX.Element;
  title?: string;
  description?: string;
}



export const HowItWorks = () => {

  const {t} = useTranslation()
  const features: FeatureProps[] = [
    {
      icon: <MedalIcon />,
      title: t('why.title1'),
      description:t('why.description1')
        
    },
    {
      icon: <MapIcon />,
      title: t('why.title2'),
      description:
      t('why.description2'),
    },
    {
      icon: <PlaneIcon />,
      title: t('why.title3'),
      description:
         t('why.description3'),
    },
    {
      icon: <GiftIcon />,
      title: t('why.title4'),
      description:
         t('why.description4'),
    },
    {
      icon: <GiftIcon />,
      title: t('why.title5'),
      description:
         t('why.description5'),
    },
    {
      icon: <GiftIcon />,
      title: t('why.title6'),
      description:
         t('why.description6'),
    },
    {
      icon: <GiftIcon />,
      title: t('why.title7'),
      description:
         t('why.description7'),
    },
  ];
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        {t('why.title')}

        </span>
        
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        {t('why.description')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
