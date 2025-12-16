import { Code2, ChevronRight } from "lucide-react";

const questions = [
  {
    id: 1,
    text: "WAP that accepts the marks of 5 subjects and finds the sum and percentage marks obtained by the student.",
    topic: "Basic I/O",
  },
  {
    id: 2,
    text: "WAP that calculates the Simple Interest and Compound Interest. The Principal, Amount, Rate of Interest and Time are entered through the keyboard.",
    topic: "Arithmetic",
  },
  {
    id: 3,
    text: "WAP to calculate the area and circumference of a circle.",
    topic: "Math Operations",
  },
  {
    id: 4,
    text: "WAP that accepts the temperature in Centigrade and converts into Fahrenheit using the formula C/5=(F-32)/9.",
    topic: "Conversion",
  },
  {
    id: 5,
    text: "WAP that swaps values of two variables using a third variable.",
    topic: "Variables",
  },
  {
    id: 6,
    text: "WAP that checks whether the two numbers entered by the user are equal or not.",
    topic: "Conditionals",
  },
  {
    id: 7,
    text: "WAP to find the greatest of three numbers.",
    topic: "Conditionals",
  },
  {
    id: 8,
    text: "WAP that finds whether a given number is even or odd.",
    topic: "Modulo Operator",
  },
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
