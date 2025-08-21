import HighlightedPhotos from "@/components/HighlightedPhotos";
import HighlightedPoem from "@/components/HighlightedPoem";
import HomeBanner from "@/components/HomeBanner";
import RecentPoem from "@/components/RecentPoem";
import Test from "@/components/Test";
export default function Home() {
  return (
    <main className="">
      <HomeBanner />
      <HighlightedPoem />
      <RecentPoem />
      <HighlightedPhotos />
      {/* <Test /> */}
    </main>
  );
}
