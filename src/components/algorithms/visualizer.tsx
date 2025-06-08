"use client";
import React, { useState, useEffect } from 'react';
import Button from '../ui/Button'; 
import Dropdown from '../ui/Dropdown';

const Visualizer: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

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
        <div>
            <h1>Visualizer Component</h1>
            <Button 
                onClick={randomizeItemsIndex}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                Randomize Array
            </Button>
            <Dropdown 
                onSelect={handleCountChange} 
                options={[5, 10, 15, 20]} 
                className="mt-4"
            />

            <div className="flex items-end gap-1 p-5 bg-gray-50 rounded-lg" style={{ height: '400px' }}>
                {items.map((value, index) => (
                    <div
                        key={index}
                        className="w-12 bg-blue-500 flex items-end justify-center text-white font-bold rounded-t-md transition-all duration-300 hover:bg-blue-600 border-2 border-blue-700"
                        style={{ height: `${(value / maxValue) * 300}px` }}
                    >
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Visualizer;