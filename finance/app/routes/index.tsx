import LeftSidebar from "../compoents/leftSidebar";
import RightSidebar from "../compoents/rightSidebar"
import Contents from "../compoents/contents"

export default function Index() {
  return (
    <div className="bg-primary w-full h-fit drop-shadow-lg rounded-lg flex flex-row gap-10 m-3">
        <div className="w-fit h-fit">
          <LeftSidebar />
        </div>
        <div className="px-14 border-l-[0.02rem]  w-fit h-fit">
          <Contents />  
        </div>
        <div className="w-fit h-fit">
          <RightSidebar />
        </div>
    </div>
  );
}
