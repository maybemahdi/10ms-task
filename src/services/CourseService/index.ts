const getCourse = async (language?: "en" | "bn") => {
  try {
    const response = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${
        language || "en"
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-TENMS-SOURCE-PLATFORM": "web",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
};

export const CourseService = {
  getCourse,
};
