import { Suspense } from "react";
import YandexMetrika from "./YandexMetrika";

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <YandexMetrika />
    </Suspense>
  );
}
