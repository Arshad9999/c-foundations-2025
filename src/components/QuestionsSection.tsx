import { Code2, ChevronRight } from "lucide-react";

const questions = [
  { id: 1, text: "WAP that accepts the marks of 5 subjects and finds the sum and percentage marks obtained by the student.", topic: "Marks Calculation" },
  { id: 2, text: "WAP that calculates Simple Interest (SI) and Compound Interest (CI).", topic: "Interest Calculation" },
  { id: 3, text: "WAP to calculate the area and circumference of a circle.", topic: "Circle Metrics" },
  { id: 4, text: "WAP that converts Centigrade to Fahrenheit using C/5=(F-32)/9.", topic: "Temperature Conversion" },
  { id: 5, text: "WAP that swaps values of two variables using a third variable.", topic: "Variable Swapping" },
  { id: 6, text: "WAP that checks whether two numbers are equal.", topic: "Equality Check" },
  { id: 7, text: "WAP to find the greatest of three numbers.", topic: "Conditionals" },
  { id: 8, text: "WAP that finds whether a given number is even or odd.", topic: "Even or Odd" },
  { id: 9, text: "WAP that tells whether a given year is a leap year.", topic: "Leap Year Check" },
  { id: 10, text: "WAP to find percentage and print grades (A, B, C, D).", topic: "Grading System" },
  { id: 11, text: "WAP that performs operations using a Switch statement.", topic: "Switch Calculator" },
  { id: 12, text: "WAP to print the sum of all numbers up to a given number.", topic: "Sum of N Numbers" },
  { id: 13, text: "WAP to find the factorial of a given number.", topic: "Factorial" },
  { id: 14, text: "WAP to print sum of even and odd numbers from 1 to N.", topic: "Sum of Even/Odd" },
  { id: 15, text: "WAP to print the Fibonacci series.", topic: "Fibonacci Series" },
  { id: 16, text: "WAP to check whether the entered number is prime.", topic: "Prime Number Check" },
  { id: 17, text: "WAP to find the sum of digits.", topic: "Sum of Digits" },
  { id: 18, text: "WAP to find the reverse of a number.", topic: "Reverse a Number" },
  { id: 19, text: "WAP to print Armstrong numbers from 1 to 100.", topic: "Armstrong Numbers" },
  { id: 20, text: "Binary to decimal and vice versa.", topic: "Binary/Decimal Conversion" },
  { id: 21, text: "WAP to find the sum of array elements.", topic: "Array Sum" },
  { id: 22, text: "Sum of two arrays into a third.", topic: "Corresponding Array Sum" },
  { id: 23, text: "Find minimum and maximum elements.", topic: "Min/Max in Array" },
  { id: 24, text: "Search an element in an array.", topic: "Linear Search" },
  { id: 25, text: "Sort elements in ascending order.", topic: "Bubble Sort" },
  { id: 26, text: "Add and multiply two n×n matrices.", topic: "Matrix Operations" },
  { id: 27, text: "Sum of diagonal elements of m×n matrix.", topic: "Diagonal Sum" },
  { id: 28, text: "Implement strlen, strcat, strcpy using Functions.", topic: "String Functions" },
  { id: 29, text: "Maintain train timetable using structures.", topic: "TRAIN_INFO Structure" },
  { id: 30, text: "Swap two elements using pointers.", topic: "Swap with Pointers" },
  { id: 31, text: "Compare two files.", topic: "File Comparison" },
  { id: 32, text: "Check if a word exists and its frequency.", topic: "Word Count in File" },
];

const QuestionsSection = () => {
  return (
    <section id="questions" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Code2 className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm text-muted-foreground">Practice Problems</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Practice <span className="text-gradient-accent">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Test your understanding with these programming exercises. Write and run your own solutions!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div
                key={question.id}
                className="group p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300 opacity-0 animate-slide-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="font-mono text-lg font-bold text-accent">
                      {String(question.id).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 text-xs font-mono rounded bg-code-bg text-code-orange">
                        {question.topic}
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {question.text}
                    </p>
                  </div>

                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-secondary/50 border border-border text-center">
            <p className="font-mono text-sm text-muted-foreground mb-2">
              <span className="text-code-purple">/* </span>
              WAP = Write A Program
              <span className="text-code-purple"> */</span>
            </p>
            <p className="text-muted-foreground text-sm">
              Practice writing solutions using any C compiler or online IDE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
