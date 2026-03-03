const Footer=()=>{
    return(
    <div className="w-full">
        <div className="max-w-screen-xl mx-auto py-10 flex items-center justify-between gap-15">
            <div>
                <h1 className="text-[12rem] font-semibold leading-none tracking-tight">refokus.</h1>
            </div>
                <div className="flex flex-col ml-15 gap-5 font-semibold text-zinc-600">
                    <div className="relative bottom-3">Socials</div>
                    <div >
                        <p className="cursor-pointer mb-1 hover:text-violet-500">Instagram</p>
                        <p className="cursor-pointer mb-1 hover:text-violet-500">Twitter(X?)</p>
                        <p className="cursor-pointer mb-1 hover:text-violet-500">Linkedin</p>
                    </div>
                </div>
            
            <div className="flex flex-col gap-5 font-semibold text-zinc-600">
                <div>Sitemap</div>
                    <div>
                        <p className="cursor-pointer mb-1 hover:text-violet-500">Home</p>
                        <p className="cursor-pointer mb-1 hover:text-violet-500">Work</p>
                        <p className="cursor-pointer mb-1 hover:text-violet-500">Carrers</p>
                        <p className="cursor-pointer hover:text-violet-500">Contact</p>
                    </div></div>
            <div className="w-55">
                <h1 className="font-semibold">Refokus is a poineering digital agency driven by design and empowered by technology</h1>

                <button className="py-2 px-4 bg-violet-600 mt-5 ml-10 cursor-pointer hover:bg-violet-700">Enterprise Partner</button>
            </div>
        </div>
    </div>
    )
}

export default Footer;