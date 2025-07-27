import { FeatureExplanationValue, Section } from "@/types/course";
import { CheckIcon } from "lucide-react";

const exclusiveFeatures = [
  {
    title: "ভিডিও লেকচার",
    points: [
      "IELTS Academic ও General Training নিয়ে আলোচনা",
      "Reading, Writing, Listening ও Speaking এর Overview & Format",
      "প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি",
      "ভিডিওর সাথে প্র্যাকটিসের সুযোগ",
    ],
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qQROxXOBjYBBwTEwIK1hgXbjTc0YHR.png", // Image for video lectures
    imageAlt: "50+ Video Lectures",
  },
  {
    title: "Reading ও Listening Mock Tests",
    points: [
      "10 Reading & 10 Listening Mock Tests",
      "Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স",
      "উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট",
      "যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট",
    ],
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qQROxXOBjYBBwTEwIK1hgXbjTc0YHR.png", // Image for mock tests (using the same source as it contains both)
    imageAlt: "IELTS Reading & Listening Mock Tests",
  },
];

export default function CourseExclusiveFeatures({
  courseExclusiveFeaturesSection,
}: {
  courseExclusiveFeaturesSection: Section;
}) {
  return (
    <div className="max-w-4xl w-full mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {courseExclusiveFeaturesSection?.name}
      </h2>

      {/* Features Container */}
      <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 space-y-8">
        {courseExclusiveFeaturesSection?.values?.map((value, index: number) => {
          const feature = value as FeatureExplanationValue;
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 border-b border-gray-200 pb-8 last:border-b-0 last:pb-0"
            >
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature?.title}
                </h3>
                <ul className="space-y-3">
                  {feature?.checklist?.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-64">
                <img
                  src={feature?.file_url || "/placeholder.svg"}
                  alt={feature?.title || "Feature Image"}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
