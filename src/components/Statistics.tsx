import { useTranslation } from "react-i18next";

export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }
  const {t} = useTranslation()
  const stats: statsProps[] = [
    {
      quantity: "653T",
      description: t('statistac.title1'),
    },
    {
      quantity: "1,000",
      description: t('statistac.title2'),
    },
    {
      quantity: "3,500",
      description: t('statistac.title3'),
    },
    {
      quantity: "15",
      description: t('statistac.title4'),

    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
