import { Mail, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import logoFull from "@/assets/logo-full.jpg";
import logoIcon from "@/assets/logo-icon.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 xl:w-96 bg-primary flex-shrink-0 flex flex-col justify-between p-6 lg:p-8 lg:min-h-screen order-2 lg:order-1">
        <div className="flex flex-col gap-6">
          {/* Logo Icon */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src={logoIcon} 
              alt="Pluk bloem" 
              className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
            />
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4 text-primary-foreground">
            <a 
              href="mailto:info@praktijkpluk.nl" 
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="font-body text-sm lg:text-base">info@praktijkpluk.nl</span>
            </a>
            
            <a 
              href="tel:035-2340480" 
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="font-body text-sm lg:text-base">035-2340480</span>
            </a>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div className="font-body text-sm lg:text-base">
                <p>Havenstraat 137</p>
                <p>1211 KK Hilversum</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 lg:mt-0 text-primary-foreground/80 text-xs lg:text-sm font-body space-y-2">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Algemene Voorwaarden
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Verklaring
            </a>
          </div>
          <p>© Pluk 2026</p>
        </div>
      </aside>

      {/* Hero Section */}
      <main className="flex-1 relative order-1 lg:order-2 min-h-[60vh] lg:min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Subtle gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20" />
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col justify-between p-6 lg:p-12">
          {/* Logo */}
          <div className="flex justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src={logoFull} 
              alt="Pluk - Praktijk voor Infant Mental Health" 
              className="w-40 lg:w-56 xl:w-64 h-auto"
            />
          </div>

          {/* Main Text */}
          <div 
            className="max-w-lg lg:max-w-xl animate-fade-in-left" 
            style={{ animationDelay: '0.5s' }}
          >
            <div className="bg-background/85 backdrop-blur-sm rounded-lg p-6 lg:p-8 shadow-lg">
              <p className="font-display text-lg lg:text-xl xl:text-2xl text-foreground leading-relaxed italic">
                IMH-Praktijk Pluk, voor jonge kinderen en hun ouders, opent haar deuren in april 2026. 
                Heb je voor die tijd al vragen? Neem gerust contact met ons op, we denken graag met je mee.
              </p>
              
              <a 
                href="mailto:info@praktijkpluk.nl"
                className="inline-block mt-6 font-display text-lg lg:text-xl text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
              >
                info@praktijkpluk.nl
              </a>
            </div>
          </div>

          {/* Tagline */}
          <div 
            className="hidden lg:block text-primary-foreground/90 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <p className="font-display text-sm tracking-wide">
              Praktijk voor Infant Mental Health
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
