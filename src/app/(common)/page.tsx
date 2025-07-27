import SingleCoursePage from "@/components/modules/common/SingleCoursePage";
import { getCourse } from "@/services/CourseService";
import { Course } from "@/types/course";
import { cookies } from "next/headers";

const Page = async () => {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value ?? "en") as "en" | "bn";
  let courseData: Course | null = null;
  try {
    courseData = await getCourse(lang);
  } catch (error) {
    console.error("Failed to fetch course data:", error);
  }
  return (
    <div>
      {courseData ? (
        <SingleCoursePage courseData={courseData} />
      ) : (
        <div className="text-red-500 text-center">Failed to load course data.</div>
      )}
    </div>
  );
};

export default Page;
