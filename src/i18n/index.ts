import { en } from "./en";
import { az } from "./az";
import { ru } from "./ru";

export type Locale = "en" | "az" | "ru";

export const locales: Locale[] = ["en", "az", "ru"];

const dictionaries = { en, az, ru } as const;

export type Dict = Record<string, string>;

export function getDict(locale: Locale): Dict {
  if (locale === "en") return { ...en };
  return { ...en, ...dictionaries[locale] };
}

export function t(dict: Dict, key: string): string {
  return dict[key] ?? key;
}

export function localePath(locale: Locale, hash = ""): string {
  const base = locale === "en" ? "/" : `/${locale}/`;
  return hash ? `${base}${hash}` : base;
}

export function pathForLocale(locale: Locale): string {
  return locale === "en" ? "/" : `/${locale}/`;
}
