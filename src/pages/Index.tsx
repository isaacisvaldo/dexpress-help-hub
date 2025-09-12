import { Navigation } from "@/components/ui/navigation";
import { FAQSection } from "@/components/faq/faq-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Conexões que transformam <span className="text-primary">lares e carreiras</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Conectamos empregadores a profissionais domésticas qualificadas, com segurança e eficiência em Angola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Buscar Profissionais
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Trabalhe Conosco
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">+2.500</div>
              <p className="text-muted-foreground">Profissionais cadastradas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Taxa de satisfação</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Referências verificadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Links */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">D Express</h3>
              <p className="text-muted-foreground text-sm">
                Conectando profissionais domésticas qualificadas com famílias em Angola.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
                <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link to="/central-ajuda" className="hover:text-primary transition-colors">Central de Ajuda</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
                <li><Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+244 937 760 239</li>
                <li>+244 937 759 809</li>
                <li>suporte@dexpress.com.ao</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
