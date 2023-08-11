import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = () => {
    return (
        <Link
            href={'/productDetails/Product'}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <Image
                width={500}
                height={500}
                src='/p1.png'
                alt={'product'}
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">Product name</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;2202
                    </p>

                       
                            <p className="text-base  font-medium line-through">
                                &#8377;122
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                10
                                % off
                            </p>
                     
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;