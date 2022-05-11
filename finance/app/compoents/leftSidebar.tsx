import {AiOutlineHome,AiOutlineUser,AiOutlineSend,AiOutlineHistory,AiOutlineSetting} from 'react-icons/ai';
import {BsChat,BsStar,BsFillPlusSquareFill,BsArrowDownUp} from 'react-icons/bs'

const  LeftSidebar =()=>{
    return(
        <div>
           <div className="flex flex-col gap-y-5 text-xl mt-20 ml-5">
               <AiOutlineHome />
               <AiOutlineUser />
               <BsChat />
               <AiOutlineSetting />
               <AiOutlineSend />
               <BsStar />
               <AiOutlineHistory />
               <BsArrowDownUp />
           </div>
        </div>
    )
}

export default LeftSidebar;