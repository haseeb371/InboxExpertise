import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is email deliverability and why is it important?",
    answer: "Email deliverability is the ability of your emails to reach recipients' inboxes rather than spam folders. It's crucial for business success because poor deliverability means your messages aren't seen by potential customers, resulting in lost opportunities and wasted marketing efforts. Our service ensures your emails consistently reach the inbox through proper technical setup and ongoing monitoring."
  },
  {
    question: "How long does the technical setup take?",
    answer: "Our team typically completes the full technical setup within 24-48 hours. This includes configuring SPF, DKIM, DMARC records, domain authentication, and initial email warming. We handle all technical aspects so you can focus on your business while we ensure everything is configured correctly for optimal deliverability."
  },
  {
    question: "What's included in account management?",
    answer: "Our account management service includes 24/7 monitoring of your sender reputation, regular deliverability audits, proactive issue resolution, IP warm-up management, and ongoing optimization recommendations. We also provide detailed analytics and reports so you can track your email performance metrics in real-time."
  },
  {
    question: "Do you support both Google Workspace and Microsoft 365?",
    answer: "Yes! We offer premium email accounts for both Google Workspace and Microsoft 365. Both platforms come with full features, excellent deliverability rates, and comprehensive technical support. You can choose the platform that best fits your business needs and workflow preferences."
  },
  {
    question: "What is email warming and why is it necessary?",
    answer: "Email warming is the process of gradually establishing your sender reputation by sending increasing volumes of emails over time. It's necessary because email providers monitor new accounts closely, and sudden high-volume sending can trigger spam filters. Our pre-warmed accounts have already established positive sender reputation, allowing you to start campaigns immediately with high deliverability rates."
  },
  {
    question: "How do you ensure the security of our accounts?",
    answer: "We implement industry-leading security measures including encrypted connections, zero-access architecture (we never have access to your actual accounts), secure DNS configurations, and regular security audits. All technical setups follow best practices for email authentication (SPF, DKIM, DMARC) to protect against spoofing and phishing attempts."
  },
  {
    question: "Can I scale my email volume as my business grows?",
    answer: "Absolutely! Our pricing plans are designed to scale with your business. You can easily adjust the number of users or domains through our flexible slider-based pricing system. As your needs grow, we'll work with you to ensure your infrastructure can handle increased volume while maintaining excellent deliverability rates."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including technical setup assistance, ongoing account monitoring, deliverability troubleshooting, and strategic guidance for email campaigns. Our support team is available via email and chat to help you optimize your email infrastructure and resolve any issues quickly."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-5 py-2 text-base font-semibold rounded-full mb-6 flex items-center gap-2 w-fit mx-auto">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            FAQ
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our email deliverability services
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-semibold text-black pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
