import React from 'react'

const Projects = () => {
    return (
        <div className="grid grid-rows-1 gap-4">
            <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-evenly"> 
                    <div class="p-10">  
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="" alt="Pickout Service card"/>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Pickout</div>
                                <p class="text-gray-700 text-base">
                                Pickout Service description
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="p-10">  
                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                <img class="w-full" src="" alt="YouBreakYouBuy card"/>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">YouBreakYouBuy</div>
                                    <p class="text-gray-700 text-base">
                                        YouBreakYouBuy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects