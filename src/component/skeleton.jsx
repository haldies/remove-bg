const SkeletonPage = () => {
    return (
        <div className='flex flex-col items-center w-auto ml-5 mr-5  '>
            <div class="animate-pulse flex space-x-4 ">
                <div class="flex-1 space-y-6 py-1">
                    <div class="space-y-3 flex flex-col items-center">
                        <div class="h-10  w-96 bg-slate-200 rounded col-span-2"></div>
                        <div class="h-10 w-80 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
            <div class="border border-blue-300 shadow rounded-md p-4 w-full mt-14 mb-14 max-w-[674px]">
                <div class="animate-pulse flex space-x-4">
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-96 bg-slate-200 rounded"></div>
                        <div class="space-y-3 flex flex-col items-center">
                            <div class="h-10  w-44 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-10 w-48 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkeletonPage;