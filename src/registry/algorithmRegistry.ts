import { AlgorithmInfo } from '../types/algorithms';
import { useBubbleSort } from '../hooks/useBubbleSort';
import { useSelectionSort } from '../hooks/useSelectionSort';

export const ALGORITHMS: Record<string, AlgorithmInfo> = {
  bubbleSort: {
    id: 'bubbleSort',
    name: 'Bubble Sort',
    description: 'Repeatedly compares adjacent elements and swaps them if they\'re in the wrong order. The largest elements "bubble" to the end of the array in each pass.',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    category: 'sorting'
  },
  selectionSort: {
    id: 'selectionSort',
    name: 'Selection Sort',
    description: 'Finds the minimum element from the unsorted portion and places it at the beginning. Builds the sorted array one element at a time.',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    category: 'sorting'
  }
};

// Hook registry - maps algorithm IDs to their hooks
export const ALGORITHM_HOOKS: Record<string, (items: number[], setItems: (items: number[]) => void) => any> = {
  bubbleSort: useBubbleSort,
  selectionSort: useSelectionSort,
};

// Utility functions
export const getAlgorithmsList = (): AlgorithmInfo[] => {
  return Object.values(ALGORITHMS);
};

export const getSortingAlgorithms = (): AlgorithmInfo[] => {
  return getAlgorithmsList().filter(algo => algo.category === 'sorting');
};

export const getAlgorithmById = (id: string): AlgorithmInfo | undefined => {
  return ALGORITHMS[id];
};
