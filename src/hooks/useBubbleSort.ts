import { useState, useEffect, useRef } from 'react';

export interface BubbleSortState {
  comparing: number[];
  sorted: number;
  sorting: boolean;
  sortingSpeed: number;
}

export interface BubbleSortActions {
  startSort: () => Promise<void>;
  stopSort: () => void;
  setSortingSpeed: (speed: number) => void;
  resetVisualization: () => void;
}

export const useBubbleSort = (
  items: number[], 
  setItems: (items: number[]) => void
): BubbleSortState & BubbleSortActions => {
  // State for tracking the sorting process
  const [comparing, setComparing] = useState<number[]>([-1, -1]);
  const [sorted, setSorted] = useState<number>(0);
  const [sorting, setSorting] = useState<boolean>(false);
  const [sortingSpeed, setSortingSpeed] = useState<number>(500);
  
  // Use ref to track sorting state for immediate access
  const sortingRef = useRef<boolean>(false);

  // Reset visualization states when items array changes
  useEffect(() => {
    resetVisualization();
  }, [items]);

  // Function to add delay for visualization
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // Reset all visualization states
  const resetVisualization = () => {
    setComparing([-1, -1]);
    setSorted(0);
  };
  // Main bubble sort algorithm
  const startSort = async (): Promise<void> => {
    if (sortingRef.current) return; // Prevent multiple sorts at once
    
    setSorting(true);
    sortingRef.current = true;
    resetVisualization();
    
    const array = [...items]; // Create a copy of the items array
    const n = array.length;

    try {
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          // Check if sorting was stopped
          if (!sortingRef.current) return;
          
          // Highlight the indices being compared
          setComparing([j, j + 1]);
          await delay(sortingSpeed);

          if (array[j] > array[j + 1]) {
            // Swap elements
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            // Update the visual array
            setItems([...array]);
            
            // Small delay after swap for better visualization
            await delay(sortingSpeed / 2);
          }
        }
        // Mark the last element as sorted
        setSorted(i + 1);
      }
    } catch (error) {
      console.error('Sorting error:', error);
    } finally {
      // Clean up visualization state
      setComparing([-1, -1]);
      setSorting(false);
      sortingRef.current = false;
    }
  };

  // Function to stop sorting
  const stopSort = () => {
    sortingRef.current = false;
    setSorting(false);
    setComparing([-1, -1]);
  };

  return {
    // State
    comparing,
    sorted,
    sorting,
    sortingSpeed,
    
    // Actions
    startSort,
    stopSort,
    setSortingSpeed,
    resetVisualization
  };
};
