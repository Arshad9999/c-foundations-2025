import { LucideIcon, ExternalLink } from "lucide-react";

interface Reference {
  title: string;
  url: string;
}

interface TopicCardProps {
  number: string;
  title: string;
  icon: LucideIcon;
  description: string;
  concepts: string[];
  references: Reference[];
  accentColor: string;
}

const TopicCard = ({ number, title, icon: Icon, description, concepts, references, accentColor }: TopicCardProps) => {
  return (
    <article className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${accentColor}`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className="font-mono text-3xl font-bold text-border group-hover:text-primary/30 transition-colors">
          {number}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

      <div className="mb-4">
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Key Concepts</h4>
        <div className="flex flex-wrap gap-2">
          {concepts.map((concept) => (
            <span
              key={concept}
              className="px-2 py-1 text-xs font-mono rounded-md bg-code-bg text-muted-foreground"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">References</h4>
        <div className="space-y-1">
          {references.map((ref) => (
            <a
              key={ref.title}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ExternalLink className="w-3 h-3" />
              {ref.title}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default TopicCard;
