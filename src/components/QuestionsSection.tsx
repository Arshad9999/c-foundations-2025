import { Code2, ChevronRight } from "lucide-react";

const questions = [
  { id: 1, text: "WAP that accepts the marks of 5 subjects and finds the sum and percentage marks obtained by the student.", topic: "Basic I/O" },
  { id: 2, text: "WAP that calculates the Simple Interest and Compound Interest. The Principal, Amount, Rate of Interest and Time are entered through the keyboard.", topic: "Arithmetic" },
  { id: 3, text: "WAP to calculate the area and circumference of a circle.", topic: "Math Operations" },
  { id: 4, text: "WAP that accepts the temperature in Centigrade and converts into Fahrenheit using the formula C/5=(F-32)/9.", topic: "Conversion" },
  { id: 5, text: "WAP that swaps values of two variables using a third variable.", topic: "Variables" },
  { id: 6, text: "WAP that checks whether the two numbers entered by the user are equal or not.", topic: "Conditionals" },
  { id: 7, text: "WAP to find the greatest of three numbers.", topic: "Conditionals" },
  { id: 8, text: "WAP that finds whether a given number is even or odd.", topic: "Modulo Operator" },
  { id: 9, text: "WAP that tells whether a given year is a leap year or not.", topic: "Conditionals" },
  { id: 10, text: "WAP that accepts marks of five subjects and finds percentage and prints grades according to the following criteria: Between 90-100% Print 'A', 80-90% Print 'B', 60-80% Print 'C', Below 60% Print 'D'.", topic: "Conditionals" },
  { id: 11, text: "WAP that takes two operands and one operator from the user, perform the operation, and prints the result by using Switch statement.", topic: "Switch Statement" },
  { id: 12, text: "WAP to print the sum of all numbers up to a given number.", topic: "Loops" },
  { id: 13, text: "WAP to find the factorial of a given number.", topic: "Loops/Recursion" },
  { id: 14, text: "WAP to print sum of even and odd numbers from 1 to N numbers.", topic: "Loops" },
  { id: 15, text: "WAP to print the Fibonacci series.", topic: "Loops/Recursion" },
  { id: 16, text: "WAP to check whether the entered number is prime or not.", topic: "Number Theory" },
  { id: 17, text: "WAP to find the sum of digits of the entered number.", topic: "Digit Manipulation" },
  { id: 18, text: "WAP to find the reverse of a number.", topic: "Digit Manipulation" },
  { id: 19, text: "WAP to print Armstrong numbers from 1 to 100.", topic: "Digit Manipulation" },
  { id: 20, text: "WAP to convert binary number into decimal number and vice versa.", topic: "Number Conversion" },
  { id: 21, text: "WAP that simply takes elements of the array from the user and finds the sum of these elements.", topic: "Arrays" },
  { id: 22, text: "WAP that inputs two arrays and saves sum of corresponding elements of these arrays in a third array and prints them.", topic: "Arrays" },
  { id: 23, text: "WAP to find the minimum and maximum element of the array.", topic: "Arrays" },
  { id: 24, text: "WAP to search an element in an array using Linear Search.", topic: "Searching" },
  { id: 25, text: "WAP to sort the elements of the array in ascending order using Bubble Sort technique.", topic: "Sorting" },
  { id: 26, text: "WAP to add and multiply two matrices of order nxn.", topic: "2D Arrays" },
  { id: 27, text: "WAP that finds the sum of diagonal elements of a mxn matrix.", topic: "2D Arrays" },
  { id: 28, text: "WAP to implement strlen(), strcat(), strcpy() using the concept of Functions.", topic: "Strings/Functions" },
  { id: 29, text: "Define a structure data type TRAIN_INFO. The type contains Train No.: integer type, Train name: string, Departure Time: aggregate type TIME, Arrival Time: aggregate type TIME, Start station: string, End station: string. The structure type Time contains two integer members: hour and minute. Maintain a train timetable and implement: a) List all trains sorted by train number from a particular section. b) List all trains from a particular station at a particular time. c) List all trains from a particular station within the next one hour. d) List all trains between a pair of start and end station.", topic: "Structures" },
  { id: 30, text: "WAP to swap two elements using the concept of pointers.", topic: "Pointers" },
  { id: 31, text: "WAP to compare the contents of two files and determine whether they are same or not.", topic: "File Handling" },
  { id: 32, text: "WAP to check whether a given word exists in a file or not. If yes then find the number of times it occurs.", topic: "File Handling" },
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
