import { Terminal, Github, BookOpen, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer id="resources" className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-mono text-lg font-semibold text-foreground">C_Programming</span>
                <span className="text-primary font-mono">.h</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A comprehensive C programming course for BTech students. 
              Building strong foundations in computer science fundamentals.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#topics" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Course Topics
                </a>
              </li>
              <li>
                <a href="#questions" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Practice Questions
                </a>
              </li>
              <li>
                <a href="https://www.geeksforgeeks.org/c-programming-language/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  GeeksforGeeks C Tutorials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <div className="space-y-3">
              <a
                href="https://www.onlinegdb.com/online_c_compiler"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Code2 className="w-4 h-4" />
                Online C Compiler
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub Resources
              </a>
              <a
                href="https://www.geeksforgeeks.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <BookOpen className="w-4 h-4" />
                GeeksforGeeks
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 BTech C Programming Course. Batch 2025-2029.
          </p>
          <code className="font-mono text-xs text-muted-foreground">
            <span className="text-code-purple">printf</span>
            <span className="text-foreground">(</span>
            <span className="text-code-orange">"Happy Coding!"</span>
            <span className="text-foreground">);</span>
          </code>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
