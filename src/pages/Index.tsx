import { Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import logoFull from "@/assets/Pluk wit logo 1.svg";
import logoIcon from "@/assets/Bloem beige 1.svg";

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
            className="mt-8 lg:mt-12 w-[70%] mx-auto animate-fade-in" 
            style={{ animationDelay: '0.5s' }}
          >
            <div className="rounded-2xl p-6 lg:p-8 text-center">
              <p className="font-body text-sm lg:text-base text-white leading-relaxed font-light tracking-[0.03em]">
                IMH-Praktijk Pluk, voor jonge kinderen en hun ouders, opent haar deuren in april 2026. 
                Heb je voor die tijd al vragen? Neem gerust contact met ons op, we denken graag met je mee.
              </p>
              
              <a 
                href="mailto:info@praktijkpluk.nl"
                className="inline-block mt-6 font-body text-sm lg:text-base text-white/90 hover:text-white transition-colors font-light italic tracking-[0.03em]"
              >
                info@praktijkpluk.nl
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Bar */}
      <footer className="bg-primary relative">
        <div className="w-full px-4 lg:px-6 min-h-[160px] lg:min-h-[180px] flex flex-col">
          {/* Main row: Address left, Lines+Icon center, Phone+Email right - all same level */}
          <div className="flex-1 flex items-center pt-[36px] lg:pt-[44px]">
            <div className="grid w-full grid-cols-3 items-center text-primary-foreground gap-4">
            {/* Left: Address */}
            <div className="text-xs lg:text-sm font-body leading-tight justify-self-start flex flex-col justify-center h-full">
              <span>
                Havenstraat 137
                <br />
                1211 KK Hilversum
              </span>
            </div>

            {/* Center: Icon with horizontal lines */}
            <div className="flex items-center justify-center w-full justify-self-stretch">
              {/* Left horizontal line */}
              <div className="flex-1 h-px bg-primary-foreground/60 max-w-48 lg:max-w-64" />
              
              {/* Centered Icon */}
              <div className="mx-4 lg:mx-6">
                <img 
                  src={logoIcon} 
                  alt="Pluk bloem" 
                  className="w-14 h-14 lg:w-16 lg:h-16 object-contain"
                />
              </div>
              
              {/* Right horizontal line */}
              <div className="flex-1 h-px bg-primary-foreground/60 max-w-48 lg:max-w-64" />
            </div>

            {/* Right: Phone + Email */}
            <div className="flex flex-col items-start gap-1 lg:gap-2 text-xs lg:text-sm font-body justify-self-end justify-center h-full">
              <a 
                href="tel:035-2340480" 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>035-2340480</span>
              </a>
              
              <a 
                href="mailto:info@praktijkpluk.nl" 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity italic"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="italic">info@praktijkpluk.nl</span>
              </a>
            </div>
          </div>
          </div>
          {/* Bottom row: Legal links centered */}
          <div className="pb-4 lg:pb-6">
            <div className="flex items-center justify-center gap-4 text-primary-foreground text-xs lg:text-sm font-body">
              <a href="#" className="hover:opacity-80 transition-opacity">Algemene Voorwaarden</a>
              <span>© Pluk 2026</span>
              <a href="#" className="hover:opacity-80 transition-opacity">Privacy Verklaring</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
