import React, { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-end"
      onClick={handleClickOutside}
    >
      <div className="bg-white w-full max-w-md h-full shadow-lg p-6 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Title</h2>
          <button onClick={onClose}>
            <IoCloseOutline size={24} />
          </button>
        </div>
        <div>
          <div className="mb-4">
            <p className="font-medium">Status</p>
            <p className="text-gray-500">Not selected</p>
          </div>
          <div className="mb-4">
            <p className="font-medium">Priority</p>
            <p className="text-gray-500">Not selected</p>
          </div>
          <div className="mb-4">
            <p className="font-medium">Deadline</p>
            <p className="text-gray-500">Not selected</p>
          </div>
          <div className="mb-4">
            <p className="font-medium">Description</p>
            <p className="text-gray-500">Not selected</p>
          </div>
          <button className="text-blue-500">Add custom property</button>
          <div className="mt-6">
            <p className="text-gray-500">
              Start writing, or drag your own files here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
