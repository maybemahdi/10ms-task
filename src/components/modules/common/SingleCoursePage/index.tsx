import { Course, Section } from "@/types/course";
import CourseBanner from "./CourseBanner/CourseBanner";
import Trailer from "./Trailer/Trailer";
import MyContainer from "@/components/ui/core/MyContainer/MyContainer";
import CourseInstructors from "./CourseInstructors/CourseInstructors";
import HowTheCourseIsLaidOut from "./HowTheCourseIsLaidOut/HowTheCourseIsLaidOut";
import WhatYouWillLearn from "./WhatYouWillLearn/WhatYouWillLearn";
import CourseDetails from "./CourseDetails/CourseDetails";
import CourseExclusiveFeatures from "./CourseExclusiveFeatures/CourseExclusiveFeatures";

const SingleCoursePage = ({ courseData }: { courseData: Course }) => {
  const { title, description, media, checklist, cta_text, sections } =
    courseData;
  const instructorSection = sections?.find(
    (section: Section) => section.type === "instructors"
  ) as Section;
  const featuresSection = sections?.find(
    (section: Section) => section.type === "features"
  ) as Section;
  const whatYouWillLearnSection = sections?.find(
    (section: Section) => section.type === "pointers"
  ) as Section;
  const courseDetailsSection = sections?.find(
    (section: Section) => section.type === "about"
  ) as Section;
  const courseExclusiveFeaturesSection = sections?.find(
    (section: Section) => section.type === "feature_explanations"
  ) as Section;
  return (
    <div className="mb-10 relative">
      <CourseBanner title={title} description={description} />
      <MyContainer className="flex flex-col-reverse lg:flex-row gap-8 mt-8">
        <div className="lg:w-3/5 w-full flex flex-col gap-10">
          <CourseInstructors instructorSection={instructorSection} />
          <HowTheCourseIsLaidOut featuresSection={featuresSection} />
          <WhatYouWillLearn whatYouWillLearnSection={whatYouWillLearnSection} />
          <CourseDetails courseDetailsSection={courseDetailsSection} />
          <CourseExclusiveFeatures
            courseExclusiveFeaturesSection={courseExclusiveFeaturesSection}
          />
        </div>
        <div className="lg:w-2/5 courseXL:w-[500px] w-full courseXL:absolute top-16 courseXL:right-44">
          <Trailer media={media} checklist={checklist} ctaText={cta_text} />
        </div>
      </MyContainer>
    </div>
  );
};

export default SingleCoursePage;
