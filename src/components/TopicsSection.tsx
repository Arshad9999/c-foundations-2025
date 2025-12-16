import { 
  RefreshCw, 
  Calculator, 
  LayoutList, 
  Grid3X3, 
  Type, 
  Database, 
  MousePointer2, 
  FileText 
} from "lucide-react";
import TopicCard from "./TopicCard";

const topics = [
  {
    number: "01",
    title: "Iteration and Recursion",
    icon: RefreshCw,
    description: "Programs that require repeating a process until a condition is met. The core concept is State Maintenance—keeping track of running values across multiple iterations.",
    concepts: ["Factorial", "Fibonacci", "Digit Manipulation", "Armstrong Numbers", "Modular Arithmetic"],
    references: [
      { title: "Factorial of a Number", url: "https://www.geeksforgeeks.org/program-for-factorial-of-a-number/" },
      { title: "Fibonacci Series in C", url: "https://www.geeksforgeeks.org/c-program-for-fibonacci-numbers/" },
      { title: "Armstrong Numbers", url: "https://www.geeksforgeeks.org/program-for-armstrong-numbers/" },
    ],
    accentColor: "bg-code-green/10 text-code-green",
  },
  {
    number: "02",
    title: "Number Theory & Conversions",
    icon: Calculator,
    description: "Understanding prime numbers and positional notation systems. Prime checking can be optimized by only checking up to √N because factors come in pairs.",
    concepts: ["Prime Checking", "Binary to Decimal", "Decimal to Binary", "Positional Notation", "Factor Pairs"],
    references: [
      { title: "Prime Number Program", url: "https://www.geeksforgeeks.org/c-program-to-check-whether-a-number-is-prime-or-not/" },
      { title: "Binary to Decimal", url: "https://www.geeksforgeeks.org/program-binary-decimal-conversion/" },
    ],
    accentColor: "bg-code-purple/10 text-code-purple",
  },
  {
    number: "03",
    title: "Arrays (1D) & Algorithms",
    icon: LayoutList,
    description: "Arrays are contiguous memory blocks. Learn to process collections of data using fundamental searching and sorting algorithms.",
    concepts: ["Linear Search", "Bubble Sort", "Min/Max Finding", "Time Complexity O(n)", "Array Traversal"],
    references: [
      { title: "Linear Search in C", url: "https://www.geeksforgeeks.org/linear-search/" },
      { title: "Bubble Sort Algorithm", url: "https://www.geeksforgeeks.org/bubble-sort/" },
    ],
    accentColor: "bg-code-orange/10 text-code-orange",
  },
  {
    number: "04",
    title: "Matrix Operations (2D Arrays)",
    icon: Grid3X3,
    description: "Matrices are 'Arrays of Arrays.' Operations involve nested loops—an outer loop for rows and an inner loop for columns.",
    concepts: ["Matrix Multiplication", "Diagonal Sum", "Trace of Matrix", "Nested Loops", "Linear Algebra"],
    references: [
      { title: "Matrix Multiplication", url: "https://www.geeksforgeeks.org/c-program-multiply-two-matrices/" },
      { title: "Sum of Diagonals", url: "https://www.geeksforgeeks.org/program-to-find-the-sum-of-the-diagonal-elements-of-a-matrix/" },
    ],
    accentColor: "bg-code-pink/10 text-code-pink",
  },
  {
    number: "05",
    title: "String Manipulation",
    icon: Type,
    description: "In C, strings are character arrays terminated by a null character (\\0). Understanding this is key to implementing string functions.",
    concepts: ["strlen", "strcpy", "strcat", "Null Terminator", "Character Arrays"],
    references: [
      { title: "C String Functions", url: "https://www.geeksforgeeks.org/strings-in-c/" },
    ],
    accentColor: "bg-primary/10 text-primary",
  },
  {
    number: "06",
    title: "Structures",
    icon: Database,
    description: "Structures (struct) allow grouping variables of different data types under a single name. This models real-world entities better than arrays.",
    concepts: ["User-Defined Types", "Database Records", "Nested Structures", "Array of Structures", "struct Keyword"],
    references: [
      { title: "Structures in C", url: "https://www.geeksforgeeks.org/structures-c/" },
    ],
    accentColor: "bg-accent/10 text-accent",
  },
  {
    number: "07",
    title: "Pointers",
    icon: MousePointer2,
    description: "Pointers are variables that store memory addresses rather than values. Essential for call by reference and dynamic memory management.",
    concepts: ["Memory Addresses", "Call by Reference", "Swap with Pointers", "Dereferencing", "Pointer Arithmetic"],
    references: [
      { title: "Swap Using Pointers", url: "https://www.geeksforgeeks.org/swap-two-numbers-using-pointers/" },
    ],
    accentColor: "bg-code-green/10 text-code-green",
  },
  {
    number: "08",
    title: "File Handling",
    icon: FileText,
    description: "Data in RAM is volatile. Files provide persistence. Use file pointers (FILE *fp) as handles to read/write streams.",
    concepts: ["FILE Pointer", "fopen/fclose", "Read/Write Operations", "File Comparison", "Text Parsing"],
    references: [
      { title: "File Handling in C", url: "https://www.geeksforgeeks.org/basics-file-handling-c/" },
      { title: "Compare Two Files", url: "https://www.geeksforgeeks.org/c-program-to-compare-two-files/" },
    ],
    accentColor: "bg-code-purple/10 text-code-purple",
  },
];

const TopicsSection = () => {
  return (
    <section id="topics" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="font-mono text-sm text-primary">{"// "}</span>
            <span className="font-mono text-sm text-muted-foreground">Course Topics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Theoretical <span className="text-gradient-primary">Background</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Master the fundamental concepts of C programming through structured learning modules
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <div
              key={topic.number}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TopicCard {...topic} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
