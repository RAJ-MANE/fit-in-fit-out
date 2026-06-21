export default function WaveDivider({ flip = false, color = "#fdfbf7", variant = 1 }) {
  const transform = flip ? "scaleY(-1) scaleX(-1)" : "none";
  
  // Wave variant 1: Gentle organic curve
  const wave1 = (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="wave-svg" style={{ transform }}>
      <path 
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,88.43,26.85,150.78,43.83,218.17,75.56,321.39,56.44Z" 
        fill={color}
      />
    </svg>
  );

  // Wave variant 2: Sleek double wave
  const wave2 = (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="wave-svg" style={{ transform }}>
      <path 
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86C218.17,75.56,150.78,43.83,88.43,26.85,57.05,18.3,26.9,8.75,0,0V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
        fill={color}
      />
    </svg>
  );

  // Wave variant 3: High-impact deep curves
  const wave3 = (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="wave-svg" style={{ transform }}>
      <path 
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1082.09,11.23,1200,50.58V120H0Z" 
        fill={color}
      />
    </svg>
  );

  return (
    <div className="wave-container" aria-hidden="true">
      {variant === 1 && wave1}
      {variant === 2 && wave2}
      {variant === 3 && wave3}
    </div>
  );
}
