import { Terminal, ArrowLeft, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import LabProgramCard from "@/components/LabProgramCard";

const labPrograms = [
  {
    id: 1,
    title: "Marks Calculation",
    question: "WAP that accepts the marks of 5 subjects and finds the sum and percentage marks obtained by the student.",
    technicalLogic: "Uses Arithmetic Accumulation. The sum is calculated as S = Σᵢ₌₁⁵ mᵢ. Percentage is computed as (S / Total) × 100.",
    details: [
      "Data Handling: Use float or double data types to prevent Integer Truncation during division.",
      "End Case: Input validation to ensure marks are within the [0, 100] range."
    ]
  },
  {
    id: 2,
    title: "Interest Calculation",
    question: "WAP that calculates Simple Interest (SI) and Compound Interest (CI).",
    technicalLogic: "SI Formula: P × R × T / 100. CI Formula: P(1 + R/100)ᵀ - P.",
    details: [
      "Requirements: Requires the math.h library for the pow() function.",
      "Precision: Use high-precision floating-point variables to handle exponential growth in CI."
    ]
  },
  {
    id: 3,
    title: "Circle Metrics",
    question: "WAP to calculate the area and circumference of a circle.",
    technicalLogic: "Implementation of Euclidean geometry formulas. Area: πr². Circumference: 2πr.",
    details: [
      "Constraint: The radius (r) must be a positive real number.",
      "Use #define PI 3.14159 for Macro Definition."
    ]
  },
  {
    id: 4,
    title: "Temperature Conversion",
    question: "WAP that converts Centigrade to Fahrenheit using C/5=(F-32)/9.",
    technicalLogic: "Algebraic transposition. The formula used in code is F = (C × 9/5) + 32.",
    details: [
      "Detail: Ensure the use of 9.0/5.0 to force Floating Point Promotion.",
      "Otherwise, integer division will result in 1."
    ]
  },
  {
    id: 5,
    title: "Variable Swapping",
    question: "WAP that swaps values of two variables using a third variable.",
    technicalLogic: "Temporary Buffer Strategy: temp = a, a = b, b = temp.",
    details: [
      "Memory Rule: This creates a temporary copy in memory to prevent data overwriting."
    ]
  },
  {
    id: 6,
    title: "Equality Check",
    question: "WAP that checks whether two numbers are equal.",
    technicalLogic: "Uses the Relational Equality Operator (==).",
    details: [
      "End Case: Returns a boolean result or prints a confirmation message via an if-else block."
    ]
  },
  {
    id: 7,
    title: "Greatest of Three Numbers",
    question: "WAP to find the greatest of three numbers.",
    technicalLogic: "Nested Conditional Branching. Compares A vs B, then the winner vs C.",
    details: [
      "Optimization: Can be implemented using Logical AND (&&) for a flatter code structure."
    ]
  },
  {
    id: 8,
    title: "Even or Odd",
    question: "WAP that finds whether a given number is even or odd.",
    technicalLogic: "Modulo Arithmetic. If N mod 2 == 0, the number is even.",
    details: [
      "Bitwise Alternative: Checking the Least Significant Bit (LSB).",
      "If (n & 1) is 0, it is even."
    ]
  },
  {
    id: 9,
    title: "Leap Year Check",
    question: "WAP that tells whether a given year is a leap year.",
    technicalLogic: "Compound Boolean Logic. Condition: (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0).",
    details: [
      "Rule: Century years must be divisible by 400 to be leap years."
    ]
  },
  {
    id: 10,
    title: "Grading System",
    question: "WAP to find percentage and print grades (A, B, C, D).",
    technicalLogic: "Multi-way Selection Structure (if-else if-else).",
    details: [
      "Criteria: Categorizes data into discrete intervals (e.g., [90, 100] → A)."
    ]
  },
  {
    id: 11,
    title: "Switch Calculator",
    question: "WAP that performs operations using a Switch statement.",
    technicalLogic: "Jump Table Implementation. The switch evaluates a char operator.",
    details: [
      "End Case: Includes a default case to handle Illegal Operands."
    ]
  },
  {
    id: 12,
    title: "Sum of N Numbers",
    question: "WAP to print the sum of all numbers up to a given number.",
    technicalLogic: "Iterative Accumulation. A loop runs from 1 to N, updating sum += i.",
    details: [
      "Mathematical Short: Can be verified using n(n+1)/2."
    ]
  },
  {
    id: 13,
    title: "Factorial",
    question: "WAP to find the factorial of a given number.",
    technicalLogic: "Product of a sequence: n! = ∏ᵢ₌₁ⁿ i.",
    details: [
      "Constraint: Factorials grow factorially (large values).",
      "Use long long for n > 12."
    ]
  },
  {
    id: 14,
    title: "Sum of Even/Odd",
    question: "WAP to print sum of even and odd numbers from 1 to N.",
    technicalLogic: "Conditional Iteration. Inside a loop, an if(i % 2 == 0) filter separates values into two different accumulators.",
    details: []
  },
  {
    id: 15,
    title: "Fibonacci Series",
    question: "WAP to print the Fibonacci series.",
    technicalLogic: "Recurrence Relation. Tₙ = Tₙ₋₁ + Tₙ₋₂.",
    details: [
      "State Management: Requires three variables to shift values forward in each iteration."
    ]
  },
  {
    id: 16,
    title: "Prime Number Check",
    question: "WAP to check whether the entered number is prime.",
    technicalLogic: "Trial Division. Loop from 2 to √N. If any divisor is found, set a flag and break.",
    details: []
  },
  {
    id: 17,
    title: "Sum of Digits",
    question: "WAP to find the sum of digits.",
    technicalLogic: "Digit Extraction: Get remainder (num % 10), add to sum, truncate number (num / 10).",
    details: [
      "End Case: Loop terminates when num == 0."
    ]
  },
  {
    id: 18,
    title: "Reverse a Number",
    question: "WAP to find the reverse of a number.",
    technicalLogic: "Positional Re-weighted Accumulation: rev = (rev * 10) + (num % 10).",
    details: []
  },
  {
    id: 19,
    title: "Armstrong Numbers",
    question: "WAP to print Armstrong numbers from 1 to 100.",
    technicalLogic: "Sum of digits each raised to the power of the count of digits equals the original number.",
    details: [
      "Range: For [1, 100], this mainly checks if 1³ + 5³ + 3³ = 153 (logic applies to all digit counts)."
    ]
  },
  {
    id: 20,
    title: "Binary/Decimal Conversion",
    question: "Binary to decimal and vice versa.",
    technicalLogic: "Decimal to Binary: Successive division by 2 (Radix-2). Binary to Decimal: Sum of bit × 2^position.",
    details: []
  },
  {
    id: 21,
    title: "Array Sum",
    question: "WAP to find the sum of array elements.",
    technicalLogic: "Linear Traversal. Accessing elements via arr[i] in a loop.",
    details: [
      "Memory: Array size must be predefined or dynamically allocated."
    ]
  },
  {
    id: 22,
    title: "Corresponding Array Sum",
    question: "Sum of two arrays into a third.",
    technicalLogic: "Element-wise Addition: C[i] = A[i] + B[i].",
    details: [
      "Rule: Both input arrays must be of the same dimension."
    ]
  },
  {
    id: 23,
    title: "Min/Max in Array",
    question: "Find minimum and maximum elements.",
    technicalLogic: "Comparison Tracking. Initialize min and max with arr[0], then update if a smaller/larger element is encountered.",
    details: []
  },
  {
    id: 24,
    title: "Linear Search",
    question: "Search an element in an array.",
    technicalLogic: "Sequential Search. Complexity O(n).",
    details: [
      "End Case: Loop finishes with a \"Not Found\" message if the index reaches size."
    ]
  },
  {
    id: 25,
    title: "Bubble Sort",
    question: "Sort elements in ascending order.",
    technicalLogic: "Sinking Sort. Repeatedly swaps adjacent elements if they are in the wrong order.",
    details: [
      "Complexity: O(n²)."
    ]
  },
  {
    id: 26,
    title: "Matrix Operations",
    question: "Add and multiply two n × n matrices.",
    technicalLogic: "Addition: C[i][j] = A[i][j] + B[i][j]. Multiplication: Dot product of rows and columns.",
    details: [
      "Requires triple nested loops for multiplication."
    ]
  },
  {
    id: 27,
    title: "Diagonal Sum",
    question: "Sum of diagonal elements of m × n matrix.",
    technicalLogic: "Sum elements where the row index equals the column index (i == j).",
    details: []
  },
  {
    id: 28,
    title: "String Functions",
    question: "Implement strlen, strcat, strcpy using Functions.",
    technicalLogic: "Null-terminator Traversal. Loops continue until the character '\\0' is reached.",
    details: []
  },
  {
    id: 29,
    title: "TRAIN_INFO Structure",
    question: "Maintain train timetable using structures.",
    technicalLogic: "Aggregate Data Types. Uses nested structures (Time within Train).",
    details: [
      "Operations: Uses strcmp for station filtering and conditional logic for time-window checks.",
      "Includes operations for listing trains by station, time, and route."
    ]
  },
  {
    id: 30,
    title: "Swap with Pointers",
    question: "Swap two elements using pointers.",
    technicalLogic: "Pass-by-Reference. Accessing memory addresses directly using the * (dereference) operator.",
    details: []
  },
  {
    id: 31,
    title: "File Comparison",
    question: "Compare two files.",
    technicalLogic: "Byte-by-Byte Validation. Read chars from both files simultaneously and compare.",
    details: [
      "End Case: Termination at EOF."
    ]
  },
  {
    id: 32,
    title: "Word Count in File",
    question: "Check if a word exists and its frequency.",
    technicalLogic: "Buffer Matching. Read strings from the file and use strcmp against the target word.",
    details: []
  }
];

const LabProgram = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-mono text-lg font-semibold text-foreground">C_Programming</span>
                <span className="text-primary font-mono">.h</span>
              </div>
            </Link>
            
            <Link 
              to="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <FlaskConical className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm text-muted-foreground">Practical Experiments</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">LAB </span>
            <span className="text-gradient-primary">Program</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Complete collection of 32 practical programs with detailed technical logic and implementation notes for your C Programming lab sessions.
          </p>

          <div className="flex items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-mono">32</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Programs</div>
            </div>
            <div className="w-px h-10 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent font-mono">8</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {labPrograms.map((program) => (
              <LabProgramCard
                key={program.id}
                id={program.id}
                title={program.title}
                question={program.question}
                technicalLogic={program.technicalLogic}
                details={program.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm text-muted-foreground">
            C Programming Lab Manual • Batch 2025-2029
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LabProgram;
