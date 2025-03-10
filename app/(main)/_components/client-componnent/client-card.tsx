import Image from "next/image";

interface ClientCardProps {
    imageSrc: string;
    title: string;
    subTitle: string;
}

export const ClientCard = ({ imageSrc, title, subTitle }: ClientCardProps) => {
    return (
        <div className="w-[250px] flex flex-col gap-y-2 items-center">
            <Image
                src={imageSrc}
                alt={title}
                height={312.5}
                width={250}
                className="object-cover w-full h-full "
            />
            <p className="text-center">{title}</p>
            <p className="italic text-center text-sm text-foreground/70">{subTitle}</p>
        </div>
    );
}