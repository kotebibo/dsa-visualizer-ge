"use client";
import React, { useState, useEffect } from 'react';
import Button from '../ui/Button'; 
import Dropdown from '../ui/Dropdown';
import { useBubbleSort } from '../../hooks/useBubbleSort';

const Visualizer: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // Use the custom bubble sort hook
    const {
        comparing,
        sorted,
        sorting,
        sortingSpeed,
        startSort,
        stopSort,
        setSortingSpeed,
        resetVisualization
    } = useBubbleSort(items, setItems);


    // Generate numbers whenever count changes
    useEffect(() => {
        if (count > 0) {
            const newItems = Array.from({ length: count }, (_, i) => i + 1);
            setItems(newItems);
        }
    }, [count]); // This runs when count changes

    const randomizeItemsIndex = () => {
        const shuffled = [...items].sort(() => Math.random() - 0.5);
        setItems(shuffled);
    }

    const handleCountChange = (newCount: number) => {
        setCount(newCount);
    };


    const maxValue = Math.max(...items);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Algorithm Visualizer</h1>
            
            {/* Controls Section */}
            <div className="flex flex-wrap gap-4 mb-6">
                <Button 
                    onClick={randomizeItemsIndex}
                    disabled={sorting}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Randomize Array
                </Button>
                
                <Button 
                    onClick={startSort}
                    disabled={sorting}
                    variant="success"
                >
                    {sorting ? "Sorting..." : "Start Bubble Sort"}
                </Button>
                
                {sorting && (
                    <Button 
                        onClick={stopSort}
                        variant="secondary"
                    >
                        Stop Sort
                    </Button>
                )}
                
                <Dropdown 
                    onSelect={handleCountChange} 
                    options={[5, 10, 15, 20]} 
                    className="mt-0"
                />
            </div>

            {/* Speed Control */}
            <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                    Sorting Speed: {sortingSpeed}ms delay
                </label>
                <input
                    type="range"
                    min="100"
                    max="2000"
                    step="100"
                    value={sortingSpeed}
                    onChange={(e) => setSortingSpeed(Number(e.target.value))}
                    className="w-64"
                    disabled={sorting}
                />
            </div>

            {/* Visualization Container */}
            <div className="flex items-end gap-1 p-5 bg-gray-50 rounded-lg" style={{ height: '400px' }}>
                {items.map((value, index) => {
                    // Determine bar color based on state
                    let colorClass = "bg-blue-500 border-blue-700"; // Default: unsorted
                    
                    if (comparing.includes(index)) {
                        colorClass = "bg-red-500 border-red-700"; // Comparing
                    } else if (index >= items.length - sorted) {
                        colorClass = "bg-green-500 border-green-700"; // Sorted
                    }
                    
                    return (
                        <div
                            key={index}
                            className={`w-12 flex items-end justify-center text-white font-bold rounded-t-md transition-all duration-300 hover:opacity-80 border-2 ${colorClass}`}
                            style={{ height: `${(value / maxValue) * 300}px` }}
                        >
                            {value}
                        </div>
                    );
                })}
            </div>

            {/* Legend */}
            <div className="mt-4 flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span>Comparing</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span>Sorted</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span>Unsorted</span>
                </div>
            </div>

            {/* Algorithm Info */}
            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Bubble Sort Algorithm</h3>
                <p className="text-sm text-gray-700 mb-2">
                    <strong>Time Complexity:</strong> O(n²) | <strong>Space Complexity:</strong> O(1)
                </p>
                <p className="text-sm text-gray-600">
                    Bubble sort repeatedly compares adjacent elements and swaps them if they're in the wrong order.
                    The largest elements "bubble" to the end of the array in each pass.
                </p>
            </div>
        </div>
    );
};

export default Visualizer;