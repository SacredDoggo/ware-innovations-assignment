import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import Image from "next/image";


export const Footer = () => {
    return (
        <div className="bg-footer w-full text-[12px] py-14 px-10">
            <div className="flex w-full flex-col gap-y-10">
                <div className="flex flex-col sm:flex-row gap-y-2 justify-between">
                <div className="sm:w-[33.33%] flex sm:hidden flex-col gap-y-2 items-center">
                        <Image
                            src="/logo/2.png"
                            alt="Logo"
                            height={43}
                            width={120}
                            className="md:h-[73px] md:w-[200px] cursor-pointer"
                        />
                        <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center">
                            <InstagramIcon />
                            <FacebookIcon />
                            <YoutubeIcon />
                            <TwitterIcon />
                            <LinkedinIcon />
                        </div>
                    </div>
                    <div className="sm:w-[33.33%] flex flex-col gap-y-2 items-start">
                        <span>About us</span>
                        <span>Ware store - Lower Parel, Mumbai</span>
                        <span>Restaurant & café tableware</span>
                        <span>Blogs - Our learnings & thoughts</span>
                        <span>Return or Exchange your order</span>
                        <span>{`Events - you don't want to miss`}</span>
                        <span>Care & Features</span>
                        <span>Return, Exchange & Refund Policy</span>
                        <span>Shipping Policy</span>
                        <span>Privacy Policy</span>
                        <span>Terms & Conditions</span>
                        <span>Terms of Service</span>
                        <span>Track Your Order</span>
                    </div>
                    <div className="sm:w-[33.33%] hidden sm:flex flex-col gap-y-2 items-center">
                        <Image
                            src="/logo/2.png"
                            alt="Logo"
                            height={43}
                            width={120}
                            className="md:h-[73px] md:w-[200px] cursor-pointer"
                        />
                        <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center">
                            <InstagramIcon />
                            <FacebookIcon />
                            <YoutubeIcon />
                            <TwitterIcon />
                            <LinkedinIcon />
                        </div>
                    </div>
                    <div className="sm:w-[33.33%] flex justify-end">
                        <div className="flex flex-col gap-y-2">
                            <p className="font-bold mb-4">Contact us:</p>
                            <p className="font-bold">Customer support</p>
                            <p className="mb-4">hello@wareinnovations.com</p>
                            <p className="font-bold">Job enquiry:</p>
                            <p className="mb-4">careers@wareinnovations.com</p>
                            <p className="mb-4"><span className="font-bold">Phone:</span> <span>+91 9082820610</span></p>
                            <p className="mb-4"><span className="font-bold">Store:</span> <a href="https://maps.app.goo.gl/kqjAk6A7EgVkZ4st7" className="cursor-pointer">Ware Innovations, Raghuvanshi Mills, Lower Parel, Mumbai 400013</a></p>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <p className="w-full text-center"> ©2025 Ware Innovations Mumbai. Powered by NextJS.</p>
                </div>
            </div>
        </div>
    );
}