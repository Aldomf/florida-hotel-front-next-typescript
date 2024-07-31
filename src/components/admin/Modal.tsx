import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    error: string;
  }

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, password, setPassword, error }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Enter Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded text-black"
        />
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-200 p-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
