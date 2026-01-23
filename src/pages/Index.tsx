import { Mail, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import logoFull from "@/assets/logo-full.jpg";
import logoIcon from "@/assets/logo-icon.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 relative min-h-[70vh] lg:min-h-[75vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Content Overlay - Centered */}
        <div className="relative h-full flex flex-col items-center justify-start pt-8 lg:pt-12 px-6">
          {/* Logo - Centered at top */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src={logoFull} 
              alt="Pluk - Praktijk voor Infant Mental Health" 
              className="w-48 lg:w-64 xl:w-72 h-auto"
            />
          </div>

          {/* Main Text - Centered below logo */}
          <div 
            className="mt-8 lg:mt-12 max-w-lg lg:max-w-xl animate-fade-in" 
            style={{ animationDelay: '0.5s' }}
          >
            <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg text-center">
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
        </div>
      </main>

      {/* Bottom Bar */}
      <footer className="bg-primary py-6 lg:py-8 relative">
        <div className="w-full px-4 lg:px-6">
          {/* Main row: Address left, Lines+Icon center, Phone+Email right - all same level */}
          <div className="flex items-center justify-between text-primary-foreground mb-4">
            {/* Left: Address */}
            <div className="flex items-center gap-2 text-sm lg:text-base font-body">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Havenstraat 137, 1211 KK Hilversum</span>
            </div>

            {/* Center: Icon with horizontal lines */}
            <div className="flex items-center flex-1 justify-center mx-4">
              {/* Left horizontal line */}
              <div className="flex-1 h-px bg-primary-foreground/60 max-w-24 lg:max-w-32" />
              
              {/* Centered Icon */}
              <div className="mx-4 lg:mx-6">
                <img 
                  src={logoIcon} 
                  alt="Pluk bloem" 
                  className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                />
              </div>
              
              {/* Right horizontal line */}
              <div className="flex-1 h-px bg-primary-foreground/60 max-w-24 lg:max-w-32" />
            </div>

            {/* Right: Phone + Email */}
            <div className="flex items-center gap-4 lg:gap-6 text-sm lg:text-base font-body">
              <a 
                href="tel:035-2340480" 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>035-2340480</span>
              </a>
              
              <a 
                href="mailto:info@praktijkpluk.nl" 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@praktijkpluk.nl</span>
              </a>
            </div>
          </div>

          {/* Bottom row: Legal links centered */}
          <div className="flex items-center justify-center gap-4 text-primary-foreground text-xs lg:text-sm font-body">
            <a href="#" className="hover:opacity-80 transition-opacity">Algemene Voorwaarden</a>
            <span>© Pluk 2026</span>
            <a href="#" className="hover:opacity-80 transition-opacity">Privacy Verklaring</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
