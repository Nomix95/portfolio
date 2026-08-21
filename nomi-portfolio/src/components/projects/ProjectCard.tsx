import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    type: string;
    category: string;
    link: string;
    github: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isDark = project.type === 'dark';
  const cardClass = isDark ? 'card-dark' : 'card-light';
  const pillClass = isDark ? 'pill-dark' : 'pill-light';
  const textTitleClass = isDark ? 'text-white' : 'text-[#111111]';
  const textDescClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const idClass = isDark ? 'text-gray-700' : 'text-gray-300';

  return (
    <div className={`${cardClass} flex flex-col justify-between group relative overflow-hidden transition-all hover:scale-[1.02]`}>
      
      {/* Top Row */}
      <div className="flex justify-between items-start mb-8">
        <span className={`text-6xl font-heading font-black ${idClass}`}>{project.id}</span>
        
        <div className="flex gap-2">
          <span className={pillClass}>{project.category}</span>
          {project.features[0] && <span className={`${pillClass} hidden lg:inline-flex bg-[#111111] text-white border-[#111111]`}>{project.features[0]}</span>}
        </div>
      </div>

      {/* Middle Content */}
      <div className="mb-12">
        <h3 className={`text-3xl md:text-4xl font-heading font-bold mb-3 ${textTitleClass}`}>
          {project.title}
        </h3>
        <p className={`text-lg md:text-xl font-medium mb-6 ${textDescClass}`}>
          {project.technologies.slice(0, 3).join(' • ')}
        </p>
        <p className={`text-base leading-relaxed ${textDescClass}`}>
          {project.description}
        </p>
      </div>

      {/* Bottom Features */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.features.map((feature, idx) => (
          <span key={idx} className={pillClass}>
            {feature}
          </span>
        ))}
      </div>

      {/* Link */}
      <div className="pt-6 border-t border-current/10 mt-auto">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noreferrer"
          className={`inline-flex items-center gap-2 font-bold hover-target ${textTitleClass}`}
        >
          Request Project Like This <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
      
    </div>
  );
}
