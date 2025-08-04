import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Wellcure Surgicals - Premium Medical Equipment & Surgical Instruments",
  description = "Leading exporter of high-quality medical and surgical equipment. Specializing in urological instruments, infusion therapy, anaesthesia systems, and blood management solutions worldwide.",
  canonicalUrl,
  ogImage = "/og-image.png",
  ogType = "website",
  keywords = "medical equipment, surgical instruments, urological instruments, infusion therapy, anaesthesia systems, blood management, medical supplies, healthcare equipment, surgical supplies, medical devices",
  noindex = false
}) => {
  const baseUrl = "https://wellcure-surgicals.com";
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Wellcure Surgicals" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional SEO tags */}
      <meta name="author" content="Wellcure Surgicals" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Structured data for organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Wellcure Surgicals",
          "url": baseUrl,
          "logo": `${baseUrl}/lovable-uploads/0b5d674d-912b-485f-8d72-b5340093fb12.png`,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jodhpur",
            "addressRegion": "Rajasthan",
            "addressCountry": "India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8619327540",
            "contactType": "customer service",
            "email": "wellcuresurgicals@gmail.com"
          },
          "sameAs": [
            "https://www.instagram.com/wellcure_surgicals",
            "https://www.facebook.com/share/16ADhDsZ3Z/",
            "https://www.linkedin.com/company/wellcure-surgicals/"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;