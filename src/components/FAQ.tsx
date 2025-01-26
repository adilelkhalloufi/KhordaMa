import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslation } from "react-i18next"

const faqs = [
  {
    question: "What is your platform?",
    answer: "Our platform is a comprehensive solution designed to help teams and individuals streamline their workflow and boost productivity."
  },
  {
    question: "How much does it cost?",
    answer: "We offer flexible pricing plans starting from $10/month. Contact us for custom enterprise solutions."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required."
  }
]

export function FAQ() {
  const { t } = useTranslation()
  return (
    <section id="faq" className="py-16 container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{t('faq.title')}</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          {t('faq.description')}
        </p>
      </div>
      <div className="max-w-[800px] mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}