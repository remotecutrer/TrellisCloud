import { motion } from "framer-motion";
import { Bot, Cloud, Shield, Cpu, FileText, Workflow, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Cpu,
    title: "AI Integration for Small Business",
    desc: "We help small teams adopt AI tools that actually make a difference—from smart assistants to predictive analytics—without needing an in-house data science team.",
    benefits: ["Tailored to your workflows", "No-code and low-code options", "Ongoing support & training"],
  },
  {
    icon: Bot,
    title: "Custom AI Chatbots",
    desc: "Conversational AI trained on your business data to handle customer questions, qualify leads, and support your team around the clock.",
    benefits: ["24/7 customer support", "80% faster response times", "Works with your existing tools"],
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    desc: "Stop wasting hours on manual data entry. Our AI reads, extracts, and organizes information from invoices, contracts, and forms automatically.",
    benefits: ["90% less manual review", "Multi-format support", "Accurate, auditable output"],
  },
  {
    icon: TrendingUp,
    title: "AI Sales Agents",
    desc: "Intelligent agents that engage your prospects, personalize outreach, and book meetings—so your small sales team can punch above its weight.",
    benefits: ["Higher conversion rates", "Automated follow-ups", "Works while you sleep"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Connect your apps, eliminate copy-paste tasks, and automate repetitive processes across your business.",
    benefits: ["Save 10+ hours per week", "Connect any tool or platform", "Real-time monitoring"],
  },
  {
    icon: Cloud,
    title: "Cloud Migration & Setup",
    desc: "Move off outdated systems and onto modern, reliable cloud infrastructure—without disruption to your business.",
    benefits: ["99.9% uptime", "Scalable as you grow", "Lower infrastructure costs"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "Enterprise-level security practices and compliance support sized for small business budgets.",
    benefits: ["Data protection best practices", "Compliance guidance", "Peace of mind"],
  },
];
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Services = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          badge="Services"
          title="What We Deliver"
          description="Powerful AI and cloud capabilities made practical and affordable for small businesses."
        />
        <div className="space-y-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card rounded-lg p-8 grid gap-6 md:grid-cols-3 items-start"
            >
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <s.icon className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Key Outcomes</h4>
                <ul className="space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
