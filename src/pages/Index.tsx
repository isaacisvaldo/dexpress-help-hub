import { Navigation } from "@/components/ui/navigation";
import { FAQSection } from "@/components/faq/faq-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Heart, Users, Award, TrendingUp, CheckCircle } from "lucide-react";

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

      {/* Sobre Nós Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-primary">D Express</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conectando profissionais domésticas qualificadas com famílias em Angola há mais de 5 anos
            </p>
          </div>

          {/* Mission & Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Nossa Missão */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Nossa Missão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Revolucionar o mercado de serviços domésticos em Angola, criando uma ponte segura e confiável 
                entre famílias que necessitam de assistência domiciliária e profissionais qualificadas em busca 
                de oportunidades de trabalho digno e reconhecido.
              </p>
            </Card>

            {/* Nossa História */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Nossa História</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Fundada em 2019, a D Express surgiu da necessidade de profissionalizar o setor de serviços 
                domésticos em Angola. Hoje, somos a principal referência no país, com mais de 2.500 profissionais 
                cadastradas e milhares de famílias atendidas.
              </p>
            </Card>
          </div>

          {/* Valores Cards */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
              Nossos Valores
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Confiança</h4>
                <p className="text-muted-foreground">
                  Verificamos todas as profissionais e garantimos referências confiáveis para sua total segurança
                </p>
              </Card>

              <Card className="text-center p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Qualidade</h4>
                <p className="text-muted-foreground">
                  Selecionamos apenas profissionais experientes e altamente qualificadas para servir sua família
                </p>
              </Card>

              <Card className="text-center p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Transparência</h4>
                <p className="text-muted-foreground">
                  Processo claro e honesto em todas as nossas relações, do cadastro à contratação
                </p>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="p-12 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/30 backdrop-blur-sm animate-fade-in">
              <Users className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Faça Parte da Nossa História
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                Junte-se a milhares de famílias e profissionais que confiam na D Express para criar 
                conexões que transformam lares e carreiras
              </p>
              <Link to="/sobre">
                <Button size="lg" className="px-8 hover:scale-105 transition-transform">
                  Saiba Mais Sobre Nós
                </Button>
              </Link>
            </Card>
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
