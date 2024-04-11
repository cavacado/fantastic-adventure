import dynamic from "next/dynamic";

// make explicitly client component
export const DataLayer = dynamic(() => import("./BaseDataLayer"), {
  ssr: false,
});
