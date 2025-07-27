import MyContainer from "@/components/ui/core/MyContainer/MyContainer";

const StarRating = ({ rating = 5 }: { rating?: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400" : "text-gray-400"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

type CourseBannerProps = {
  title: string;
  description: string;
};

export default function CourseBanner({
  title,
  description
}: CourseBannerProps) {
  return (
    <div className="w-full bg-gradient-to-r from-black via-gray-900 to-indigo-900 text-white py-12 md:py-16">
      <MyContainer>
        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {title}
        </h1>

        {/* Rating Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
          <StarRating />
          <p className="text-lg font-medium">
            (82.6% সিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
          </p>
        </div>

        {/* Description */}
        <div
          className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-3xl"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </MyContainer>
    </div>
  );
}
