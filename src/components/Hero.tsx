import { ChevronDown, Braces, Hash, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 animate-float">
        <div className="p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border card-shadow">
          <Braces className="w-8 h-8 text-code-green" />
        </div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <div className="p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border card-shadow">
          <Hash className="w-8 h-8 text-code-purple" />
        </div>
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '4s' }}>
        <div className="p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border card-shadow">
          <Cpu className="w-8 h-8 text-code-orange" />
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-code-green animate-pulse" />
          <span className="font-mono text-sm text-muted-foreground">BTech Computer Science</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-foreground">Master </span>
          <span className="text-gradient-primary">C Programming</span>
        </h1>

        <div className="flex justify-center items-center gap-4 mb-8">
          <code className="font-mono text-lg md:text-2xl text-muted-foreground">
            <span className="text-code-purple">#include</span>
            <span className="text-code-orange"> &lt;stdio.h&gt;</span>
          </code>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          A comprehensive course covering fundamentals to advanced concepts in C programming. 
          Build a strong foundation in algorithms, data structures, and system-level programming.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#topics"
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary"
          >
            Explore Topics
          </a>
          <a
            href="#questions"
            className="px-8 py-4 rounded-xl bg-secondary text-foreground font-semibold border border-border hover:bg-secondary/80 transition-colors"
          >
            Practice Questions
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: "Topics", value: "8" },
            { label: "Concepts", value: "25+" },
            { label: "Practice", value: "8" },
            { label: "Batch", value: "2025" },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <div className="font-mono text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <a href="#topics" className="inline-flex flex-col items-center mt-16 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
