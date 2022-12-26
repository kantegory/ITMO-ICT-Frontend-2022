import React from "react";
import { HeartFilled, PlusSquareFilled } from "@ant-design/icons";
import { Card, Image } from "antd";

const getUsername = (username) => {
    if (username.length > 8) {
        return `@${username.slice(0, 8)}...`;
    } else {
        return `@${username}`;
    }
};
const PhotoCard = ({ photo }) => {
    return (
        <Card
            cover={<Image src={`${photo.photo_image_url}?w=700`} preview={{ src: photo.photo_image_url }} />}
            actions={[
                <div style={{ textOverflow: "ellipsis" }}>{getUsername(photo.photographer_username)}</div>,
                <HeartFilled style={{ fontSize: "20px" }} key="like" />,
                <PlusSquareFilled style={{ fontSize: "20px" }} key="add" />,
            ]}
            type="inner"
            size="small"
            bodyStyle={{ display: "none" }}
        ></Card>
    );
};
export default PhotoCard;
