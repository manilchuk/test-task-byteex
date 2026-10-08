import { useState } from 'react';
import { useClient, useDocumentOperation, type DocumentActionComponent } from 'sanity';

export const ApproveReviewAction: DocumentActionComponent = props => {
  const client = useClient({ apiVersion: '2024-01-01' });
  const { patch, publish } = useDocumentOperation(props.id, props.type);
  const [isRunning, setIsRunning] = useState(false);

  return {
    label: 'Approve & Transfer to Fans',
    disabled: isRunning || props.type !== 'reviewSubmission',
    onHandle: async () => {
      setIsRunning(true);

      try {
        const doc = props.published ?? props.draft;
        if (!doc) return;

        const { name, text, rating } = doc as {
          name?: string;
          text?: string;
          rating?: number;
        };

        if (!name || !text || !rating) {
          setIsRunning(false);
          return;
        }

        const fansDoc = await client.fetch<{ _id: string } | null>(`*[_type == "fans"][0]{ _id }`);

        if (!fansDoc?._id) {
          setIsRunning(false);
          return;
        }

        const newTestimonial = {
          _key: crypto.randomUUID(),
          _type: 'testimonial',
          name,
          text,
          rating,
        };

        await client
          .patch(fansDoc._id)
          .setIfMissing({ testimonials: [] })
          .append('testimonials', [newTestimonial])
          .commit();

        patch.execute([{ set: { reviewed: true } }]);
        publish.execute();

        setIsRunning(false);
      } catch (error) {
        console.error('Failed to approve review:', error);
        setIsRunning(false);
      }
    },
  };
};
