import Link from "next/link"

import { FaGithub, FaExclamationCircle } from "react-icons/fa";

const Header=()=>{
    return(
        <div>
            <div className="flex justify-center bg-[#5c67ff] hover:opacity-90 text-white text-sm text-center py-2 px-8">
                <Link
                  href={"https://github.com/alimazhar4/crypto-swap-and-bridge-dapp"}
                  target="_blank"
                  className="font-semibold flex flex-row gap-2 flex-wrap justify-center items-center"
                >
                  <FaGithub size={30} color="#ffffff" />
                  <span>Click Here To View Source Code at Github</span>
                </Link>
            </div>
            <div className="mt-8 text-center text-black px-6 flex flex-col">
                <h1 className="text-5xl font-bold">
                    Crypto Swap & Bridge dApp
                </h1>
                <p className="text-lg mt-2">Swap or Bridge cryptocurrencies across multiple networks using the LiFi Network</p>
                <div className="flex flex-row items-center gap-2 mx-auto text-[#ff0000]">
                    <FaExclamationCircle size={20}/>
                    <p className="text-sm font-semibold">Use Only for Learning Purposes</p>
                </div>
            </div>
            
        </div>
    )
}

export default Header;