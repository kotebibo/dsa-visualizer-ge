import { useState, useRef } from 'react';

export const useSelectionSort = (items: number[], setItems: (items: number[]) => void) => {
  const [comparing, setComparing] = useState<number[]>([-1, -1]); // [current, minimum]
  const [sorted, setSorted] = useState<number>(0); // Number of sorted elements from the beginning
  const [sorting, setSorting] = useState<boolean>(false);
  const [sortingSpeed, setSortingSpeed] = useState<number>(500);
  const sortingRef = useRef<boolean>(false);

  // Function to add delay for visualization
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const startSort = async () => {
    if (sorting) return;
    
    setSorting(true);
    sortingRef.current = true;
    const array = [...items];
    const n = array.length;

    try {
      for (let i = 0; i < n - 1; i++) {
        if (!sortingRef.current) break;

        let minIndex = i;
        
        // Find the minimum element in the remaining unsorted array
        for (let j = i + 1; j < n; j++) {
          if (!sortingRef.current) break;

          // Highlight current element and current minimum
          setComparing([j, minIndex]);
          await delay(sortingSpeed);

          if (array[j] < array[minIndex]) {
            minIndex = j;
          }
        }

        // Swap the found minimum element with the first element
        if (minIndex !== i && sortingRef.current) {
          [array[i], array[minIndex]] = [array[minIndex], array[i]];
          setItems([...array]);
          await delay(sortingSpeed);
        }

        // Mark this position as sorted
        setSorted(i + 1);
      }

      if (sortingRef.current) {
        setSorted(n); // All elements are sorted
      }
    } catch (error) {
      console.error('Sorting interrupted:', error);
    } finally {
      setComparing([-1, -1]);
      setSorting(false);
      sortingRef.current = false;
    }
  };

  const stopSort = () => {
    sortingRef.current = false;
    setSorting(false);
    setComparing([-1, -1]);
  };

  const resetVisualization = () => {
    setComparing([-1, -1]);
    setSorted(0);
    setSorting(false);
    sortingRef.current = false;
  };

  return {
    comparing,
    sorted,
    sorting,
    sortingSpeed,
    startSort,
    stopSort,
    setSortingSpeed,
    resetVisualization
  };
};
