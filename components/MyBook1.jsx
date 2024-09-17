"use client";
import HTMLFlipBook from "react-pageflip";
import PageText from "@/public/pageText";

import Page from "./Page";
import Page2 from "./Page2";
import Cover from "./Cover";
import EndPage from "./EndPage";
function MyBook({ color }) {
  return (
    <HTMLFlipBook
      width={350}
      height={525}
      showPageCorners={true}
      showCover={true}
    >
      {/* <div>
        <Cover Color="bg-blue-300" Title={PageText.Cover.head} Footer={PageText.Cover.footer}/>
      </div>
      <div>
        <Page2
          Color="bg-red-400"
          Header={PageText.Page1.head}
          Content={PageText.Page1.content}
          Footer ={PageText.Page1.footer}
        />
      </div>
      <div>
        <Page2
          Color="bg-gray-500"
          Header={PageText.Page2.head}
          Content={PageText.Page2.content}
        />
      </div>
      <div>
        <Page2
          Color="bg-red-400"
          Header={PageText.Page3.head}
          Content={PageText.Page3.content}
        />
      </div>
      <div>
        <Page2
          Color="bg-zinc-600"
          Header={PageText.Page4.head}
          Content={PageText.Page4.content}
        />
      </div>
      <div>
        <Page2
          Color="bg-orange-400"
          Header={PageText.Page5.head}
          Content={PageText.Page5.content}
        />
      </div>
      <div>
        <Cover
          Color="bg-blue-300"
          Title={PageText.EndPage.head}
          Footer={PageText.EndPage.footer}
        />
      </div> */}
      <div>
        <EndPage Color={PageText.EndPage.color} />
      </div>
    </HTMLFlipBook>
  );
}

export default MyBook;
