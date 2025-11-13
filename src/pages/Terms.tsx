import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Terms = () => {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: `By accessing and using the website (https://inboxexpertise.com/) ("Website") and the services provided by InboxExpertise.com ("we," "us," or "our"), you ("User" or "you") agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree with these Terms, please do not use our Website or services.`
    },
    {
      id: "services",
      title: "Services Offered",
      content: `InboxExpertise.com specializes in optimizing email deliverability through services such as professional email setup, deliverability optimization, and integration with advanced tools. Detailed descriptions of our services can be found on our Website.`
    },
    {
      id: "website-use",
      title: "Use of the Website",
      subsections: [
        {
          subtitle: "Eligibility",
          content: "You must be at least 18 years old to use our Website and services."
        },
        {
          subtitle: "User Conduct",
          content: "You agree not to use the Website for any unlawful purpose or in a way that may harm InboxExpertise.com or any third party. Prohibited activities include, but are not limited to:",
          list: [
            "Violating any applicable laws or regulations",
            "Infringing upon intellectual property rights",
            "Attempting to gain unauthorized access to our systems",
            "Transmitting malicious code or harmful content",
            "Engaging in fraudulent or deceptive practices"
          ]
        }
      ]
    },
    {
      id: "account",
      title: "Account Registration",
      content: "To access certain services, you may need to create an account. You agree to:",
      list: [
        "Provide accurate and complete information during registration",
        "Keep your account credentials secure and confidential",
        "Notify us immediately of any unauthorized use of your account",
        "Be responsible for all activities that occur under your account"
      ]
    },
    {
      id: "payment",
      title: "Payment and Billing",
      content: "All fees for our services are outlined on the Website. By purchasing our services, you agree to:",
      list: [
        "Pay all applicable fees as described at the time of purchase",
        "Provide valid payment information",
        "Authorize us to charge your payment method for all services rendered",
        "Be responsible for any applicable taxes or additional charges"
      ],
      footer: "Refunds and cancellations are subject to our refund policy, which can be found on our Website."
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content: "All content on the Website, including text, graphics, logos, images, and software, is the property of InboxExpertise.com or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission."
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      content: "Your use of the Website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our services, you consent to the practices described in our Privacy Policy."
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, InboxExpertise.com shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses, resulting from your use of or inability to use our services."
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      content: `Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.`
    },
    {
      id: "modifications",
      title: "Modifications to Terms",
      content: "We reserve the right to modify these Terms at any time. Any changes will be posted on this page, and your continued use of the Website after such modifications constitutes your acceptance of the updated Terms."
    },
    {
      id: "termination",
      title: "Termination",
      content: "We reserve the right to suspend or terminate your access to the Website and services at our sole discretion, without notice, for any reason, including but not limited to violation of these Terms."
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which InboxExpertise.com operates, without regard to its conflict of law provisions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 px-5 py-2 text-base font-semibold rounded-full border-0 flex items-center gap-2 w-fit mx-auto">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Legal
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-lg text-white/90">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-white/70 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8">

            {/* Table of Contents - Sidebar */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-black mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      {sections.map((section, index) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 hover:translate-x-1 duration-200"
                        >
                          <span className="font-semibold text-primary mr-2">{index + 1}.</span>
                          {section.title}
                        </a>
                      ))}
                      <a
                        href="#contact"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 hover:translate-x-1 duration-200"
                      >
                        <span className="font-semibold text-primary mr-2">{sections.length + 1}.</span>
                        Contact Information
                      </a>
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-6">
              {sections.map((section, index) => (
                <Card key={section.id} id={section.id} className="border-border bg-card scroll-mt-24">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-black mb-3">{section.title}</h2>

                        {section.subsections ? (
                          <div className="space-y-4">
                            {section.subsections.map((subsection, subIndex) => (
                              <div key={subIndex}>
                                <h3 className="text-lg font-semibold text-black mb-2">{subsection.subtitle}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-2">{subsection.content}</p>
                                {subsection.list && (
                                  <ul className="space-y-2 mt-3">
                                    {subsection.list.map((item, itemIndex) => (
                                      <li key={itemIndex} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <>
                            <p className="text-muted-foreground leading-relaxed mb-3">{section.content}</p>
                            {section.list && (
                              <ul className="space-y-2 mt-3">
                                {section.list.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {section.footer && (
                              <p className="text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border">
                                {section.footer}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Contact Section */}
              <Card id="contact" className="border-border bg-gradient-to-br from-primary/5 to-primary/10 scroll-mt-24">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{sections.length + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black mb-3">Contact Information</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        If you have any questions or concerns about these Terms, please contact us at:
                      </p>
                      <div className="bg-white rounded-lg p-6 border border-border">
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-semibold text-primary mb-1">Company</p>
                            <p className="text-foreground font-medium">InboxExpertise.com</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-primary mb-1">Email</p>
                            <a href="mailto:support@inboxexpertise.com" className="text-foreground hover:text-primary transition-colors">
                              support@inboxexpertise.com
                            </a>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-primary mb-1">Website</p>
                            <a href="https://inboxexpertise.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                              https://inboxexpertise.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl py-20 px-8 lg:px-16 overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <motion.div
              className="relative z-10 text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Ready to Transform Your Email Deliverability?
              </motion.h2>
              <motion.p
                className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Join thousands of businesses that trust us with their email infrastructure
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <button
                  onClick={() => window.open('https://calendly.com/alex-inboxexpertise/30min', '_blank')}
                  className="px-10 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                </button>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="px-10 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-white backdrop-blur-sm hover:scale-105"
                >
                  Contact Sales
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
