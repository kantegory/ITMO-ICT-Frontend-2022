import { API } from ".";

export const likePhoto = async (token, photo_id) => {
    await API.post(
        "user/likes/create",
        {
            photo: photo_id,
        },
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        }
    );
};

export const getLikes = async (token) => {
    const response = await API.get("user/likes/", {
        headers: {
            Authorization: `Token ${token}`,
        },
    });
    return response.data;
};

export const unlikePhoto = async (token, photo_id) => {
    await API.delete(`user/likes/${photo_id}`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    });
};
