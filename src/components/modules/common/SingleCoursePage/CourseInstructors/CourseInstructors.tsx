import { InstructorValue, Section } from "@/types/course";
import { ChevronRightIcon } from "lucide-react";

export default function CourseInstructors({
  instructorSection,
}: {
  instructorSection: Section;
}) {
  return (
    <div className="max-w-4xl w-full mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {instructorSection?.name}
      </h2>

      {/* Instructor Card */}
      {instructorSection?.values?.map((value, index: number) => {
        const instructor = value as InstructorValue;
        return (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 bg-gray-50"
          >
            <div className="flex items-start gap-4">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={
                    instructor.image ??
                    "https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"
                  }
                  alt={instructor.name ?? "Instructor"}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                />
              </div>

              {/* Instructor Details */}
              <div className="flex-1">
                {/* Name with Arrow */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {instructor.name ?? "Instructor"}
                  </h3>
                  <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                </div>

                {/* Credentials */}
                <div className="space-y-1 text-gray-700">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: instructor.description ?? "",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
