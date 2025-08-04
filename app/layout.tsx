import type { Metadata } from "next";
import "./globals.css";
import SatelliteBackground from "./components/SatelliteBackground";

export const metadata: Metadata = {
  title: "Rohit Khati | Earth Observation & AI Specialist",
  description: "I am a passionate Earth Observation and AI specialist with expertise in satellite imagery analysis, machine learning, and environmental monitoring. My work focuses on developing innovative solutions for climate research, land use monitoring, and disaster management using cutting-edge AI technologies.",
  keywords: [
    "Rohit Khati",
    "Earth Observation",
    "AI Specialist", 
    "Satellite Imagery Analysis",
    "Machine Learning",
    "Environmental Monitoring",
    "Climate Research",
    "Land Use Monitoring",
    "Disaster Management",
    "Remote Sensing",
    "Geospatial Analysis"
  ],
  authors: [{ name: "Rohit Khati" }],
  creator: "Rohit Khati",
  publisher: "Rohit Khati",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Open Graph meta tags for Facebook, LinkedIn, and other platforms
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rohit81.com.np',
    siteName: 'Rohit Khati Portfolio',
    title: 'Rohit Khati | Earth Observation & AI Specialist',
    description: 'I am a passionate Earth Observation and AI specialist with expertise in satellite imagery analysis, machine learning, and environmental monitoring. My work focuses on developing innovative solutions for climate research, land use monitoring, and disaster management using cutting-edge AI technologies.',
    images: [
      {
        url: 'https://rohit81.com.np/rohit.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rohit Khati - Earth Observation & AI Specialist',
        type: 'image/jpeg',
      },
      {
        url: 'https://rohit81.com.np/rohit.jpeg',
        width: 800,
        height: 600,
        alt: 'Rohit Khati Profile Picture',
        type: 'image/jpeg',
      }
    ],
  },
  // Twitter Card meta tags
  twitter: {
    card: 'summary_large_image',
    site: '@rohitkhati713',
    creator: '@rohitkhati713',
    title: 'Rohit Khati | Earth Observation & AI Specialist',
    description: 'I am a passionate Earth Observation and AI specialist with expertise in satellite imagery analysis, machine learning, and environmental monitoring.',
    images: {
      url: 'https://rohit81.com.np/rohit.jpeg',
      alt: 'Rohit Khati - Earth Observation & AI Specialist',
    },
  },
  // Additional meta information
  applicationName: 'Rohit Khati Portfolio',
  referrer: 'origin-when-cross-origin',
  category: 'Professional Portfolio',
  classification: 'Earth Observation & AI Specialist Portfolio',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#667eea" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://rohit81.com.np" />
        
        {/* Icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* Additional Open Graph tags for better sharing */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:updated_time" content={new Date().toISOString()} />
        
        {/* Twitter specific meta tags */}
        <meta name="twitter:domain" content="rohit81.com.np" />
        <meta name="twitter:url" content="https://rohit81.com.np" />
        
        {/* LinkedIn specific optimization */}
        <meta property="article:author" content="Rohit Khati" />
        <meta property="profile:first_name" content="Rohit" />
        <meta property="profile:last_name" content="Khati" />
        <meta property="profile:username" content="rohitkhati" />
        
        {/* Facebook specific meta tags */}
        <meta property="fb:admins" content="rohitkhati" />
        
        {/* Schema.org structured data for social media */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rohit Khati",
              "jobTitle": "Earth Observation & AI Specialist",
              "description": "I am a passionate Earth Observation and AI specialist with expertise in satellite imagery analysis, machine learning, and environmental monitoring.",
              "url": "https://rohit81.com.np",
              "image": "https://rohit81.com.np/rohit.jpeg",
              "sameAs": [
                "https://twitter.com/rohitkhati713",
                "https://linkedin.com/in/rhtkht",
                "https://github.com/ro-hit81"
              ],
              "knowsAbout": [
                "Earth Observation",
                "Artificial Intelligence",
                "Satellite Imagery Analysis", 
                "Machine Learning",
                "Environmental Monitoring",
                "Climate Research",
                "Remote Sensing"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Research & Development"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <SatelliteBackground />
        {children}
      </body>
    </html>
  );
}
