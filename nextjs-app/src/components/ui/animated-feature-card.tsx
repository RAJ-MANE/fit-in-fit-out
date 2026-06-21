import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Define the props for the component
interface AnimatedFeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
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
    '--feature-color-light': 'hsl(35, 100%, 94%)',
    '--feature-color-dark': 'hsl(24, 95%, 96%)',
  },
  purple: {
    '--feature-color': 'hsl(262, 80%, 45%)',
    '--feature-color-light': 'hsl(262, 95%, 94%)',
    '--feature-color-dark': 'hsl(262, 90%, 97%)',
  },
  blue: {
    '--feature-color': 'hsl(211, 100%, 42%)',
    '--feature-color-light': 'hsl(211, 95%, 93%)',
    '--feature-color-dark': 'hsl(211, 90%, 96%)',
  },
};

const AnimatedFeatureCard = React.forwardRef<
  HTMLDivElement,
  AnimatedFeatureCardProps
>(({ className, index, tag, title, imageSrc, color, ...props }, ref) => {
  const cardStyle = colorVariants[color] as React.CSSProperties;

  return (
    <motion.div
      ref={ref}
      style={cardStyle}
      className={cn(
        "relative flex h-[300px] w-full max-w-sm flex-col justify-end overflow-hidden rounded-3xl border border-neutral-200/60 shadow-md transition-all duration-500 hover:shadow-xl hover:border-[var(--feature-color)]/40 group",
        className
      )}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { y: 0 },
        hover: { y: -8 },
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      {...props}
    >
      {/* Shiny shimmer sweep effect */}
      <div className="shimmer-effect" aria-hidden="true" />

      {/* Background Image filling the card */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Dark Overlay Gradient for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none transition-opacity duration-300 group-hover:from-black/70" />

      {/* Floating Glassmorphic Text Box (Centered and raised slightly above the bottom with mb-7) */}
      <div className="relative z-20 mx-4 mb-7 rounded-2xl bg-white/92 p-4 shadow-xl border border-neutral-100/80 backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:translate-y-[-4px] text-center">
        <div className="mb-2">
          <span
            className="rounded-full px-3 py-0.5 text-[0.68rem] font-extrabold tracking-widest uppercase border shadow-sm"
            style={{ 
              backgroundColor: 'var(--feature-color-dark)', 
              color: 'var(--feature-color)',
              borderColor: 'var(--feature-color-light)'
            }}
          >
            {tag}
          </span>
        </div>
        <p className="text-[0.88rem] font-bold leading-relaxed text-neutral-800 group-hover:text-black">
          {title}
        </p>
      </div>
    </motion.div>
  );
});
AnimatedFeatureCard.displayName = "AnimatedFeatureCard";

export { AnimatedFeatureCard };
