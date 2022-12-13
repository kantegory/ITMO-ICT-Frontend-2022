import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from "./PreviewPhoto.module.css"
import {useOutsideClick} from "../../hooks/useOutsideClick";
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";
import PhotoCard from "../PhotoCard/PhotoCard";

const PreviewPhoto = (photo) => {
    // const [show, setShow] = useState(false);
    // const context = useContext(Context)
    // const [previewPhoto, setPreviewPhoto] = [context.previewPhoto, context.setPreviewPhoto]

    // const handleClose = () => {
    //     setShow(false)
    //     setPreviewPhoto([])
    // };
    // const handleShow = () => setShow(true);
    //
    // useEffect(()=>{
    //     if(previewPhoto.photo_image_url){
    //         handleShow()
    //     }
    // }, [previewPhoto])



    return (
        <>
            {/*<Modal show={show} onHide={handleClose}>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>Modal heading</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>*/}
            {/*        <PhotoCard photo={previewPhoto}/>*/}
            {/*    </Modal.Body>*/}
            {/*    <Modal.Footer>*/}
            {/*        <Button variant="secondary" onClick={handleClose}>*/}
            {/*            Close*/}
            {/*        </Button>*/}
            {/*        <Button variant="primary" onClick={handleClose}>*/}
            {/*            Save Changes*/}
            {/*        </Button>*/}
            {/*    </Modal.Footer>*/}
            {/*</Modal>*/}
        </>
    );
};

export default PreviewPhoto;
