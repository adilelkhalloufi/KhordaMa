import { Button } from "@/components/ui/button";
import { defineStepper } from "@stepperize/react";
import { useTranslation } from "react-i18next";
import TypeAccount from "@/components/register/TypeAccount";
import InterseingForm from "@/components/register/InterseingForm";
import PersonalInformation from "@/components/register/PersonalInformation";
import { useEffect, useState } from "react";
import { Categorie, RegisterForm, Specialitie } from "@/interfaces/admin";
import { apiRoutes } from "@/routes/api";
import { defaultHttp } from "@/utils/http";
import { handleErrorResponse } from "@/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/store";




const Register = () => {

    const { t } = useTranslation();
    const form = useSelector((state: RootState) => state.register)
    const [specialitie, setSpecialitie] = useState<Specialitie[]>([]);
    const [categories, setCategories] = useState<Categorie[]>([]);
    const [Stepper, setStepper] = useState(1);
    useEffect(() => {
        defaultHttp.get(apiRoutes.specialities)
            .then((response) => {
                setSpecialitie(response.data);
            })
            .catch(handleErrorResponse);
        defaultHttp.get(apiRoutes.categories)
            .then((response) => {
                setCategories(response.data);
            })
            .catch(handleErrorResponse);

    }, []);

    useEffect(() => {
        console.log("form", form);
    }
        , [form]);

    const Next = () => {
        console.log("Next", form);

        if (Stepper < 3) {
            console.log("Next", form);

            setStepper(Stepper + 1)
        }
    }
    const Previous = () => {
        console.log("Previous", form);

        if (Stepper > 1) {
            console.log("Previous", form);

            setStepper(Stepper - 1)
        }
    }
    return (
        <>

            <div className="container mx-auto py-10">

                <h1 className="text-3xl font-bold md:text-4xl  text-center mb-4 ">{t('website')}</h1>
                <p className="text-center mb-4">{t('hero_description')}</p>
                <div className="grid grid-cols-3 gap-3   transition-all">
                    {Array(3).map((step, index) => (
                        <div key={index} className={`relative h-1 rounded-full  transition-all   ${index < Stepper ? "bg-primary" : "bg-secondary"}`}></div>
                    ))}

                </div>

                <div className="p-10 max-w-2xl mx-auto  ">

                    {Stepper === 1 && <TypeAccount form={form} data={specialitie} />}
                    {Stepper === 2 && <InterseingForm form={form} data={categories} />}
                    {Stepper === 3 && <PersonalInformation form={form} />}



                </div>
                <div className="flex flex-row justify-between">
                    <Button onClick={Previous} variant="outline">Previous</Button>
                    <Button onClick={Next}>Next</Button>
                </div>

            </div >
        </>

    );
};

export default Register;










