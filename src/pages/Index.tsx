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

          {/* Spacer */}
          <div />
        </div>
      </main>

      {/* Bottom Bar */}
      <footer className="bg-primary py-6 lg:py-8">
        <div className="container mx-auto px-6">
          {/* Contact Info - Centered with white divider lines */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 text-primary-foreground">
            {/* Logo Icon */}
            <div className="flex items-center">
              <img 
                src={logoIcon} 
                alt="Pluk bloem" 
                className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
              />
            </div>
            
            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-primary-foreground/60 mx-6" />
            
            {/* Email */}
            <a 
              href="mailto:info@praktijkpluk.nl" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="font-body text-sm lg:text-base">info@praktijkpluk.nl</span>
            </a>
            
            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-primary-foreground/60 mx-6" />
            
            {/* Phone */}
            <a 
              href="tel:035-2340480" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="font-body text-sm lg:text-base">035-2340480</span>
            </a>
            
            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-primary-foreground/60 mx-6" />
            
            {/* Address */}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="font-body text-sm lg:text-base">Havenstraat 137, 1211 KK Hilversum</span>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-primary-foreground/80 text-xs lg:text-sm font-body">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Algemene Voorwaarden
              </a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Verklaring
              </a>
            </div>
            <span className="hidden md:inline">|</span>
            <p>© Pluk 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
