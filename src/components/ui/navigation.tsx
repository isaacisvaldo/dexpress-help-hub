import { Link } from "react-router-dom";
import { Button } from "./button";

export const Navigation = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-bold text-foreground">Express</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/faq" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
            <Link 
              to="/central-ajuda" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Central de Ajuda
            </Link>
            <Link 
              to="/termos" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Uso
            </Link>
            <Link 
              to="/privacidade" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacidade
            </Link>
            <Button variant="outline">Login</Button>
            <Button>Cadastrar</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};