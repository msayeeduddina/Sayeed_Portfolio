import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Smart Contracts",
      description:
        "Develop secure smart contracts with a focus on delivering high-quality, efficient solutions in the blockchain space.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Web3 Applications",
      description:
        "Leverage blockchain technology to build secure and innovative Web3 applications tailored to your needs.",
      icon: <IconCurrencyDollar />,
    },

    {
      title: "Rust",
      description:
        "Develop robust systems and optimize performance for memory-safe applications in backend services and blockchain using Rust.",
      icon: <IconCloud />,
    },
    {
      title: "Smart Contract Audit",
      description:
        "Perform smart contract audits to identify vulnerabilities and ensure security, delivering reports with recommendations to safeguard assets and enhance trust.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Blockchain Protocols",
      description:
        "Design blockchain protocols with expertise in consensus mechanisms, cryptographic algorithms, and distributed ledger technologies for secure, scalable solutions.",
      icon: <IconHelp />,
    },
    {
      title: "Full Stack Application",
      description:
        "Develop robust and scalable full-stack applications with seamless user experiences and powerful backend systems.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Zoom Consultation Calls",
      description:
        "Schedule Zoom consultations for personalized advice, project discussions, and expert guidance.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "24/7 Support",
      description:
        "Get round-the-clock support to ensure your projects run smoothly and your queries are resolved promptly.",
      icon: <IconHeart />,
    },
  ];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-800 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-800 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-500  dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-400 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
