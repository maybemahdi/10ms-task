const fetchWithTimeout = async (
  url: string,
  options: RequestInit = {},
  timeout = 7000 // 7 seconds timeout
): Promise<Response> => {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout")), timeout)
    ),
  ]) as Promise<Response>;
};

type Language = "en" | "bn";

export const getCourse = async (language?: Language) => {
  const lang = language ?? "en";
  const url = `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`;

  try {
    const response = await fetchWithTimeout(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-TENMS-SOURCE-PLATFORM": "web",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Fetch failed with status ${response.status}: ${errorText}`
      );
    }

    const json = await response.json();

    if (!json?.data) {
      throw new Error("Invalid response structure: missing 'data' field");
    }

    return json.data;
  } catch (error) {
    console.error("🔴 Error in getCourse:", error);
    throw error;
  }
};