"use client";
interface DataLayerProps {
  fingerprint: number;
}
export default function BaseDataLayer({ fingerprint }: DataLayerProps) {
  return (
    <>
      <span>fingerprint: {fingerprint}</span>
      <br />
      {window && window.dataLayer && (
        <pre>{JSON.stringify(window.dataLayer, null, 4)}</pre>
      )}
    </>
  );
}
