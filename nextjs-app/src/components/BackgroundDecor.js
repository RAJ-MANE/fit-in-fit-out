export default function BackgroundDecor({ type }) {
  if (type === "leaf-left") {
    return (
      <div className="bg-decor leaf-left" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50,95 C50,95 15,65 15,40 C15,20 35,10 50,30 C65,10 85,20 85,40 C85,65 50,95 50,95 Z" />
          <path d="M50,95 L50,30" />
          <path d="M50,75 C40,70 30,65 25,58" />
          <path d="M50,60 C40,55 30,50 25,43" />
          <path d="M50,45 C40,40 35,35 30,30" />
          <path d="M50,75 C60,70 70,65 75,58" />
          <path d="M50,60 C60,55 70,50 75,43" />
          <path d="M50,45 C60,40 65,35 70,30" />
        </svg>
      </div>
    );
  }

  if (type === "leaf-right") {
    return (
      <div className="bg-decor leaf-right" aria-hidden="true">
        <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10,110 C30,90 40,70 50,40 C60,60 80,80 110,90" />
          <path d="M50,40 C45,25 35,15 25,10 C25,25 35,35 50,40 Z" />
          <path d="M50,40 C55,25 65,15 75,10 C75,25 65,35 50,40 Z" />
          <path d="M38,60 C28,50 18,45 10,40 C18,55 28,60 38,60 Z" />
          <path d="M62,60 C72,50 82,45 90,40 C82,55 72,60 62,60 Z" />
        </svg>
      </div>
    );
  }

  if (type === "wavy-lines") {
    return (
      <div className="bg-decor wavy-lines" aria-hidden="true">
        <svg viewBox="0 0 200 400" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeDasharray="4,4">
          <path d="M10,0 Q80,100 20,200 T150,400" />
          <path d="M40,0 Q110,100 50,200 T180,400" />
          <path d="M70,0 Q140,100 80,200 T210,400" />
        </svg>
      </div>
    );
  }

  return null;
}
