import { CgSpinner } from "react-icons/cg";

const Loading=()=>{
    return(
        <div className="flex flex-row items-center gap-4 text-black mt-10">
            <CgSpinner size={35} className="animate-spin" />
            <p className="text-xl">Loading ...</p>
        </div>
    )
}

export default Loading;