import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { title: "Mission-Driven", desc: "Every engagement is measured by the outcomes we deliver—not hours billed." },
  { title: "Security-First", desc: "We engineer for compliance from day one, not as an afterthought." },
  { title: "Outcome-Focused", desc: "We build solutions that reduce costs, increase efficiency, and scale with you." },
  { title: "Technology-Agnostic", desc: "We select the right tools for the problem, not the other way around." },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const About = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          badge="About"
          title="Technology Partners for Small Business"
          description="Trellis Cloud is a team of engineers and consultants who believe every small business deserves access to world-class technology."
        />

        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mx-auto max-w-3xl text-center mb-20">
          <p className="text-muted-foreground leading-relaxed">
            We partner with small and growing businesses to modernize their systems, adopt AI, and build reliable cloud infrastructure. Our team brings deep expertise across healthcare, logistics, professional services, and government—delivering practical solutions that drive real results without the enterprise overhead.
          </p>
        </motion.div>

        <SectionHeading title="What Defines Us" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-lg p-6 text-center"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-20 text-center">
          <Button asChild size="lg">
            <Link to="/contact">Work With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
