export const setLanguageCookie = (lang: "en" | "bn") => {
  document.cookie = `lang=${lang}; path=/; max-age=31536000`; // 1 year
};
