import { useState } from 'react';
import { supabase } from '../lib/supabase';

const PHONE_REGEX = /^(\+92|0)3\d{9}$/;

function normalizePhone(value) {
  return value.replace(/[\s-]/g, '');
}

export default function ReviewForm() {
  const [formData, setFormData] = useState({ name: '', number: '', review: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const next = {};

    if (!formData.name.trim()) {
      next.name = 'Enter your name.';
    }

    const cleanedPhone = normalizePhone(formData.number);
    if (!cleanedPhone) {
      next.number = 'Enter your phone number.';
    } else if (!PHONE_REGEX.test(cleanedPhone)) {
      next.number = 'Enter a valid number, e.g. 03XX XXXXXXX or +923XXXXXXXXX.';
    }

    if (!formData.review.trim()) {
      next.review = 'Write a short review.';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    if (!validate()) return;

    setLoading(true);

    const { error } = await supabase
      .from('reviews')
      .insert([{
        display_name: formData.name.trim(),
        phone_number: normalizePhone(formData.number),
        review_text: formData.review.trim()
      }]);

    setLoading(false);

    if (error) {
      setStatus('Error sending review.');
    } else {
      setStatus('Review sent successfully!');
      setFormData({ name: '', number: '', review: '' });
      setErrors({});
    }
  };

  const fieldClass = (hasError) =>
    `review-input w-full bg-navy-deep/60 border rounded-lg px-4 py-3 text-paper placeholder-paper/30 focus:outline-none transition-colors ${
      hasError ? 'border-red-400 focus:border-red-400' : 'border-paper/15 focus:border-amber'
    }`;

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <style>{`
        .review-input {
          color: #F5F1E8 !important;
          caret-color: #F5B942;
        }
        .review-input:-webkit-autofill,
        .review-input:-webkit-autofill:hover,
        .review-input:-webkit-autofill:focus {
          -webkit-text-fill-color: #F5F1E8 !important;
          -webkit-box-shadow: 0 0 0px 1000px rgba(11, 29, 51, 0.6) inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      <p className="text-amber text-xs tracking-widest font-mono mb-2">FEEDBACK</p>
      <h2 className="text-2xl font-bold text-paper mb-1">Submit a review</h2>
      <p className="text-paper/60 text-sm mb-8">
        Tell us about your experience. We read every submission.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label className="block text-xs tracking-wide text-paper/50 mb-1.5" htmlFor="rf-name">
            Name
          </label>
          <input
            id="rf-name"
            autoComplete="off"
            className={fieldClass(!!errors.name)}
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs tracking-wide text-paper/50 mb-1.5" htmlFor="rf-number">
            Phone number
          </label>
          <input
            id="rf-number"
            type="tel"
            autoComplete="off"
            className={fieldClass(!!errors.number)}
            placeholder="03XX XXXXXXX"
            value={formData.number}
            onChange={(e) => setFormData({ ...formData, number: e.target.value })}
          />
          {errors.number && <p className="text-red-400 text-xs mt-1">{errors.number}</p>}
        </div>

        <div>
          <label className="block text-xs tracking-wide text-paper/50 mb-1.5" htmlFor="rf-review">
            Review
          </label>
          <textarea
            id="rf-review"
            rows={4}
            autoComplete="off"
            className={`${fieldClass(!!errors.review)} resize-none`}
            placeholder="What was your experience like?"
            value={formData.review}
            onChange={(e) => setFormData({ ...formData, review: e.target.value })}
          />
          {errors.review && <p className="text-red-400 text-xs mt-1">{errors.review}</p>}
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full bg-amber text-navy font-bold rounded-lg py-3 mt-2 hover:opacity-90 active:scale-[0.99] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Submit review'}
        </button>

        {status && (
          <p
            className={`text-sm text-center ${
              status.includes('Error') ? 'text-red-400' : 'text-amber'
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}