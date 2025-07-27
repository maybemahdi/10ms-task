"use client";

import { CourseDetailsValue, Section } from "@/types/course";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import type React from "react";

import { useState } from "react";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`panel-${title.replace(/\s+/g, "-")}`}
      >
        <div dangerouslySetInnerHTML={{ __html: title }} />
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        )}
      </button>
      <div
        id={`panel-${title.replace(/\s+/g, "-")}`}
        role="region"
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 py-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 text-gray-700">{children}</div>
      </div>
    </div>
  );
}

export default function CourseDetails({
  courseDetailsSection,
}: {
  courseDetailsSection: Section;
}) {
  return (
    <div className="max-w-4xl w-full mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {courseDetailsSection?.name}
      </h2>

      {/* Course Details Container */}
      <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
        {courseDetailsSection?.values?.map((value, index: number) => {
          const detail = value as CourseDetailsValue;
          return (
            <CollapsibleSection
              key={index}
              title={detail?.title}
              defaultOpen={false}
            >
              <ul className="list-disc pl-5 space-y-2">
                <div dangerouslySetInnerHTML={{ __html: detail?.description }} />
              </ul>
            </CollapsibleSection>
          );
        })}
      </div>
    </div>
  );
}
