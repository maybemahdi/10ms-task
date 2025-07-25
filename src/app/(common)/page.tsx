import SingleCoursePage from "@/components/modules/common/SingleCoursePage";
import { CourseService } from "@/services/CourseService";
import { Course } from "@/types/course";
import { cookies } from "next/headers";

const Page = async () => {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value ?? "en") as "en" | "bn";
  const courseData: Course = await CourseService.getCourse(lang);
  return (
    <div>
      <SingleCoursePage courseData={courseData} />
    </div>
  );
};

export default Page;
