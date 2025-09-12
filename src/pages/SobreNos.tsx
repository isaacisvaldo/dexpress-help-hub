import { Navigation } from "@/components/ui/navigation";

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-primary">D Express</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conectando profissionais domésticas qualificadas com famílias em Angola há mais de 5 anos
            </p>
          </header>

          <section className="mb-16">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Nossa Missão</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A D Express nasceu com o objetivo de revolucionar o mercado de serviços domésticos em Angola, 
                criando uma ponte segura e confiável entre famílias que necessitam de assistência domiciliária 
                e profissionais qualificadas em busca de oportunidades de trabalho.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Acreditamos que cada lar merece cuidado especializado e que cada profissional merece 
                reconhecimento e valorização pelo seu trabalho.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Nossos Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Confiança</h3>
                <p className="text-muted-foreground text-sm">
                  Verificamos todas as profissionais e garantimos referências confiáveis
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Qualidade</h3>
                <p className="text-muted-foreground text-sm">
                  Selecionamos apenas profissionais experientes e qualificadas
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Transparência</h3>
                <p className="text-muted-foreground text-sm">
                  Processo claro e honesto em todas as nossas relações
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 border border-primary/20">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Nossa História</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fundada em 2019, a D Express surgiu da necessidade de profissionalizar o setor de 
                serviços domésticos em Angola. Começamos como uma pequena agência de colocação e 
                evoluímos para uma plataforma digital completa.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hoje, somos a principal referência em Angola para contratação de serviços domésticos, 
                com mais de 2.500 profissionais cadastradas e milhares de famílias atendidas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa experiência nos permite entender as necessidades específicas do mercado angolano 
                e oferecer soluções personalizadas para cada cliente.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Nossos Números</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">+2.500</div>
                <p className="text-muted-foreground text-sm">Profissionais Cadastradas</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground text-sm">Taxa de Satisfação</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground text-sm">Anos de Experiência</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground text-sm">Referências Verificadas</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Entre em Contacto</h2>
              <p className="text-muted-foreground mb-6">
                Tem alguma dúvida ou quer saber mais sobre nossos serviços?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-muted-foreground">
                <div>📞 +244 937 760 239</div>
                <div>📞 +244 937 759 809</div>
                <div>✉️ suporte@dexpress.com.ao</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SobreNos;