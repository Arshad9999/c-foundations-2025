import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface LabProgramCardProps {
  id: number;
  title: string;
  question: string;
  technicalLogic: string;
  details: string[];
}

const LabProgramCard = ({ id, title, question, technicalLogic, details }: LabProgramCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:glow-primary">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 focus:outline-none"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
            <span className="font-mono text-lg font-bold text-primary">{id}</span>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{question}</p>
          </div>

          <ChevronDown 
            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[600px]' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-2 border-t border-border/50">
          <div className="space-y-4">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
              <h4 className="text-xs font-mono uppercase tracking-wider text-primary mb-2">Technical Logic</h4>
              <p className="text-sm text-foreground leading-relaxed">{technicalLogic}</p>
            </div>

            <div className="space-y-2">
              {details.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-accent"></span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabProgramCard;
