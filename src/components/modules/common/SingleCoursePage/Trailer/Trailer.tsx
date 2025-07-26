"use client";
import { ChecklistItem, CtaText, MediaItem } from "@/types/course";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon
} from "lucide-react";
import { useState } from "react";

export default function Trailer({
  media,
  checklist,
  ctaText,
}: {
  media: MediaItem[];
  checklist: ChecklistItem[];
  ctaText: CtaText;
}) {
  const [activeMedia, setActiveMedia] = useState<MediaItem>(media[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="w-full p-3 bg-white border border-gray-300 rounded-xl">
      {/* Video Player Section */}
      <div className="relative mb-6">
        {/* Main Video Container */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-video">
          {/* Video Background */}
          {!isPlaying ? (
            <img
              src={
                activeMedia?.resource_type === "video"
                  ? activeMedia?.thumbnail_url
                  : activeMedia?.resource_value
              }
              alt="IELTS Course Trailer"
              className="w-full h-full object-cover"
            />
          ) : activeMedia?.resource_type === "video" ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeMedia?.resource_value}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              src={activeMedia?.resource_value}
              alt="Media"
              className="w-full h-full object-cover"
            />
          )}

          {/* Play Button Overlay */}
          {activeMedia?.resource_type === "video" && !isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all duration-200 shadow-lg"
              >
                <PlayIcon className="w-12 h-12 text-green-600 ml-1" />
              </button>
            </div>
          ) : (
            ""
          )}

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              const currentIndex = media.indexOf(activeMedia);
              const prevIndex =
                (currentIndex - 1 + media.length) % media.length;
              setActiveMedia(media[prevIndex]);
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={() => {
              const currentIndex = media.indexOf(activeMedia);
              const nextIndex = (currentIndex + 1) % media.length;
              setActiveMedia(media[nextIndex]);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {media?.map((singleMedia: MediaItem, idx: number) => (
            <div
              key={idx}
              onClick={() => setActiveMedia(singleMedia)}
              style={{
                backgroundImage: `url(${
                  singleMedia?.resource_type === "video"
                    ? singleMedia?.thumbnail_url
                    : singleMedia?.resource_value
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className={`flex-shrink-0 flex items-center w-20 h-12 rounded border-2 cursor-pointer transition-all duration-200
                ${
                  activeMedia === singleMedia
                    ? "border-green-500"
                    : "border-gray-300"
                }
              `}
            >
              {singleMedia?.resource_type === "video" ? (
                <div className="flex items-center justify-center w-fit h-fit p-[5px] mx-auto my-auto bg-white rounded-full">
                  <PlayIcon className="w-4 h-4 text-gray-800" />
                </div>
              ) : (
                ""
              )}
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
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-lg">
          {ctaText?.value?.charAt(0).toUpperCase() + ctaText?.value?.slice(1)}
        </button>
      </div>

      {/* Course Features Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          এই কোর্সে যা থাকছে
        </h3>

        <div className="space-y-4">
          {checklist
            // ?.filter((feature) => feature?.list_page_visibility)
            ?.map((feature, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <img
                  src={feature?.icon}
                  alt="icon"
                  className="w-5 h-5 text-gray-600 flex-shrink-0"
                />
                <span className="text-gray-700">{feature.text}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
