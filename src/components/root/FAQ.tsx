import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const items = [
    {
        question: 'What is SEO and why is it important?',
        answer: 'SEO (Search Engine Optimization) helps your website rank higher on search engines like Google, increasing visibility and driving more organic traffic to your site.',
    },
    {
        question: 'How long does SEO take to show results?',
        answer: 'SEO is a long-term strategy. It can take 3 to 6 months or more to see noticeable results, depending on the competition and how consistently optimization is done.',
    },
    {
        question: 'What are the key components of on-page SEO?',
        answer: 'On-page SEO includes optimizing title tags, meta descriptions, content quality, internal linking, image alt text, and URL structure.',
    },
    {
        question: 'What’s the difference between on-page and off-page SEO?',
        answer: 'On-page SEO refers to optimizations made on your website, while off-page SEO involves external factors like backlinks, social signals, and online reputation.',
    },
    {
        question: 'Are backlinks still important for SEO?',
        answer: 'Yes, backlinks from authoritative and relevant websites signal trust to search engines and play a crucial role in ranking.',
    },
    {
        question: 'How does technical SEO impact rankings?',
        answer: 'Technical SEO ensures your site is crawlable, fast, mobile-friendly, and free of errors, which helps search engines better understand and rank your content.',
    },
];

export default function FAQ() {
    return (
        <section className="padding-x padding-y bg-gray-100">
            <div className="container !max-w-3xl">
                <h2 className="mb-4 text-3xl font-semibold text-pretty md:mb-6 md:text-4xl lg:mb-8 lg:max-w-3xl lg:text-5xl font-amuly mx-auto text-center">
                    Frequently asked questions
                </h2>
                <Accordion type="single" collapsible>
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="font-semibold hover:no-underline font-amulya md:text-lg lg:text-xl cursor-pointer">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
