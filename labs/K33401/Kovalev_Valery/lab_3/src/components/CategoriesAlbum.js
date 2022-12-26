import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

const CategoriesAlbum = ({ categories }) => {
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {Object.entries(categories).map(([category, { photos, total }]) => (
                <div style={{ width: "100%", aspectRatio: "1/1", position: "relative" }}>
                    <Link
                        to={`/search/${category}`}
                        style={{ width: "100%" }}
                        className="w-100 absolute z-10 text-center text-xl font-light capitalize text-white backdrop-brightness-50"
                    >
                        {category}
                    </Link>
                    <Carousel effect="fade">
                        {photos.map(({ photo_image_url }) => (
                            <div
                                style={{
                                    width: "100%",
                                    aspectRatio: "1/1",
                                }}
                            >
                                <img
                                    style={{ width: "100%", objectFit: "cover", aspectRatio: "1/1" }}
                                    src={`${photo_image_url}?w=700`}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            ))}
        </div>
    );
};

export default CategoriesAlbum;
