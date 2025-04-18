// profile metadata layout
import type { Metadata } from "next";


// default metadata fallback
export const metadata: Metadata = {
  title: "IMM Grad Show 2025 | Profiles",
  description: "Sheridan IMM | Graduate Showcase 2025",
};

export default function ProfilesLayout({ children }: { children: React.ReactNode }) {
  return children;
}