import React from 'react';

interface Product {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  features?: string[];
  specifications?: {
    headers: string[];
    rows: string[][];
  };
  availableSizes?: string | string[];
  sterilization?: string;
  usage?: string;
}

interface SEOProductStructureProps {
  products: Product[];
  category: string;
  categoryDescription: string;
}

const SEOProductStructure: React.FC<SEOProductStructureProps> = ({
  products,
  category,
  categoryDescription
}) => {
  // Generate JSON-LD structured data for products
  const generateProductSchema = (product: Product) => {
    const schema = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.title,
      "description": product.description,
      "image": `https://wellcuresurgicals.com${product.image}`,
      "brand": {
        "@type": "Brand",
        "name": "Wellcure Surgicals"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Wellcure Surgicals",
        "url": "https://wellcuresurgicals.com"
      },
      "category": category,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "USD",
        "seller": {
          "@type": "Organization",
          "name": "Wellcure Surgicals"
        }
      }
    };

    // Add additional product properties if available
    if (product.features && product.features.length > 0) {
      schema["additionalProperty"] = product.features.map(feature => ({
        "@type": "PropertyValue",
        "name": "Feature",
        "value": feature
      }));
    }

    return schema;
  };

  // Generate category page schema
  const generateCategorySchema = () => {
    return {
      "@context": "https://schema.org/",
      "@type": "CollectionPage",
      "name": category,
      "description": categoryDescription,
      "url": `https://wellcuresurgicals.com/${category.toLowerCase().replace(/\s+/g, '-')}`,
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": products.length,
        "itemListElement": products.map((product, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Product",
            "name": product.title,
            "description": product.description,
            "image": `https://wellcuresurgicals.com${product.image}`
          }
        }))
      }
    };
  };

  return (
    <>
      {/* JSON-LD Schema for category page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCategorySchema(), null, 2)
        }}
      />

      {/* JSON-LD Schema for each product */}
      {products.map((product, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateProductSchema(product), null, 2)
          }}
        />
      ))}

      {/* Hidden HTML content for SEO crawling */}
      <div style={{ display: 'none' }} className="seo-product-details">
        <h2>Product Details for {category}</h2>
        <p>{categoryDescription}</p>
        
        {products.map((product, index) => (
          <article key={`seo-${index}`} className="seo-product-item">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img src={product.image} alt={product.imageAlt || product.title} />
            
            {product.features && (
              <div className="product-features">
                <h4>Features:</h4>
                <ul>
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.specifications && (
              <div className="product-specifications">
                <h4>Specifications:</h4>
                <table>
                  <thead>
                    <tr>
                      {product.specifications.headers.map((header, headerIndex) => (
                        <th key={headerIndex}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.specifications.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {product.availableSizes && (
              <div className="product-sizes">
                <h4>Available Sizes:</h4>
                <p>{Array.isArray(product.availableSizes) ? product.availableSizes.join(', ') : product.availableSizes}</p>
              </div>
            )}

            {product.sterilization && (
              <div className="product-sterilization">
                <h4>Sterilization:</h4>
                <p>{product.sterilization}</p>
              </div>
            )}

            {product.usage && (
              <div className="product-usage">
                <h4>Usage:</h4>
                <p>{product.usage}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  );
};

export default SEOProductStructure;