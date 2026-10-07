'use client';

import { useState, FormEvent } from 'react';
import styles from './ReviewForm.module.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ReviewForm({ onSuccess }: { onSuccess?: () => void }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/submit-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, text, website }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || 'Something went wrong, please try again');
        setStatus('error');
        return;
      }

      setStatus('success');
      setName('');
      setText('');
      setTimeout(() => onSuccess?.(), 2500);
    } catch {
      setErrorMessage('Something went wrong, please try again');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.form}>
        <p className={styles.success}>
          Thanks for sharing your thoughts! Your review is being looked over and may appear here
          soon.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Leave a review</h3>

      <label className={styles.field}>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          maxLength={100}
          disabled={status === 'submitting'}
        />
      </label>

      <label className={styles.field}>
        <span>Your review</span>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          required
          maxLength={2000}
          rows={4}
          disabled={status === 'submitting'}
        />
      </label>

      <label className={styles.hp} aria-hidden="true">
        <span>Website</span>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
      </label>

      {status === 'error' && <p className={styles.error}>{errorMessage}</p>}

      <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Submit review'}
      </button>
    </form>
  );
}
