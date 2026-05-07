import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Cloud, Shield, Cpu, FileText, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: Cpu, title: "AI Integration", desc: "Bring AI into your business without the complexity. We help small teams adopt chatbots, automation, and intelligent tools." },
  { icon: Bot, title: "AI Chatbots & Agents", desc: "Custom conversational agents for customer support, lead qualification, and day-to-day operations." },
  { icon: FileText, title: "Document Intelligence", desc: "Automate document processing, data extraction, and summarization—so your team can focus on higher-value work." },
  { icon: Workflow, title: "Workflow Automation", desc: "Eliminate manual bottlenecks and connect your tools with end-to-end process automation." },
  { icon: Cloud, title: "Cloud & Infrastructure", desc: "Migrate, modernize, and manage your cloud environment for reliability and cost savings." },
  { icon: Shield, title: "Security & Compliance", desc: "Enterprise-grade security practices sized for small business budgets and realities." },
];

const industries = [
  "Professional Services", "Healthcare", "Logistics", "Retail", "Real Estate", "Local Government"
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.08),transparent_60%)]" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            AI · Cloud · Small Business
          </span>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
            Big Technology for{" "}
            <span className="gradient-text">Small Business</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Trellis Cloud helps small businesses harness AI, cloud infrastructure, and
            automation—without the enterprise price tag or complexity.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">See How We Help</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-20 border-t border-border/50">
      <div className="container">
        <SectionHeading
          badge="What We Do"
          title="AI & Cloud, Sized for You"
          description="Enterprise-grade capabilities made accessible for small businesses. No bloated contracts, no unnecessary complexity."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-lg p-6 transition-colors hover:border-primary/30"
            >
              <s.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20 border-t border-border/50">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4 text-center">
          {[
            { value: "100+", label: "Small Businesses Helped" },
            { value: "40%", label: "Average Cost Savings" },
            { value: "10hrs+", label: "Saved Per Week" },
            { value: "24/7", label: "AI-Powered Support" },
          ].map((stat, i) => (
            <motion.div key={stat.label} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="font-heading text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="py-20 border-t border-border/50">
      <div className="container">
        <SectionHeading
          badge="Industries"
          title="Built for Growing Businesses"
          description="We work with small and mid-sized companies across industries that need modern technology without the overhead."
        />
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind) => (
            <span key={ind} className="rounded-full border border-border bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 border-t border-border/50">
      <div className="container">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Ready to Level Up Your Business?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Let's talk about how AI and cloud solutions can save you time, cut costs, and help you grow.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
