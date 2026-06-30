import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Flame, Activity, Dna, ShieldAlert, Heart, Droplet, Zap, TrendingUp, Baby } from "lucide-react";

// Define the props for the component
interface AnimatedFeatureCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** The numerical index to display, e.g., "001" */
  index: string;
  /** The tag or category label */
  tag: string;
  /** The main title or description */
  title: React.ReactNode;
  /** The URL for the central image */
  imageSrc: string;
  /** The color variant which determines the gradient and tag color */
  color: "orange" | "purple" | "blue";
}

// Define HSL color values for each variant to work with shadcn's theming
const colorVariants = {
  orange: {
    '--feature-color': 'hsl(24, 95%, 45%)',
    '--feature-color-light': 'hsl(35, 100%, 93%)',
    '--feature-color-dark': 'hsl(35, 100%, 98%)',
    '--feature-glow': 'rgba(249, 115, 22, 0.15)',
  },
  purple: {
    '--feature-color': 'hsl(262, 80%, 48%)',
    '--feature-color-light': 'hsl(262, 95%, 93%)',
    '--feature-color-dark': 'hsl(262, 90%, 98%)',
    '--feature-glow': 'rgba(168, 85, 247, 0.15)',
  },
  blue: {
    '--feature-color': 'hsl(211, 100%, 42%)',
    '--feature-color-light': 'hsl(211, 95%, 92%)',
    '--feature-color-dark': 'hsl(211, 90%, 98%)',
    '--feature-glow': 'rgba(59, 130, 246, 0.15)',
  },
};

const getIcon = (tag: string, className = "w-5 h-5") => {
  switch (tag.toUpperCase()) {
    case "METABOLISM":
      return <Flame className={className} />;
    case "CLINICAL CARE":
      return <Activity className={className} />;
    case "HORMONAL HEALTH":
      return <Dna className={className} />;
    case "ONCOLOGY":
      return <ShieldAlert className={className} />;
    case "MATERNAL CARE":
      return <Heart className={className} />;
    case "CLINICAL FEEDING":
      return <Droplet className={className} />;
    case "ATHLETIC":
      return <Zap className={className} />;
    case "ADOLESCENT":
      return <TrendingUp className={className} />;
    case "PEDIATRIC":
      return <Baby className={className} />;
    default:
      return <Activity className={className} />;
  }
};

const AnimatedFeatureCard = React.forwardRef<
  HTMLAnchorElement,
  AnimatedFeatureCardProps
>(({ className, index, tag, title, imageSrc, color, ...props }, ref) => {
  const cardStyle = colorVariants[color] as React.CSSProperties;
  const whatsappUrl = `https://wa.me/919920659600?text=Hello%20Dt.%20Poonam%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(tag.trim())}%20program.`;

  return (
    <motion.a
      ref={ref}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...cardStyle,
        borderTopColor: 'var(--feature-color)',
      }}
      className={cn(
        "relative flex h-full min-h-[170px] md:min-h-[210px] w-full max-w-sm flex-col items-center justify-between overflow-hidden rounded-2xl border-t-4 border-x border-b border-x-neutral-200/50 border-b-neutral-200/50 bg-gradient-to-b from-white to-[var(--feature-color-dark)] p-4 md:p-6 shadow-sm transition-all duration-300 hover:shadow-[0_10px_25px_-5px_var(--feature-glow)] group text-center cursor-pointer no-underline",
        className
      )}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { y: 0 },
        hover: { y: -6 },
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      {...props}
    >
      {/* Background Giant Watermark Icon - Centered */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-0 opacity-[0.08] text-[var(--feature-color)] pointer-events-none transition-all duration-500"
        style={{ x: "-50%", y: "-50%" }}
        variants={{
          initial: { scale: 1.4, rotate: 12 },
          hover: { scale: 1.6, rotate: 25, opacity: 0.15 },
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {getIcon(tag, "w-16 h-16 md:w-20 md:h-20")}
      </motion.div>

      {/* Subtle hover background glow */}
      <div
        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 10%, var(--feature-color-light) 0%, transparent 70%)`
        }}
      />

      {/* Content block: Icon, tag, and description text */}
      <div className="relative z-10 flex flex-col items-center gap-2.5 md:gap-3.5 w-full">
        {/* Circle Icon */}
        <div 
          className="flex items-center justify-center w-8 h-8 md:w-9 h-9 rounded-full transition-transform duration-300 group-hover:scale-105 shadow-sm"
          style={{ 
            backgroundColor: 'var(--feature-color-dark)', 
            color: 'var(--feature-color)',
            borderColor: 'var(--feature-color-light)',
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >
          {getIcon(tag, "w-4 h-4 md:w-5 md:h-5")}
        </div>

        {/* Category Tag */}
        <h4 
          className="text-[0.65rem] md:text-[0.75rem] font-extrabold tracking-wider md:tracking-widest uppercase"
          style={{ color: 'var(--feature-color)' }}
        >
          {tag}
        </h4>

        {/* Description text */}
        <p className="text-[0.78rem] md:text-[0.88rem] font-semibold leading-relaxed text-neutral-600 group-hover:text-neutral-800 transition-colors duration-300">
          {title}
        </p>
      </div>

      {/* Bottom row: Explore link CTA */}
      <div className="relative z-10 flex items-center justify-center gap-1 text-[0.65rem] md:text-[0.7rem] font-bold uppercase tracking-wider transition-colors duration-300 text-neutral-400 group-hover:text-[var(--feature-color)] mt-4 md:mt-5 pt-0.5 md:pt-1">
        <span>Explore Program</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </div>
    </motion.a>
  );
});
AnimatedFeatureCard.displayName = "AnimatedFeatureCard";

export { AnimatedFeatureCard };
