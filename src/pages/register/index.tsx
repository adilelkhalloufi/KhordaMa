import { Button } from "@/components/ui/button";
import { defineStepper } from "@stepperize/react";
import { useTranslation } from "react-i18next";
import TypeAccount from "@/components/register/TypeAccount";
import InterseingForm from "@/components/register/InterseingForm";
import PersonalInformation from "@/components/register/PersonalInformation";
import { useEffect, useState } from "react";
import { Categorie, RegisterForm, Specialitie } from "@/interfaces/admin";
import { useQuery } from "@tanstack/react-query";
import { apiRoutes } from "@/routes/api";
import { defaultHttp } from "@/utils/http";
import { handleErrorResponse } from "@/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/store";




const Register = () => {

    const { t } = useTranslation();
    const form = useSelector((state: RootState) => state.admin?.register)
    const [specialitie, setSpecialitie] = useState<Specialitie[]>([]);
    const [categories, setCategories] = useState<Categorie[]>([]);

    useEffect(() => {
        defaultHttp.get(apiRoutes.specialities)
            .then((response) => {
                setSpecialitie(response.data.data);
            })
            .catch(handleErrorResponse);
        defaultHttp.get(apiRoutes.categories)
            .then((response) => {
                setCategories(response.data.data);
            })
            .catch(handleErrorResponse);

    }, []);


    const { Scoped, useStepper, steps, utils } = defineStepper(
        { id: "1", component: <TypeAccount form={form} data={specialitie} /> },
        { id: "2", component: <InterseingForm form={form} data={categories} /> },
        { id: "3", component: <PersonalInformation form={form} /> },

    );

    const { current, prev, next } = useStepper();

    useEffect(() => {
        console.log("form,", form);
    }, [form])


    return (
        <>

            <div className="container mx-auto py-10">

                <h1 className="text-3xl font-bold md:text-4xl  text-center mb-4 ">{t('website')}</h1>
                <p className="text-center mb-4">{t('hero_description')}</p>
                <div className="grid grid-cols-3 gap-3   transition-all">
                    {/* i want to create link link backgrond color change if step on it {step.id === current.id ? "secondary" : "default"} */}
                    {steps.map((step) => (
                        <div key={step.id} className={`relative h-1 rounded-full  transition-all   ${step.id <= current.id ? "bg-primary" : "bg-secondary"}`}
                        >
                        </div>
                    ))}
                </div>

                <div className="p-10 max-w-lg mx-auto  ">

                    {current.component}



                </div>
                <div className="flex flex-row justify-between">
                    <Button onClick={prev} variant="outline">Previous</Button>
                    <Button onClick={next}>Next</Button>
                </div>

            </div >
        </>

    );
};

export default Register;










