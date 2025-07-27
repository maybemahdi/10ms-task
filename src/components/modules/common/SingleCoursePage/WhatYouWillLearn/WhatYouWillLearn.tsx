import { PointerValue, Section } from "@/types/course";
import { CheckIcon } from "lucide-react";

const learningPoints = [
  "Detailed rules and regulations of each module of the IELTS test",
  "Formats and strategies to ace the IELTS test",
  "Proper structure and essay type for scoring well in IELTS writing task 1 and 2",
  "Speaking accurately on any topic in the IELTS speaking test",
  "Time management strategy to get a good band score in the IELTS test",
  "Through the IELTS Reading and IELTS Listening Mock Tests, you will gain a real exam experience and a complete understanding of the Band Score in the IELTS exam.",
];

export default function WhatYouWillLearn({
  whatYouWillLearnSection,
}: {
  whatYouWillLearnSection: Section;
}) {
  return (
    <div className="max-w-4xl w-full mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {whatYouWillLearnSection?.name}
      </h2>

      {/* Learning Points Container */}
      <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {whatYouWillLearnSection?.values?.map((value, index: number) => {
            const point = value as PointerValue;
            return (
              <div key={index} className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{point?.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
