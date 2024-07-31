import { useState } from 'react';
import Link from 'next/link';
import Modal from './Modal';
import { useRouter } from "next/navigation";

const AdminLink = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const correctPassword = process.env.NEXT_PUBLIC_CORRECT_PASSWORD;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPassword('');
    setError('');
  };

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
      handleCloseModal();
      router.push('/admin/room/rooms');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <Link href="/admin/room/rooms" className="hover:underline">
          Admin
        </Link>
      ) : (
        <span onClick={handleOpenModal} className="hover:underline cursor-pointer">
          Admin
        </span>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handlePasswordSubmit}
        password={password}
        setPassword={setPassword}
        error={error}
      />
    </div>
  );
};

export default AdminLink;
