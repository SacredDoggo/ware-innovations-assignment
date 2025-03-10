export const CatalougeRequest = () => {
    return (
        <div className="flex justify-center p-10 m-2 bg-secondary">
            <div className="w-full max-w-[1000px] gap-y-10 flex flex-col">
                <p className="w-full text-center text-[20px] font-bold">
                    Request a Horeca Catalogue
                </p>
                <div className="w-full flex flex-col gap-y-6">
                    <div className="flex gap-x-2">
                        <div className="flex flex-col w-[50%] gap-y-2">
                            <span className="text-[14px]">Name</span>
                            <input className="bg-white w-full p-2" />
                        </div>
                        <div className="flex flex-col w-[50%] gap-y-2">
                            <span className="text-[14px]">Email</span>
                            <input className="bg-white w-full p-2" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-y-2">
                        <span className="text-[14px]">Phone</span>
                        <input className="bg-white w-full p-2" />
                    </div>
                    <button className="py-3 px-6 bg-primary text-white w-fit">Send</button>
                </div>
            </div>
        </div>
    );
}