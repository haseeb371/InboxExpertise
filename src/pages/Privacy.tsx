import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Privacy = () => {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: `At InboxExpertise.com ("we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [https://inboxexpertise.com/] ("Website") and use our services. By accessing or using our Website and services, you consent to the practices described in this policy.`
    },
    {
      id: "information-collection",
      title: "Information We Collect",
      subsections: [
        {
          subtitle: "Personal Information",
          content: "We may collect personally identifiable information, such as your name, email address, phone number, and company name, when you voluntarily provide it to us through forms or other interactions on our Website."
        },
        {
          subtitle: "Usage Data",
          content: "We automatically collect information about your interaction with our Website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits."
        },
        {
          subtitle: "Cookies and Tracking Technologies",
          content: "We use cookies and similar tracking technologies to enhance your experience on our Website. Cookies are small data files stored on your device that help us understand how you use our Website and improve its functionality."
        }
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      content: "We use the information we collect for various purposes, including:",
      list: [
        "Providing and Improving Services: To deliver the services you request, process transactions, and improve our offerings",
        "Communication: To send you updates, newsletters, marketing materials, and other information that may be of interest to you",
        "Analytics: To analyze usage patterns and trends to enhance user experience and optimize our Website",
        "Security: To protect against fraudulent or unauthorized activities and ensure the security of our Website"
      ]
    },
    {
      id: "information-sharing",
      title: "Sharing Your Information",
      content: "We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:",
      list: [
        "Service Providers: Trusted third-party vendors who assist us in operating our Website and providing our services, subject to confidentiality agreements",
        "Legal Requirements: If required by law or in response to valid legal processes, we may disclose your information to authorities"
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security."
    },
    {
      id: "your-choices",
      title: "Your Choices",
      subsections: [
        {
          subtitle: "Opt-Out",
          content: "You may opt out of receiving marketing communications from us by following the unsubscribe instructions provided in those communications or by contacting us directly."
        },
        {
          subtitle: "Cookie Preferences",
          content: "You can adjust your browser settings to refuse cookies or alert you when cookies are being used. However, disabling cookies may affect the functionality of our Website."
        }
      ]
    },
    {
      id: "third-party-links",
      title: "Third-Party Links",
      content: "Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit."
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      content: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have inadvertently received personal information from a visitor under the age of 18, we will delete the information from our records."
    },
    {
      id: "policy-changes",
      title: "Changes to This Privacy Policy",
      content: "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on our Website. Your continued use of the Website after such changes constitutes your acceptance of the updated Privacy Policy."
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
              Privacy Policy
            </h1>
            <p className="text-lg text-white/90">
              Your privacy is important to us. Learn how we protect your data
            </p>
            <p className="text-sm text-white/70 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
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
                        Contact Us
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
                      <h2 className="text-2xl font-bold text-black mb-3">Contact Us</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                      </p>
                      <div className="bg-white rounded-lg p-6 border border-border">
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-semibold text-primary mb-1">Company</p>
                            <p className="text-foreground font-medium">InboxExpertise.com</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-primary mb-1">Email</p>
                            <a href="mailto:alex@inboxexpertise.com" className="text-foreground hover:text-primary transition-colors">
                              alex@inboxexpertise.com
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
                      <p className="text-muted-foreground leading-relaxed mt-6 text-sm italic">
                        By using our Website and services, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy.
                      </p>
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

export default Privacy;
