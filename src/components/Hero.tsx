import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="pt-24 md:pt-32 pb-16 container">
      <div className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter animate-fade-up">
          {t('title_hero1')} <span className="text-gradient"> {t('title_hero2')}</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] animate-fade-up">
          {t('hero_title')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
          <Button size="lg">  {t('button_stagnant')}</Button>
          <Button size="lg" variant="outline">{t('button_scrap')}</Button>
        </div>
      </div>
    </section>
  )
}