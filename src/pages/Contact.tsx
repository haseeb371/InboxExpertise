import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "alex@inboxexpertise.com",
      subtitle: "We'll respond within 24 hours",
      link: "mailto:alex@inboxexpertise.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 506-498-0949",
      subtitle: "Mon-Fri from 9am to 6pm",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "4517 Washington Ave.",
      subtitle: "Manchester, Kentucky 39495",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Monday - Friday",
      subtitle: "9:00 AM - 6:00 PM EST",
      link: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 px-5 py-2 text-base font-semibold rounded-full border-0 flex items-center gap-2 w-fit mx-auto">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Contact Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-white/90">
              Have questions about our services? We're here to help you improve your email deliverability
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-border bg-card hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-foreground font-medium hover:text-primary transition-colors block mb-1"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium mb-1">{info.details}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border bg-card h-full">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h2 className="text-3xl font-bold text-black mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number (Optional)
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 506-498-0949"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your needs..."
                        className="w-full min-h-[150px] resize-none"
                      />
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Map */}
              <Card className="border-border bg-card overflow-hidden flex-1">
                <CardContent className="p-0 h-full">
                  <div className="h-full min-h-[300px] bg-gradient-to-br from-primary/20 to-primary/5 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093716!2d-83.76206668468244!3d37.152798679891454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8842f1f4b8a9c8a9%3A0x7c4f8a9c8a9c8a9c!2s4517%20Washington%20Ave%2C%20Manchester%2C%20KY%2039495!5e0!3m2!1sen!2sus!4v1704387849416!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Why Contact Us */}
              <Card className="border-border bg-gradient-to-br from-primary/5 to-primary/10 flex-1">
                <CardContent className="p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-black mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3">
                    {[
                      "Expert email deliverability consultation",
                      "Custom solutions for your business needs",
                      "24/7 technical support for clients",
                      "Free initial consultation",
                      "Transparent pricing and no hidden fees"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

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

export default Contact;
