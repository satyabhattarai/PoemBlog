import HighlightedPhotos from "@/components/HighlightedPhotos";
import HighlightedPoem from "@/components/HighlightedPoem";
import HomeBanner from "@/components/HomeBanner";
export default function Home() {
  return (
    <main className="">
      <HomeBanner />
      <HighlightedPoem />
      <HighlightedPhotos />
    </main>
  );
}
