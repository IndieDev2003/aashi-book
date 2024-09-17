import { Suspense } from "react";
// import PageText from "@/public/pageText";
import MyBook from "@/components/MyBook";
import Loading from "@/components/Loading";
import EndPage from "@/components/EndPage";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <MyBook />
        {/* <Loading /> */}
        {/* <EndPage/> */}
      </Suspense>
    </>
  );
}
