import { FeatureValue, Section } from "@/types/course";
import {
  FileTextIcon,
  MessageSquareIcon,
  PlayIcon,
  TrophyIcon,
} from "lucide-react";

const courseFeatures = [
  {
    icon: PlayIcon,
    iconColor: "bg-green-500",
    title: "৫০+ ভিডিও লেকচার",
    description:
      "IELTS Academic ও General Training এর Overview, Format ও প্রতেক ধরন নিয়ে in-depth আলোচনা",
  },
  {
    icon: FileTextIcon,
    iconColor: "bg-purple-500",
    title: "৩৮টি লেকচার শিট",
    description:
      "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary",
  },
  {
    icon: TrophyIcon,
    iconColor: "bg-orange-500",
    title: "রিডিং এবং লিসেনিং মক টেস্ট",
    description:
      "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি মাপাই",
  },
  {
    icon: MessageSquareIcon,
    iconColor: "bg-red-500",
    title: "ডাউট সলভিং লাইভ ক্লাস",
    description:
      "সাপ্তাহিক জুম কলে এক্সপার্ট টিচারের কাছে প্রশ্নের সমাধান এর সুযোগ",
  },
];

export default function HowTheCourseIsLaidOut({
  featuresSection,
}: {
  featuresSection: Section;
}) {
  return (
    <div className="max-w-4xl w-full mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {featuresSection?.name}
      </h2>

      {/* Course Features Grid */}
      <div className="bg-gray-900 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresSection?.values?.map((value, index: number) => {
            const feature = value as FeatureValue;
            return (
              <div key={index} className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`rounded-full p-3 flex-shrink-0`}
                >
                  <img src={feature.icon} alt="" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
