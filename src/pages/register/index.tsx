import { Button } from "@/components/ui/button";
import { defineStepper } from "@stepperize/react";
import { useTranslation } from "react-i18next";
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { RoleEnum } from "@/enum/RoleEnum";
import TypeAccount from "@/components/register/TypeAccount";
import InterseingForm from "@/components/register/InterseingForm";
import PersonalInformation from "@/components/register/PersonalInformation";
import { useEffect, useState } from "react";
import { RegisterForm } from "@/interfaces/admin";



const Register = () => {
    const { t } = useTranslation();

    const [form, setform] = useState<RegisterForm>({
        company_name: "",
        role: "",
        password: "",
        email: "",
        specialitie_id: 0,
        interseing_id: [],
        phone: "",
        address: "",
        zip_code: "",
        city: "",
        country: "",
        agreement: false,
        company_logo: "",
        first_name: "",

    })

    const { Scoped, useStepper, steps, utils } = defineStepper(
        { id: "1", component: <TypeAccount form={form} setform={setform} /> },
        { id: "2", component: <InterseingForm form={form} setform={setform} /> },
        { id: "3", component: <PersonalInformation form={form} setform={setform} /> },

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










