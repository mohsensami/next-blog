import Image from "next/image";
import Link from "next/link";

export default function author({ name, img, designation }) {
    if (!name && !img) return <></>;

    return (
        <div className="author flex py-5">
            <Image src={img || ""} width={60} height={60} className="rounded-full"></Image>
            <div className="flex flex-col justify-center px-4">
                <Link legacyBehavior href={"/"}>
                    <a className="text-sm font-bold text-gray-800 hover:text-gray-600">{name || "No Name"}</a>
                </Link>
                <span className="text-xs text-gray-500 pt-2">{designation || ""}</span>
            </div>
        </div>
    );
}
