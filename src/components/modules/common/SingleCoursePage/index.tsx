import { Course, Section } from "@/types/course";
import CourseBanner from "./CourseBanner/CourseBanner";
import Trailer from "./Trailer/Trailer";
import MyContainer from "@/components/ui/core/MyContainer/MyContainer";
import CourseInstructors from "./CourseInstructors/CourseInstructors";
import HowTheCourseIsLaidOut from "./HowTheCourseIsLaidOut/HowTheCourseIsLaidOut";

const SingleCoursePage = ({ courseData }: { courseData: Course }) => {
  console.log(courseData);
  const { title, description, media, checklist, cta_text, sections } =
    courseData;
  const instructorSection = sections?.find(
    (section: Section) => section.type === "instructors"
  ) as Section;
  return (
    <div>
      <CourseBanner title={title} description={description} />
      <MyContainer className="flex gap-8 mt-8">
        <div className="w-3/5 flex flex-col gap-8">
          <CourseInstructors instructorSection={instructorSection} />
          <HowTheCourseIsLaidOut />
        </div>
        <div className="w-2/5">
          <Trailer media={media} checklist={checklist} ctaText={cta_text} />
        </div>
      </MyContainer>
    </div>
  );
};

export default SingleCoursePage;
