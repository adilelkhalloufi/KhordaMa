import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  };
  const { t } = useTranslation();
  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          {t('newsletter.title')}
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          {t('newsletter.description')}
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="info@adev.ma"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <Button>{t('button.subscribe')}</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
