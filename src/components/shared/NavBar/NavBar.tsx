"use client";
import MyContainer from "@/components/ui/core/MyContainer/MyContainer";
import {
  selectCurrentLanguage,
  setLanguage,
} from "@/redux/features/language/languageSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setLanguageCookie } from "@/utils/setLanguageCookie";

const NavBar = () => {
  const activeLanguage = useAppSelector(selectCurrentLanguage);
  const dispatch = useAppDispatch();
  return (
    <nav className="sticky top-0 bg-white">
      <MyContainer className="flex items-center justify-between py-4 text-slate-800">
        <h2 className="text-xl font-bold">10 minute school</h2>
        <button
          className="px-4 py-2 border border-gray-300 text-gray-900 rounded transition-colors"
          onClick={() => {
            dispatch(
              setLanguage({ language: activeLanguage === "en" ? "bn" : "en" })
            );
            setLanguageCookie(activeLanguage === "en" ? "bn" : "en");
            window.location.reload();
          }}
        >
          {activeLanguage === "bn" ? "English" : "বাংলা"}
        </button>
      </MyContainer>
    </nav>
  );
};

export default NavBar;
