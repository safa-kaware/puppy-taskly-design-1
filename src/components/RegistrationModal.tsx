import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, X } from 'lucide-react';
import { PawPrintIcon } from './PawDecorations';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  ownerName: string;
  email: string;
  phone: string;
  puppyName: string;
  puppyAge: string;
  additionalInfo: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = {
  ownerName: '',
  email: '',
  phone: '',
  puppyName: '',
  puppyAge: '',
  additionalInfo: '',
};

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!data.ownerName.trim() || data.ownerName.trim().length < 2) {
      nextErrors.ownerName = "Please enter the owner's full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim() || !emailRegex.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    const digitsOnly = data.phone.replace(/\D/g, '');
    if (!data.phone.trim() || digitsOnly.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!data.puppyName.trim()) {
      nextErrors.puppyName = "Please share your puppy's name.";
    }

    if (!data.puppyAge.trim()) {
      nextErrors.puppyAge = "Please enter your puppy's current age (e.g., 12 weeks).";
    }

    return nextErrors;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmittedData(values);
  };

  const handleResetAndClose = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setSubmittedData(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#162B4D]/45 backdrop-blur-sm"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-modal-title"
    >
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-[34px] bg-[#FAFBFD] paw-shadow p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-semibold text-[#277D89] flex items-center gap-1.5">
              <PawPrintIcon className="w-3.5 h-3.5" />
              <span>Pawuahas · Edmonton Puppy Class</span>
            </p>
            <h3
              id="registration-modal-title"
              className="font-display text-2xl sm:text-3xl font-bold text-[#162B4D] mt-1"
            >
              {submittedData ? 'Spot Request Previewed' : "Save Your Puppy's Spot"}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close registration popup"
            className="w-10 h-10 rounded-full bg-[#EAF4FC] text-[#162B4D] hover:bg-[#D8EBFB] flex items-center justify-center shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedData ? (
          <div className="space-y-6">
            <div className="rounded-[26px] bg-[#E2F2F3] p-6 text-[#162B4D]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#277D89] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-lg font-bold">
                    Welcome, {submittedData.ownerName} &amp; {submittedData.puppyName}!
                  </h4>
                  <p className="mt-1.5 text-sm text-[#415572] leading-relaxed">
                    Your class registration preview was completed locally. Because this is an interactive website prototype, no information was sent to a server or stored externally.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] bg-[#EEF6FC] p-5 space-y-2.5 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-[#566C8A]">Owner</span>
                <span className="font-semibold text-[#162B4D]">{submittedData.ownerName}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[#566C8A]">Email</span>
                <span className="font-semibold text-[#162B4D]">{submittedData.email}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[#566C8A]">Phone</span>
                <span className="font-semibold text-[#162B4D] tabular-nums">{submittedData.phone}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-[#566C8A]">Puppy</span>
                <span className="font-semibold text-[#162B4D]">
                  {submittedData.puppyName} ({submittedData.puppyAge})
                </span>
              </div>
              {submittedData.additionalInfo.trim() && (
                <div className="pt-2 border-t border-[#D8EBFB]">
                  <span className="text-[#566C8A] block mb-1">Notes</span>
                  <span className="text-[#162B4D]">{submittedData.additionalInfo}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSubmittedData(null)}
                className="px-5 py-2.5 rounded-full bg-[#EAF4FC] text-[#162B4D] text-sm font-semibold hover:bg-[#D8EBFB] transition-colors cursor-pointer"
              >
                Edit Details
              </button>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-full bg-[#162B4D] text-white text-sm font-semibold hover:bg-[#213E6D] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <p className="text-sm text-[#415572] leading-relaxed">
              Tell us a little about you and your pup to preview registration for the 6-week Edmonton program.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Owner's Name */}
              <div>
                <label htmlFor="ownerName" className="block text-xs font-semibold text-[#162B4D] mb-1.5">
                  Owner&apos;s Name *
                </label>
                <input
                  id="ownerName"
                  type="text"
                  value={values.ownerName}
                  onChange={(e) => handleChange('ownerName', e.target.value)}
                  placeholder="Your full name"
                  aria-invalid={Boolean(errors.ownerName)}
                  className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#162B4D] placeholder:text-[#8BA1B9] focus:outline-none focus:ring-2 focus:ring-[#277D89] ${
                    errors.ownerName ? 'border-[#C94A5A]' : 'border-[#D3E5F5]'
                  }`}
                />
                {errors.ownerName && (
                  <p className="mt-1.5 text-xs text-[#B33949] flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.ownerName}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[#162B4D] mb-1.5">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#162B4D] placeholder:text-[#8BA1B9] focus:outline-none focus:ring-2 focus:ring-[#277D89] ${
                    errors.email ? 'border-[#C94A5A]' : 'border-[#D3E5F5]'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-[#B33949] flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-[#162B4D] mb-1.5">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={values.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="(780) 555-0192"
                  aria-invalid={Boolean(errors.phone)}
                  className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#162B4D] placeholder:text-[#8BA1B9] focus:outline-none focus:ring-2 focus:ring-[#277D89] ${
                    errors.phone ? 'border-[#C94A5A]' : 'border-[#D3E5F5]'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-[#B33949] flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Puppy's Name */}
              <div>
                <label htmlFor="puppyName" className="block text-xs font-semibold text-[#162B4D] mb-1.5">
                  Puppy&apos;s Name *
                </label>
                <input
                  id="puppyName"
                  type="text"
                  value={values.puppyName}
                  onChange={(e) => handleChange('puppyName', e.target.value)}
                  placeholder="e.g., Maple"
                  aria-invalid={Boolean(errors.puppyName)}
                  className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#162B4D] placeholder:text-[#8BA1B9] focus:outline-none focus:ring-2 focus:ring-[#277D89] ${
                    errors.puppyName ? 'border-[#C94A5A]' : 'border-[#D3E5F5]'
                  }`}
                />
                {errors.puppyName && (
                  <p className="mt-1.5 text-xs text-[#B33949] flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.puppyName}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Puppy's Age */}
            <div>
              <label htmlFor="puppyAge" className="block text-xs font-semibold text-[#162B4D] mb-1.5">
                Puppy&apos;s Age *
              </label>
              <input
                id="puppyAge"
                type="text"
                value={values.puppyAge}
                onChange={(e) => handleChange('puppyAge', e.target.value)}
                placeholder="e.g., 11 weeks"
                aria-invalid={Boolean(errors.puppyAge)}
                className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#162B4D] placeholder:text-[#8BA1B9] focus:outline-none focus:ring-2 focus:ring-[#277D89] ${
                  errors.puppyAge ? 'border-[#C94A5A]' : 'border-[#D3E5F5]'
                }`}
              />
              {errors.puppyAge && (
                <p className="mt-1.5 text-xs text-[#B33949] flex items-center gap-1" role="alert">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.puppyAge}</span>
                </p>
              )}
            </div>

            {/* Additional Information */}
            <div>
              <label htmlFor="additionalInfo" className="block text-xs font-semibold text-[#162B4D] mb-1.5">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                rows={3}
                value={values.additionalInfo}
                onChange={(e) => handleChange('additionalInfo', e.target.value)}
                placeholder="Breed, personality notes, questions, or goals for class (optional)"
                className="w-full px-4 py-3 rounded-2xl bg-white border border-[#D3E5F5] text-sm text-[#162B4D] placeholder:text-[#8BA1B9] focus:outline-none focus:ring-2 focus:ring-[#277D89]"
              />
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[11px] text-[#566C8A]">
                Prototype simulation · Form submits locally
              </p>
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-[#162B4D] text-[#FAFBFD] text-sm font-semibold hover:bg-[#213E6D] active:scale-[0.98] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#277D89]"
              >
                Submit Registration
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
