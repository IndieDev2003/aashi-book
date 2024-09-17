"use client";
import HTMLFlipBook from "react-pageflip";
import PageText from "@/public/pageText";

import Page from "./Page";
import Page2 from "./Page2";
import Cover from "./Cover";
import EndPage from "./EndPage";

// import coverImg from "@public/images/cover.jpg"
// import endImg from "@public/images/end.jpg";

function MyBook({ color }) {
  return (
    <HTMLFlipBook
      width={350}
      height={525}
      showPageCorners={true}
      showCover={true}
    >
      {/* Cover Page */}
      <div>
        <Cover
          Color="bg-orange-300"
          Title={PageText.Cover.head}
          Content={PageText.Cover.content}
          Footer={PageText.Cover.footer}
          // Image={coverImg}
        />
      </div>

      {/* Page 1 */}
      <div>
        <Page2
          Color="bg-pink-400"
          Header={PageText.Page1.head}
          Content={PageText.Page1.content}
          Footer={PageText.Page1.footer}
        />
      </div>

      {/* Page 2 */}
      <div>
        <Page
          Color="bg-red-200"
          Header={PageText.Page2.head}
          Content={PageText.Page2.content}
          Footer={PageText.Page2.footer}
        />
      </div>

      {/* Page 3 */}
      <div>
        <Page2
          Color="bg-purple-300"
          Header={PageText.Page3.head}
          Content={PageText.Page3.content}
          Footer={PageText.Page3.footer}
        />
      </div>

      {/* Page 4 */}
      <div>
        <Page
          Color="bg-yellow-300"
          Header={PageText.Page4.head}
          Content={PageText.Page4.content}
          Footer={PageText.Page4.footer}
        />
      </div>

      {/* Page 5 */}
      <div>
        <Page2
          Color="bg-green-200"
          Header={PageText.Page5.head}
          Content={PageText.Page5.content}
          Footer={PageText.Page5.footer}
        />
      </div>

      {/* Page 6 */}
      <div>
        <Page
          Color="bg-blue-200"
          Header={PageText.Page6.head}
          Content={PageText.Page6.content}
          Footer={PageText.Page6.footer}
        />
      </div>

      {/* Page 7 */}
      <div>
        <Page2
          Color="bg-indigo-300"
          Header={PageText.Page7.head}
          Content={PageText.Page7.content}
          Footer={PageText.Page7.footer}
        />
      </div>

      {/* End Page */}
      <div>
        <EndPage
          Color="bg-gray-200"
          Title={PageText.EndPage.head}
          Footer={PageText.EndPage.footer}
          Content={PageText.EndPage.content}
          // Images={endImg}
        />
      </div>
    </HTMLFlipBook>
  );
}

export default MyBook;
