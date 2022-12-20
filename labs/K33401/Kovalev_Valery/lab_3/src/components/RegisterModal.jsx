import React from 'react'
import {Modal} from "antd"

function RegisterModal({isRegisterModalOpen, setIsRegisterModalOpen}) {
  return (
    <Modal title="Register" open={isRegisterModalOpen} onOk={()=>{setIsRegisterModalOpen(false)}} onCancel={()=>{setIsRegisterModalOpen(false)}}>

    </Modal>
  )
}

RegisterModal.propTypes = {}

export default RegisterModal
