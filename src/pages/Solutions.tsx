import { motion } from "framer-motion";
import { Shield, Heart, Truck, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const industries = [
  {
    icon: Building2,
    title: "Professional Services",
    desc: "Law firms, agencies, and consultancies that need to streamline operations, automate client communications, and manage documents smarter.",
    highlights: ["Client intake automation", "Document processing & summarization", "CRM & workflow integration", "AI-powered scheduling"],
  },
  {
    icon: Heart,
    title: "Healthcare & Wellness",
    desc: "Small clinics, practices, and wellness businesses looking to improve patient engagement and reduce administrative burden.",
    highlights: ["Patient communication bots", "Appointment automation", "Secure document handling", "HIPAA-aware solutions"],
  },
  {
    icon: Truck,
    title: "Logistics & Operations",
    desc: "Small fleet operators, warehouses, and supply chain businesses that need visibility, efficiency, and smarter routing.",
    highlights: ["Route optimization", "Inventory tracking", "Real-time dashboards", "Process automation"],
  },
  {
    icon: Shield,
    title: "Local Government & Compliance",
    desc: "Municipal agencies and contractors that need secure, compliant technology on a practical budget.",
    highlights: ["Compliance-ready systems", "Secure cloud hosting", "Citizen engagement tools", "Audit-ready documentation"],
  },
];
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Solutions = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          badge="Solutions"
          title="Tailored for Your Industry"
          description="We understand the unique challenges small businesses face in each sector—and build solutions that fit."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-lg p-8"
            >
              <ind.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground">{ind.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{ind.desc}</p>
              <ul className="mt-6 space-y-2">
                {ind.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Solutions;
