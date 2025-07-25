import { Course } from "@/types/course";
import CourseBanner from "./CourseBanner/CourseBanner";
import Trailer from "./Trailer/Trailer";
import MyContainer from "@/components/ui/core/MyContainer/MyContainer";

const SingleCoursePage = ({ courseData }: { courseData: Course }) => {
  console.log(courseData);
  const { title, description } = courseData;
  return (
    <div>
      <CourseBanner title={title} description={description} />
      <MyContainer className="flex mt-8">
        <div className="w-3/5"></div>
        <div className="w-2/5">
          <Trailer />
        </div>
      </MyContainer>
    </div>
  );
};

export default SingleCoursePage;
