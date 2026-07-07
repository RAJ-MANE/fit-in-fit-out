import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://fitinfitout.com"),
  title: "Dt. Poonam Kalia | Best Clinical Dietitian in Thakur Village, Kandivali East, Mumbai",
  description:
    "Personalized, evidence-based nutrition plans for weight management, diabetes care, clinical nutrition, women's health, and pediatric care by Dt. Poonam Kalia, Clinical Dietitian at INHS Asvini Hospital. Book a consultation at Vasant Sagar, Thakur Village.",
  keywords: [
    "dietitian in thakur village",
    "clinical dietitian kandivali east",
    "poonam kalia nutritionist",
    "weight management mumbai",
    "best dietitian kandivali mumbai",
    "inhs asvini dietitian",
    "diabetes care dietitian",
    "female nutritionist mumbai",
    "nutritionist in kandivali east",
    "dietitian near thakur village",
    "dietitian near kandivali",
    "clinical nutritionist mumbai",
    "fit in fit out poonam kalia"
  ],
  authors: [{ name: "Dt. Poonam Kalia", url: "https://fitinfitout.com" }],
  creator: "Dt. Poonam Kalia",
  publisher: "Fit In Fit Out",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://fitinfitout.com/",
    title: "Dt. Poonam Kalia | Best Clinical Dietitian in Thakur Village, Kandivali East, Mumbai",
    description:
      "Personalized, evidence-based nutrition plans for weight management, diabetes care, clinical nutrition, women's health, and pediatric care by Dt. Poonam Kalia, Clinical Dietitian at INHS Asvini Hospital.",
    siteName: "Fit In Fit Out",
    images: [
      {
        url: "/hero_nutrition.png",
        width: 1200,
        height: 630,
        alt: "Dt. Poonam Kalia Clinical Nutritionist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dt. Poonam Kalia | Clinical Dietitian & Nutritionist Mumbai",
    description:
      "Evidence-based clinical nutrition and personalized diet plans for weight, diabetes, hormones, and sports in Thakur Village, Kandivali East, Mumbai.",
    images: ["/hero_nutrition.png"],
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.211756;72.872412",
    "ICBM": "19.211756, 72.872412",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dt. Poonam Kalia | Fit In Fit Out",
    "alternateName": "Fit In Fit Out",
    "image": "https://fitinfitout.com/logo.png",
    "priceRange": "$$",
    "telephone": "+919920659600",
    "email": "contact@fitinfitout.com",
    "url": "https://fitinfitout.com",
    "logo": "https://fitinfitout.com/logo.png",
    "description": "Personalized, evidence-based nutrition plans for weight management, diabetes care, clinical nutrition, oncology nutrition, women's health, and pediatric care by Dt. Poonam Kalia, Clinical Dietitian at INHS Asvini Hospital. Located in Thakur Village, Kandivali East, Mumbai.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Krishna B Wing, Vasant Sagar, Thakur Village",
      "addressLocality": "Kandivali East, Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400101",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.211756,
      "longitude": 72.872412,
    },
    "hasMap": "https://maps.google.com/?q=Krishna+Vasant+Sagar+Thakur+Village+Kandivali+East+Mumbai",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Wednesday", "Friday"],
        "opens": "18:00",
        "closes": "20:00",
      },
    ],
    "sameAs": [
      "https://www.instagram.com/fit_in_fitout_poonamkalia?igsh=c3h5c2xuNHIxMDhp",
      "https://m.facebook.com/fitinfitout14/",
      "https://m.youtube.com/channel/UCToA5VgFXyFQ0chvCjBBUzw",
      "https://www.linkedin.com/in/dt-poonam-kalia-4210b2112",
    ],
    "medicalSpecialty": [
      "DietarySupplementation",
      "Dietetics",
      "Endocrinology",
      "Pediatrics",
      "Oncology",
    ],
    "founder": {
      "@type": "Person",
      "name": "Dt. Poonam Kalia",
      "jobTitle": "Clinical Dietitian & Nutritionist",
      "alumniOf": "MSc in Food and Nutrition",
      "description": "Clinical Dietitian with extensive experience at INHS Asvini Hospital. Expert in Ayurveda nutrition, advanced onco nutrition, certified diabetes education, and geriatric care.",
      "sameAs": [
        "https://www.linkedin.com/in/dt-poonam-kalia-4210b2112"
      ]
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GrainOverlay />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
