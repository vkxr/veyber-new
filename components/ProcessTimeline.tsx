
export interface ProcessStep {
  label: string;
  desc: string;
  icon?: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

const iconKeywords: Array<{ icon: string; keywords: string[] }> = [
  { icon: 'handshake', keywords: ['business', 'understanding', 'consultation', 'discovery'] },
  { icon: 'travel_explore', keywords: ['market', 'competitor', 'research', 'audit', 'analysis'] },
  { icon: 'route', keywords: ['strategy', 'planning', 'roadmap', 'architecture'] },
  { icon: 'design_services', keywords: ['design', 'wireframe', 'ui', 'ux', 'creative'] },
  { icon: 'manage_search', keywords: ['seo', 'keyword', 'search'] },
  { icon: 'edit_note', keywords: ['content', 'copy', 'publishing', 'listing'] },
  { icon: 'campaign', keywords: ['campaign', 'ads', 'promotion'] },
  { icon: 'code', keywords: ['development', 'build', 'coding', 'integration'] },
  { icon: 'inventory_2', keywords: ['catalog', 'inventory', 'product'] },
  { icon: 'monitoring', keywords: ['tracking', 'monitoring', 'analytics', 'reporting'] },
  { icon: 'tune', keywords: ['optimization', 'optimize', 'testing', 'improvement'] },
  { icon: 'rocket_launch', keywords: ['launch', 'deployment', 'go live'] },
  { icon: 'cloud', keywords: ['hosting', 'server', 'infrastructure', 'cloud', 'migration'] },
  { icon: 'verified_user', keywords: ['security', 'compliance', 'health'] },
  { icon: 'trending_up', keywords: ['scaling', 'growth', 'support'] },
];

function getStepIcon(step: ProcessStep) {
  if (step.icon) {
    return step.icon;
  }

  const label = step.label.toLowerCase();
  const description = step.desc.toLowerCase();

  for (const { icon, keywords } of iconKeywords) {
    if (keywords.some((keyword) => label.includes(keyword) || description.includes(keyword))) {
      return icon;
    }
  }

  return 'done_all';
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const rows: ProcessStep[][] = [];
  for (let i = 0; i < steps.length; i += 2) {
    rows.push(steps.slice(i, i + 2));
  }

  return (
    <div className="relative max-w-5xl mx-auto mt-16 sm:mt-24 px-4 pb-12">
      {/* Mobile Vertical Dashed Line */}
      <div className="md:hidden absolute top-[10%] bottom-[10%] left-[2.5rem] border-l-[3px] border-dashed border-primary/40 z-0" />

      {rows.map((rowSteps, rowIndex) => {
        const isEvenRow = rowIndex % 2 === 0;
        const hasNextRow = rowIndex < rows.length - 1;
        const isLastRow = rowIndex === rows.length - 1;

        return (
          <div
            key={rowIndex}
            className={`relative flex flex-col ${
              isEvenRow ? 'md:flex-row' : 'md:flex-row-reverse'
            } justify-between z-10 ${!isLastRow ? 'md:mb-16' : ''}`}
          >
            {/* Horizontal Line between the 2 items in this row (if there are 2 items) */}
            {rowSteps.length > 1 && (
              <div className="hidden md:block absolute top-[48px] left-[25%] right-[25%] border-t-[3px] border-dashed border-primary/40 z-0">
                {isEvenRow ? (
                  /* Arrow pointing Right */
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 border-t-[3px] border-r-[3px] border-primary rotate-45" />
                ) : (
                  /* Arrow pointing Left */
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 border-b-[3px] border-l-[3px] border-primary rotate-45" />
                )}
              </div>
            )}

            {/* Vertical Curve to the next row (if there is a next row) */}
            {hasNextRow && (
              <>
                {isEvenRow ? (
                  /* Curve on the Right side (downwards) */
                  <div className="hidden md:block absolute top-[48px] right-[8%] w-[12%] h-[calc(100%+64px)] border-t-[3px] border-r-[3px] border-b-[3px] border-dashed border-primary/40 rounded-r-[3rem] z-0" />
                ) : (
                  /* Curve on the Left side (downwards) */
                  <div className="hidden md:block absolute top-[48px] left-[8%] w-[12%] h-[calc(100%+64px)] border-t-[3px] border-l-[3px] border-b-[3px] border-dashed border-primary/40 rounded-l-[3rem] z-0" />
                )}
              </>
            )}

            {/* Render Items */}
            {rowSteps.map((step, itemIdx) => {
              const globalStepNum = rowIndex * 2 + itemIdx + 1;
              return (
                <div
                  key={globalStepNum}
                  className="flex flex-row md:flex-col items-center md:text-center w-full md:w-[40%] relative z-10 mb-12 md:mb-0 group cursor-default"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-surface-container border-4 border-[#07080f] flex items-center justify-center relative group-hover:-translate-y-2 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 shadow-xl z-10">
                    <div className="absolute -top-1 -right-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary text-white flex items-center justify-center font-black text-xs md:text-sm shadow-lg shadow-primary/40">
                      {globalStepNum}
                    </div>
                    <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">
                      {getStepIcon(step)}
                    </span>
                  </div>
                  <div className="ml-6 md:ml-0 md:mt-8 bg-surface-container-low hover:bg-surface-container transition-colors p-6 rounded-2xl border border-white/5 w-full shadow-lg h-full">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {step.label}
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* If there's only 1 item in the row, add an empty placeholder to maintain flex spacing */}
            {rowSteps.length === 1 && (
              <div className="hidden md:block w-[40%]"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
