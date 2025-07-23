
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Page Not Found | Wellcure Surgicals"
        description="The page you're looking for doesn't exist. Browse our medical equipment and surgical instruments catalog."
        noindex={true}
      />
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-100 py-16">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-6">Page Not Found</p>
          <p className="text-gray-600 mb-8">
            The page you were looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              onClick={() => navigate("/")} 
              className="bg-blue-600 hover:bg-blue-700"
            >
              Return Home
            </Button>
            <Button 
              onClick={() => navigate(-1)} 
              variant="outline"
            >
              Go Back
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
