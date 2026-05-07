import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-16">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="font-heading text-xl font-bold text-foreground">
            Trellis<span className="text-primary">Cloud</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Enterprise AI integration and cloud solutions for government and business.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Services</h4>
          <div className="flex flex-col gap-2">
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Integration</Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cloud Solutions</Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Government IT</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Case Studies</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Industries</h4>
          <div className="flex flex-col gap-2">
            <Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Government</Link>
            <Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Healthcare</Link>
            <Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Logistics</Link>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Trellis Cloud. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
