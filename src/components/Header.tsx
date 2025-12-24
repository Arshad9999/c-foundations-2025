import { Terminal, BookOpen, Code2, FileQuestion, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
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
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#topics" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Topics</span>
            </a>
            <a href="#questions" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <FileQuestion className="w-4 h-4" />
              <span className="text-sm font-medium">Practice</span>
            </a>
            <Link to="/lab-program" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <FlaskConical className="w-4 h-4" />
              <span className="text-sm font-medium">LAB Program</span>
            </Link>
            <a href="#resources" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Code2 className="w-4 h-4" />
              <span className="text-sm font-medium">Resources</span>
            </a>
          </div>

          <div className="px-4 py-2 rounded-full bg-secondary border border-border">
            <span className="font-mono text-xs text-muted-foreground">Batch</span>
            <span className="font-mono text-sm text-accent ml-2">2025-2029</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
