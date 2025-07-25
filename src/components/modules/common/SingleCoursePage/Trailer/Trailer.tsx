import {
  Camera,
  Captions,
  ChevronLeftIcon,
  ChevronRightIcon,
  File,
  PlayIcon,
  Users,
} from "lucide-react";
import {
  ClockIcon,
  BookOpenIcon,
  GiftIcon,
  UserIcon,
  CalendarIcon,
} from "lucide-react";

const thumbnails = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: false },
  { id: 4, active: false },
  { id: 5, active: false },
  { id: 6, active: false },
];

const courseFeatures = [
  {
    icon: Users,
    text: "Total Enrolled 32995",
  },
  {
    icon: ClockIcon,
    text: "Time Required 50 hours",
  },
  {
    icon: Camera,
    text: "54 Videos",
  },
  {
    icon: File,
    text: "10 Reading & 10 Listening Mocktests",
  },
  {
    icon: Captions,
    text: "38 Lecture Sheets",
  },
  {
    icon: BookOpenIcon,
    text: "25 Video Lectures",
  },
  {
    icon: GiftIcon,
    text: "1 Free Hardcopy Book Delivered",
  },
  {
    icon: UserIcon,
    text: "Facebook Support Group",
  },
  {
    icon: CalendarIcon,
    text: "Course Validity Lifetime",
  },
];

export default function Trailer() {
  return (
    <div className="w-full p-3 bg-white border border-gray-300 rounded-xl">
      {/* Video Player Section */}
      <div className="relative mb-6">
        {/* Main Video Container */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-video">
          {/* Video Background */}
          <img
            src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
            alt="IELTS Course Trailer"
            className="w-full h-full object-cover"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all duration-200 shadow-lg">
              <PlayIcon className="w-12 h-12 text-green-600 ml-1" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200">
            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
          </button>

          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200">
            <ChevronRightIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {thumbnails.map((thumb) => (
            <div
              key={thumb.id}
              className={`flex-shrink-0 w-20 h-12 rounded border-2 cursor-pointer transition-all duration-200 ${
                thumb.active
                  ? "border-green-500 opacity-100"
                  : "border-gray-300 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                <PlayIcon className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl font-bold text-gray-900">৳3850</span>
          <span className="text-xl text-gray-500 line-through">৳5000</span>
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            ৳1150 ৳ ছাড়
          </span>
        </div>

        {/* Enroll Button */}
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg transition-colors duration-200 text-lg">
          Enroll
        </button>
      </div>

      {/* Course Features Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          এই কোর্সে যা থাকছে
        </h3>

        <div className="space-y-4">
          {courseFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <feature.icon className="w-5 h-5 text-gray-600 flex-shrink-0" />
              <span className="text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
