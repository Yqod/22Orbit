import SplitText from "./SplitText";


const Hero = () => {
    return (
        <div className="relative bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321]">
    

    <section className="overflow-hidden pt-20 pb-6 lg:pt-[1px] lg:pb-[10px]">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[800px] lg:min-h-[800px] ">
            <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                <div className="h-full px-4 pt-24 pb-4 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
                    <div className="flex flex-col justify-between flex-1 h-full pt-12 lg:pt-16">
                        <div>
                            <h1 className="font-bebas text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">Webseiten<br /> Die Begeistern</h1>
                            <p className="text-[#748cab] text-lg sm:text-xl md:text-2xl font-light mb-6 leading-relaxed">Deine Website ist der Schlüssel zu deinem Erfolg im digitalen Zeitalter.</p>
                            <a href="#section1" title="" className="inline-flex items-center px-6 py-5 bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg sm:text-xl" role="button"> Entdecke unser Angebot</a>
                        </div>

                        <div className="mt-8 border-t-2 border-[#f0ebd8] lg:mt-auto sm:mt-14">
                            <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                                <p className="text-base font-semibold text-[#f0ebd8]">Kunden vertrauen uns</p>

                                <div className="flex items-center mt-5 space-x-5 sm:mt-0">
                                    <a href="https://www.google.com/search?client=firefox-b-d&sca_esv=c0ca25e8fd581d08&tbm=lcl&sxsrf=AE3TifOi2-gCihEglyXSi3Wy0Nsq4seAxQ:1757593849842&q=22Orbit+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDY0MDa0MDO1MDewtDAyMTYxMd3AyPiKUdjIyL8oKbNEISi1KjWvODM_LzVvESs2UQA96ccgRwAAAA&rldimm=13103186587098243445&hl=de-DE&sa=X&ved=2ahUKEwjv9NCo29CPAxXi1wIHHR0xGfkQ9fQKegQIVBAH&biw=1440&bih=768&dpr=2#lkt=LocalPoiReviews" title="" className="block transition-all duration-200 hover:opacity-80 focus:opacity-80" role="button">
                                        <img className="w-auto rounded h-14 sm:h-16 pr-60" src="/Google5.png" alt="" />
                                    </a>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-1 pt-10">
    <div className="lg:absolute lg:bottom-0 lg:left-0 -mt-12 lg:mt-0">
        <img className="w-full" src="/22OrbitHand.png" alt="" />
    </div>
</div>
        </div>
    </section>
</div>

    )
}

export default Hero;