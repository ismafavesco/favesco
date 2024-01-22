import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react'; 
import Contact from '../Contact/Contact';

function Modal({ onClose }) {
    const modalRef = useRef();

    useEffect(() => {
        // When the modal is open, set the body's overflow to hidden
        document.body.style.overflow = 'hidden';

        // When the modal is closed or unmounted, reset the body's overflow
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []); // The empty array ensures this effect runs once on mount and on unmount

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center p-4"
            ref={modalRef}
            onClick={closeModal} // to close the modal when the overlay is clicked
        >
            <div 
                className="bg-white rounded-lg w-full max-w-md mx-auto overflow-y-auto p-6"
                onClick={e => e.stopPropagation()} // to prevent clicks from closing the modal
            >
                <button onClick={onClose} className="text-gray-600 float-right">
                    <X size={30} />
                </button>
                {/* Modal Content */}
                <h1 className="text-black text-4xl lg:text-4xl font-semibold text-center  lg:my-5">
                Contact Us
                    </h1>
                <Contact />
            </div>
        </div>
    )
}

export default Modal;
