import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, FileText, TrendingUp, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const cases = [
  {
    icon: Bot,
    title: "AI-Powered Customer Service",
    industry: "Professional Services",
    challenge: "A 15-person consulting firm was losing leads because no one could respond to inquiries fast enough outside of business hours.",
    solution: "We deployed a custom AI chatbot trained on their services and FAQs, handling inquiries 24/7 with seamless handoff to their team.",
    results: ["60% fewer missed leads", "Response time from hours to seconds", "No additional hires needed"],
  },
  {
    icon: FileText,
    title: "Automated Document Processing",
    industry: "Small Law Firm",
    challenge: "A boutique law firm spent 20+ hours per week manually reviewing and organizing client intake documents.",
    solution: "We built an AI document pipeline that extracts key data, classifies documents, and routes them into their case management system.",
    results: ["85% reduction in manual review", "Faster client onboarding", "Fewer data entry errors"],
  },
  {
    icon: TrendingUp,
    title: "AI Sales Outreach",
    industry: "B2B Services",
    challenge: "A small B2B company with a 2-person sales team couldn't scale outreach without burning out or hiring.",
    solution: "We integrated an AI sales agent that qualifies leads, personalizes follow-ups, and books meetings automatically.",
    results: ["3x more qualified meetings", "50% less time on manual outreach", "Zero additional headcount"],
  },
  {
    icon: Cloud,
    title: "Cloud Migration for a Growing Clinic",
    industry: "Healthcare",
    challenge: "A multi-location clinic ran patient records on an outdated on-premise server with frequent downtime.",
    solution: "We migrated them to a secure, HIPAA-aware cloud environment with automated backups and modern access controls.",
    results: ["99.9% uptime achieved", "45% lower IT costs", "Staff can access records from any location"],
  },
];
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const CaseStudies = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          badge="Case Studies"
          title="Proven Results"
          description="Real examples of how we've helped small businesses save time, cut costs, and grow with AI and cloud."
        />
        <div className="space-y-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-1">
                <c.icon className="h-6 w-6 text-primary" />
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{c.industry}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mt-2">{c.title}</h3>
              <div className="grid gap-6 md:grid-cols-3 mt-6">
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Challenge</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.solution}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Results</h4>
                  <ul className="space-y-2">
                    {c.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-foreground font-medium">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-16 text-center">
          <Button asChild size="lg">
            <Link to="/contact">Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default CaseStudies;
