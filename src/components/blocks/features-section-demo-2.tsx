import { cn } from "@/lib/utils";
import {
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Open source",
      description:
        "Всегда бесплатно. Hydra - это открытое программное обеспечение, которое может быть изменено, улучшено и распространено кем угодно. Мы верим, что это поможет создать лучший продукт.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Легкость в использовании",
      description:
        "Интуитивно понятный интерфейс, который позволяет играть с легкостью. Мы старались сделать настройку и управление вашими играми максимально простыми.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Бесплатность",
      description:
        "Hydra - это бесплатная программа, не требующая ни одной монеты для использования. Мы считаем, что игры должны быть доступны для всех, а не только для тех, кто может себе позволить дорогие подписки.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Облачные сохранения",
      description: 
      "Все ваши игры, настройки и прогресс будут синхронизироваться в облаке. Это означает, что вы сможете играть на любом устройстве, где установлен Hydra, при этом не теряя свой прогресс.",
      icon: <IconCloud />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
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
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index <= 4 && " dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-neutral-100 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
