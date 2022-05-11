import LeftSidebar from "../compoents/leftSidebar";
import RightSidebar from "../compoents/rightSidebar"
import Contents from "../compoents/contents"

export default function Index() {
  return (
    <div className="bg-primary w-full h-fit drop-shadow-sm rounded-lg grid grid-rows-1 grid-cols-3">
        <div>
          <LeftSidebar />
        </div>
        <div>
          <Contents />  
        </div>
        <div>
          <RightSidebar />
        </div>
    </div>
  );
}
