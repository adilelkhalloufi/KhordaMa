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

const formSchemaTypeAccount = z.object({
    company_name: z
        .string()
        .min(1, { message: 'Please enter your company name' }),
    specialitie_id: z
        .number(),
    role: z
        .number(),
    first_name: z
        .string()
        .min(1, { message: 'Please enter your first name' }),
    last_name: z
        .string()
        .min(1, { message: 'Please enter your last name' }),
    email: z
        .string()
        .email({ message: 'Please enter a valid email' }),
    password: z
        .string()
        .min(1, {
            message: 'Please enter your password',
        }),
    phone: z
        .string()
        .min(1, {
            message: 'Please enter your phone',
        }),


})


const Register = () => {
    const { t } = useTranslation();
    const form = useForm<z.infer<typeof formSchemaTypeAccount>>({
        resolver: zodResolver(formSchemaTypeAccount),
        defaultValues: {
            company_name: '',
            specialitie_id: 0,
            role: RoleEnum.SELLER
        },
    })
    const { Scoped, useStepper, steps, utils } = defineStepper(
        { id: "1", component: <TypeAccount form={form} /> },
        { id: "2", component: <InterseingForm form={form} /> },
        { id: "3", component: <PersonalInformation form={form} /> },

    );

    const { current, prev, next } = useStepper();



    function onSubmit(values: z.infer<typeof formSchemaTypeAccount>) {


        console.log("values : ", values);
    }

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
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            {current.component}
                        </form>
                    </Form>

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










