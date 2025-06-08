export interface AlgorithmInfo {
  id: string;
  name: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  category: 'sorting' | 'searching' | 'graph' | 'tree';
}

export interface AlgorithmHook {
  comparing: number[];
  sorted: number;
  sorting: boolean;
  sortingSpeed: number;
  startSort: () => void;
  stopSort: () => void;
  setSortingSpeed: (speed: number) => void;
  resetVisualization: () => void;
}
