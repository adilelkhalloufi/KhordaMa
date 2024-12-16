import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
 import { LightBulbIcon } from "./Icons";
 import { useTranslation } from "react-i18next";
 
export const HeroCards = () => {
  const { t } = useTranslation()
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 direction-normal">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="./s3.png"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">{t('testimonial1_profil')}</CardTitle>
            <CardDescription>@{t('testimonial1_profil')}</CardDescription>
          </div>
        </CardHeader>

        <CardContent>{t('testimonial1_description')}</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="./s2.png"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover rounded-s-full border-2 border-green-600 bg-white"
          />
          <CardTitle className="text-center">{t('testimonial2')}</CardTitle>
          <CardDescription className="font-normal text-primary">
          {t('testimonial2_profil')}
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
          {t('testimonial2_description')}
          </p>
        </CardContent>

        
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[250px] left-[50px] w-10/12  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle> {t('testimonial3')} </CardTitle>
            <CardDescription className="text-md mt-2">
            {t('testimonial3_description')}
             </CardDescription>
          </div>
        </CardHeader>
      </Card>

   
    </div>
  );
};
