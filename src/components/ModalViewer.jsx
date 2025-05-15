import Modal from 'react-modal';
import React from 'react';

const ModalViewer = ({ src, onClose }) => (
  <Modal isOpen={!!src} onRequestClose={onClose} className="flex items-center justify-center">
    <div className="bg-black bg-opacity-90 p-4 rounded-lg">
      <img src={src} alt="Zoomed" className="max-h-[80vh] mx-auto" />
      <button onClick={onClose} className="text-white mt-4 block mx-auto">Close</button>
    </div>
  </Modal>
);

export default ModalViewer;
