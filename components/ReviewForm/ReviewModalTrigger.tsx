'use client';

import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import ReviewForm from './ReviewForm';
import styles from './ReviewModalTrigger.module.css';

export default function ReviewModalTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className={styles.trigger} onClick={() => setIsOpen(true)}>
        Leave your review
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ReviewForm onSuccess={() => setIsOpen(false)} />
      </Modal>
    </>
  );
}
