import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, Award, Users, TrendingUp, Shield, Zap, Heart } from "lucide-react";
import { useRef } from "react";

const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const stats = [
    { value: "10,000+", label: "Active Users" },
    { value: "500+", label: "Projects Completed" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission Driven",
      description: "We're committed to helping businesses achieve perfect email deliverability and reach their audience effectively."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "Your data security is our top priority. We implement industry-leading security measures to protect your accounts."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly evolve our services to stay ahead of email deliverability challenges and industry changes."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Success",
      description: "Your success is our success. We provide dedicated support to ensure you achieve your email marketing goals."
    }
  ];

  const team = [
    {
      name: "John Anderson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "15+ years of experience in email infrastructure and deliverability"
    },
    {
      name: "Sarah Mitchell",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Expert in scaling email systems for enterprise clients"
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      bio: "Specialized in email authentication and security protocols"
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Dedicated to ensuring client satisfaction and success"
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to solve email deliverability challenges for businesses"
    },
    {
      year: "2019",
      title: "First 1,000 Users",
      description: "Reached our first major milestone and expanded our service offerings"
    },
    {
      year: "2021",
      title: "Enterprise Solutions",
      description: "Launched dedicated enterprise-level email infrastructure services"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to serve clients worldwide with 24/7 support"
    },
    {
      year: "2024",
      title: "10,000+ Active Users",
      description: "Celebrating our growth and continued commitment to excellence"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
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
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 px-5 py-2 text-base font-semibold rounded-full border-0 flex items-center gap-2 w-fit mx-auto">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              About Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Delivering Excellence in Email Infrastructure
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              We're on a mission to help businesses worldwide achieve perfect email deliverability through innovative solutions and dedicated support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision & More */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <Card className="border-border bg-card h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <motion.h2
                    className="text-xl font-bold text-black mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Our Mission
                  </motion.h2>
                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    To empower businesses with reliable, secure email infrastructure solutions that guarantee inbox delivery and maximize engagement through innovative technology.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-border bg-card h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <motion.h2
                    className="text-xl font-bold text-black mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Our Vision
                  </motion.h2>
                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    To become the world's most trusted email infrastructure provider, enabling businesses to focus on growth while we handle deliverability.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-border bg-card h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <motion.h2
                    className="text-xl font-bold text-black mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Our Commitment
                  </motion.h2>
                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    Dedicated to providing exceptional service to every client. From setup to optimization, we ensure your email infrastructure performs at its best.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-border bg-card h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <motion.h2
                    className="text-xl font-bold text-black mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Why Choose Us
                  </motion.h2>
                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    Years of experience in email deliverability with proven solutions. Thousands of satisfied clients achieving 99%+ inbox placement rates.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-border bg-card h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <motion.h2
                    className="text-xl font-bold text-black mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Our Approach
                  </motion.h2>
                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    Combining cutting-edge technology with personalized service. Every solution is tailored to your needs with proactive monitoring and optimization.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-border bg-card h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <motion.h2
                    className="text-xl font-bold text-black mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Global Reach
                  </motion.h2>
                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    Serving clients worldwide with 24/7 support. Our global network ensures fast, reliable service delivery across all regions and time zones.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-border bg-card text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-8">
                    <motion.h3
                      className="text-4xl lg:text-5xl font-bold text-primary mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                    >
                      {stat.value}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {stat.label}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/10 px-5 py-2 text-base font-semibold rounded-full flex items-center gap-2 w-fit mx-auto">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Our Values
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do and shape how we serve our clients
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-border bg-card h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary"
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                    >
                      {value.icon}
                    </motion.div>
                    <motion.h3
                      className="text-xl font-bold text-black mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {value.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {value.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/10 px-5 py-2 text-base font-semibold rounded-full flex items-center gap-2 w-fit mx-auto">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Our Journey
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Growing Together Since 2018
            </h2>
          </motion.div>

          <div className="relative" ref={timelineRef}>
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full hidden lg:block">
              {/* Timeline Line Background */}
              <div className="absolute inset-0 bg-primary/20" />

              {/* Timeline Line Progress */}
              <motion.div
                className="absolute inset-0 bg-primary"
                style={{
                  scaleY: scrollYProgress,
                  transformOrigin: 'top'
                }}
              />
            </div>

            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <Card className="border-border bg-card">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-primary flex-shrink-0 items-center justify-center relative z-10">
                    <div className="w-6 h-6 rounded-full bg-white" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/10 px-5 py-2 text-base font-semibold rounded-full flex items-center gap-2 w-fit mx-auto">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Our Team
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Meet the People Behind InboxExpertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team of experts is committed to your success
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-border bg-card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <motion.div
                      className="aspect-square overflow-hidden"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>
                    <div className="p-6">
                      <motion.h3
                        className="text-xl font-bold text-black mb-1"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p
                        className="text-primary font-semibold text-sm mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {member.role}
                      </motion.p>
                      <motion.p
                        className="text-muted-foreground text-sm leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        {member.bio}
                      </motion.p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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

export default About;
