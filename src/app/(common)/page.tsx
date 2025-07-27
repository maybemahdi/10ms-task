import SingleCoursePage from "@/components/modules/common/SingleCoursePage";
import { getCourse } from "@/services/CourseService";
import { Course } from "@/types/course";
import { cookies } from "next/headers";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value ?? "en") as "en" | "bn";

  try {
    const courseData = await getCourse(lang);

    return {
      title: courseData?.seo?.title ?? "Course Page",
      description: courseData?.seo?.description ?? "View our course",
      openGraph: {
        title: courseData?.seo?.ogTitle ?? courseData?.seo?.title,
        description:
          courseData?.seo?.ogDescription ?? courseData?.seo?.description,
        images: courseData?.seo?.ogImage ? [courseData.seo.ogImage] : undefined,
      },
      other: {
        keywords:
          courseData?.seo?.keywords?.join(", ") ??
          "IELTS, English course, online education",
      },
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    return {
      title: "Course Page",
      description: "View our course",
    };
  }
}

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
