import { useState } from "react";
import Reviews from "./Reviews";

const ChangingDev = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <div className="flex items-center justify-center py-[10px] border-t border-b border-[#dfdfdf] gap-2 mb-4">
        <button onClick={() => setActiveTab("tab1")} className={`cursor-pointer !font-thin py-[7px] px-[20px] transition-colors ${activeTab === "tab1" ? "bg-[#e55472] text-[#fff] border-1 border-[#e55472]" : "bg-[#424242] text-[#fff]"}`}>
          Description
        </button>

        <button onClick={() => setActiveTab("tab2")} className={`cursor-pointer !font-thin py-[7px] px-[20px] transition-colors ${activeTab === "tab2" ? "bg-[#e55472] text-[#fff] border-1 border-[#e55472]" : "bg-[#424242] text-[#fff]"}`}>
          Reviews
        </button>

        <button onClick={() => setActiveTab("tab3")} className={`cursor-pointer !font-thin py-[7px] px-[20px] transition-colors ${activeTab === "tab3" ? "bg-[#e55472] text-[#fff] border-1 border-[#e55472]" : "bg-[#424242] text-[#fff]"}`}>
          Shipping
        </button>
      </div>

      <div>
        {activeTab === "tab1" && (
          <div className="w-[100%] flex items-center justify-center flex-wrap">
            <p className="text-[#000] text-[16px] text-center !font-thin leading-[2.5]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost exercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepte sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volu accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explica Nemllo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className=":w-[100%] flex items-center justify-center gap-[20px]">
            <Reviews />
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="w-[100%] flex items-start justify-start flex-wrap gap-[24px] p-[10px]">
            <h4 className="!font-thin text-[#010101] text-[16px] border-b border-[#dfdfdf] py-[10px]">Shipping policy for our store</h4>
            <p className="!font-thin text-[#000] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptates rerum neque ea libero numquam officiis ipsum, consectetur ducimus dicta in earum repellat sunt ab odit laboriosam cupiditate ipsam, doloremque.</p>
            <ul className="flex items-start justify-start flex-col gap-[20px] list-disc pl-5">
              <li className="!font-thin text-[#666] text-[16px] ">1-2 business days (Typically by end of day)</li>
              <li className="!font-thin text-[#666] text-[16px] ">30 days money back guaranty</li>
              <li className="!font-thin text-[#666] text-[16px] ">24/7 live support</li>
              <li className="!font-thin text-[#666] text-[16px] ">odio dignissim qui blandit praesent</li>
              <li className="!font-thin text-[#666] text-[16px] ">luptatum zzril delenit augue duis dolore</li>
              <li className="!font-thin text-[#666] text-[16px] ">te feugait nulla facilisi.</li>
            </ul>
            <p className="!font-thin text-[#000] text=[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia vel eligendi ipsam. Ea, quasi quam ducimus recusandae unde ipsa nam rem a minus tenetur quae sint voluptatem voluptate inventore.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ChangingDev;
