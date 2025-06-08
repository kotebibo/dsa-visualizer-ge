# DSA Visualizer 🚀

An interactive **Data Structures & Algorithms Visualizer** built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This application helps students and developers understand sorting algorithms through beautiful, real-time visualizations.

## ✨ Features

- **Interactive Bubble Sort Visualization** with step-by-step animation
- **Customizable Array Sizes** (5, 10, 15, 20 elements)
- **Speed Control** - Adjust sorting speed from 100ms to 2000ms
- **Real-time Visual Feedback** with color-coded states:
  - 🔴 **Red**: Elements currently being compared
  - 🟢 **Green**: Sorted elements
  - 🔵 **Blue**: Unsorted elements
- **Array Randomization** - Shuffle elements for different test cases
- **Educational Information** - Algorithm complexity and explanation
- **Responsive Design** - Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: React Hooks (useState, useEffect, custom hooks)
- **Architecture**: Component-based with custom hook patterns

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd dsa-visualizer-ge
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 Usage

1. **Select Array Size**: Use the dropdown to choose how many elements to sort (5-20)
2. **Randomize Array**: Click "Randomize Array" to shuffle the elements
3. **Adjust Speed**: Use the speed slider to control animation speed
4. **Start Sorting**: Click "Start Bubble Sort" to begin the visualization
5. **Stop Anytime**: Click "Stop Sort" to halt the animation

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── algorithms/
│   │   └── visualizer.tsx   # Main visualization component
│   └── ui/
│       ├── Button.tsx       # Reusable button component
│       └── Dropdown.tsx     # Dropdown selection component
└── hooks/
    └── useBubbleSort.ts     # Custom hook for bubble sort logic
```

## 🔧 Key Components

### `Visualizer` Component
The main component that orchestrates the entire visualization experience, including controls and the sorting display.

### `useBubbleSort` Hook
A custom React hook that encapsulates:
- Bubble sort algorithm implementation
- State management for visualization
- Async/await pattern for smooth animations
- Start/stop functionality

### UI Components
- **Button**: Reusable button with variants (primary, secondary, success)
- **Dropdown**: Select component for choosing array sizes

## 🎨 Algorithm Information

### Bubble Sort
- **Time Complexity**: O(n²) - Quadratic time in worst and average cases
- **Space Complexity**: O(1) - Constant space (in-place sorting)
- **Stability**: Stable - Equal elements maintain relative order
- **Method**: Comparison-based sorting algorithm

**How it works**: Bubble sort repeatedly compares adjacent elements and swaps them if they're in the wrong order. The largest elements "bubble" to the end of the array in each pass.

## 🚀 Future Enhancements

- [ ] Add more sorting algorithms (Quick Sort, Merge Sort, Selection Sort)
- [ ] Implement data structure visualizations (Binary Trees, Graphs)
- [ ] Add algorithm comparison features
- [ ] Include search algorithm visualizations
- [ ] Add sound effects for enhanced experience
- [ ] Export visualization as GIF/video


## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) - The React Framework for Production
- Styled with [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- Inspired by the need to make algorithms more accessible and visual

---

**Happy Learning! 🎓** Made with ❤️ for the developer community.
