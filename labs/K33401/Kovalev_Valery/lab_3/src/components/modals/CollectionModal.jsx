import React, {useState} from 'react';
import {Button, Modal, Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {closeCollectionModal} from "../../store/slices/CollectionModalSlice";
import {updateCollection} from "../../store/actions/profileActions";

const CollectionModal = () => {
    const dispatch = useDispatch()
    const {open, selectedPhoto} = useSelector(state=>state.collectionModal)
    const {collections} = useSelector(state=>state.profile)
    const [selectedCollectionId, setSelectedCollectionId] = useState(-1)
    const close = () => {
        dispatch(closeCollectionModal())
    }

    //TODO https://stackoverflow.com/questions/51283562/how-to-add-the-input-field-inside-the-select-option-using-ant-design-and-react
    const onSelect = (collection_id) => {
        setSelectedCollectionId(collection_id)
    }

    const onFinish = () => {
        const selectedCollection = collections.find(e => (e.id === selectedCollectionId))
        const photo_ids = [...selectedCollection.photos.map(e=>(e.photo_id)), selectedPhoto.photo_id]
        dispatch(updateCollection({collection_id:selectedCollectionId,  photo_ids, title:selectedCollection.title}))
        dispatch(closeCollectionModal())
    }


    return (
        <Modal
            open={open}
            title="Title"
            onOk={close}
            onCancel={close}
            footer={[
                <Button key="submit" type="primary" onClick={onFinish}>
                    Submit
                </Button>,
            ]}
        >
            <Select onSelect={onSelect} placeholder="Select collection" className="w-full">
                {collections.map(e=>(
                    <Select.Option value={e.id}>{e.title}</Select.Option>
                ))}
            </Select>
        </Modal>
    );
};

export default CollectionModal;
