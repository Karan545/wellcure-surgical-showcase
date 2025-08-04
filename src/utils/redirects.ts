// Handle URL redirects to prevent duplicate content issues
export const setupRedirects = () => {
  // Redirect /blood-management to /blood-management-solutions
  if (window.location.pathname === '/blood-management') {
    window.history.replaceState(null, '', '/blood-management-solutions');
  }
  
  // Remove trailing slashes
  if (window.location.pathname.endsWith('/') && window.location.pathname.length > 1) {
    const newPath = window.location.pathname.slice(0, -1);
    window.history.replaceState(null, '', newPath + window.location.search + window.location.hash);
  }
  
  // Ensure lowercase URLs
  if (window.location.pathname !== window.location.pathname.toLowerCase()) {
    window.history.replaceState(null, '', window.location.pathname.toLowerCase() + window.location.search + window.location.hash);
  }
};