import ProcessTimeline from '@/components/ProcessTimeline';

type ProcessSectionStep = {
  n?: string;
  label: string;
  desc: string;
  icon?: string;
};

interface ProcessSectionProps {
  title: string;
  description: string;
  steps: ProcessSectionStep[];
  sectionClassName?: string;
}

export default function ProcessSection({
  title,
  description,
  steps,
  sectionClassName = 'bg-surface',
}: ProcessSectionProps) {
  return (
    <section className={`px-4 sm:px-8 py-16 sm:py-24 ${sectionClassName}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <ProcessTimeline
          steps={steps.map(({ label, desc, icon }) => ({
            label,
            desc,
            icon,
          }))}
        />
      </div>
    </section>
  );
}
