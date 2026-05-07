import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "We'll be in touch within 1 business day." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container max-w-2xl">
          <SectionHeading
            badge="Contact"
            title="Let's Talk"
            description="Tell us about your business and we'll schedule a free consultation within 24 hours."
          />
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <Input required placeholder="Your name" className="bg-secondary border-border" maxLength={100} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input required type="email" placeholder="you@company.com" className="bg-secondary border-border" maxLength={255} />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
              <Input placeholder="Company name" className="bg-secondary border-border" maxLength={100} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Project Type</label>
              <Select>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="Select a project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai">AI Integration</SelectItem>
                  <SelectItem value="cloud">Cloud Solutions</SelectItem>
                  <SelectItem value="gov">Government IT</SelectItem>
                  <SelectItem value="automation">Workflow Automation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <Textarea required placeholder="Tell us about your project..." className="bg-secondary border-border min-h-[120px]" maxLength={1000} />
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
            </Button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
