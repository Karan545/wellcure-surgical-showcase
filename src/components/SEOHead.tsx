import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEOHead = ({ 
  title = "Wellcure Surgicals | Premium Surgical Equipment",
  description = "Wellcure Surgicals – Trusted exporter of surgical, medical & hospital equipment from India. Quality healthcare products for global professionals.",
  keywords = "surgical equipment, medical instruments, urological instruments, gastroenterology equipment, infusion therapy, blood management, anaesthesia systems, wound drainage",
  canonicalUrl,
  ogImage = "https://wellcuresurgicals.com/og-image.png",
  noindex = false
}: SEOHeadProps) => {
  // Ensure canonical URL is clean and consistent
  let currentPath = window.location.pathname;
  
  // Remove trailing slash except for root
  if (currentPath.length > 1 && currentPath.endsWith('/')) {
    currentPath = currentPath.slice(0, -1);
  }
  
  const currentUrl = canonicalUrl || `https://wellcuresurgicals.com${currentPath}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Wellcure Surgicals" />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;