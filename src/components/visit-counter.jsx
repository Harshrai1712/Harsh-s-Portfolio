import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import { Eye } from "lucide-react";

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize visit counter
    const initializeCounter = () => {
      try {
        // Get existing visit count from localStorage
        const storedCount = localStorage.getItem('portfolioVisitCount');
        const storedDate = localStorage.getItem('portfolioLastVisit');
        const today = new Date().toDateString();

        let currentCount = 0;

        if (storedCount) {
          currentCount = parseInt(storedCount, 10);
        }

        // Check if this is a new visit (different day or first time)
        if (!storedDate || storedDate !== today) {
          currentCount += 1;
          localStorage.setItem('portfolioVisitCount', currentCount.toString());
          localStorage.setItem('portfolioLastVisit', today);
        }

        setVisitCount(currentCount);
        setIsLoading(false);
      } catch (error) {
        console.error('Error accessing localStorage:', error);
        // Fallback for environments where localStorage is not available
        setVisitCount(1);
        setIsLoading(false);
      }
    };

    // Small delay to ensure component is mounted
    const timer = setTimeout(initializeCounter, 100);
    return () => clearTimeout(timer);
  }, []);

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };

  if (isLoading) {
    return (
      <Badge variant="secondary" className="flex items-center gap-2 animate-pulse">
        <Eye className="h-3 w-3" />
        <span>Loading...</span>
      </Badge>
    );
  }

  return (
    <Badge 
      variant="secondary" 
      className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900 dark:hover:to-indigo-900 transition-all duration-300"
    >
      <Eye className="h-3 w-3" />
      <span className="font-medium">
        {formatCount(visitCount)} visit{visitCount !== 1 ? 's' : ''}
      </span>
    </Badge>
  );
};

export default VisitCounter;
