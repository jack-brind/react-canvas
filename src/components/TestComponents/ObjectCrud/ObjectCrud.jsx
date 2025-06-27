import "./Crud.css";
import { useState } from "react";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
import { X, KeyRound } from "lucide-react";
import { RiBowlFill } from "react-icons/ri";
import Modal from "../../Modal/Modal.jsx";
import Banner from "../../Banner/Banner.jsx";
import { TbCodeCircle2Filled } from "react-icons/tb";

// ============ Housing component ============
export default function ObjectCrud() {
  const currentPageData = pages.find((page) => page.link === "objectCrud");

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEditItem = () => {
    console.log("Item edited");
    setShowModal(false);
  };

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This page is a practice arena for working with objects in arrays. It covers CRUD operations while learning React's immutable state patterns – creating new objects instead of modifying existing ones."
      />
      <Banner
        title="Object CRUD practice"
        intent="custom"
        icon={<TbCodeCircle2Filled />}
        canDismiss
        width="60%"
        alignment="flex-start"
      >
        CRUD stands for Create, Read, Update, Delete and these lists will work
        with object CRUD.
      </Banner>
      <ListOne openModal={openModal} />
      <Modal
        isOpen={showModal}
        onClose={closeModal}
        size="sm"
        icon={<KeyRound />}
        title="Password protected"
        subtitle="This case study is protected by a password due to an NDA with PandaDoc. Please enter the password provided to access the case study."
        confirmText="Access"
        cancelText="Cancel"
        onConfirm={handleEditItem}
      >
        <label>This is the label</label>
        <input type="text" />
      </Modal>
    </>
  );
}

function ListOne({ openModal }) {
  return (
    <>
      <h1>List one</h1>
      <button className="button__default" onClick={openModal}>
        Open Modal
      </button>
      <Modal />
    </>
  );
}
