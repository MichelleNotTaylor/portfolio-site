import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import type { FormState, SubmitStatus } from '../types';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string;

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'hiremichelletaylor@gmail.com',
    href: 'mailto:hiremichelletaylor@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'michelle-m-taylor',
    href: 'https://www.linkedin.com/in/michelle-m-taylor/',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'MichelleNotTaylor',
    href: 'https://github.com/MichelleNotTaylor',
    icon: Github,
    external: true,
  },
] as const;

const inputCls =
  'w-full bg-white dark:bg-slate-900/60 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 dark:focus:border-pink-400 transition-colors duration-200';

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetCaptcha = () => {
    recaptchaRef.current?.reset();
    setCaptchaToken(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypot) {
      setSubmitStatus('success');
      return;
    }
    if (!captchaToken) return;

    setSubmitStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xyknnlar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, 'g-recaptcha-response': captchaToken }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });
        resetCaptcha();
        setTimeout(() => setSubmitStatus(''), 6000);
      } else {
        setSubmitStatus('error');
        resetCaptcha();
      }
    } catch {
      setSubmitStatus('error');
      resetCaptcha();
    }
  };

  return (
    <section aria-labelledby="contact-heading" className="py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="mb-16 animate-slideDown">
          <p className="text-xs font-semibold tracking-widest text-pink-600 dark:text-pink-400 uppercase mb-3">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Let's Connect
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-md">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">

          {/* Left: contact methods */}
          <aside className="md:col-span-2 space-y-6 animate-slideUp">
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
              Reach me at
            </h3>
            <ul className="space-y-5" aria-label="Contact links">
              {CONTACT_LINKS.map(({ label, value, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={external ? `${label}: ${value} (opens in new tab)` : `${label}: ${value}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-950/50 border border-pink-100 dark:border-pink-900/60 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/60 transition-colors duration-150">
                      <Icon size={17} className="text-pink-600 dark:text-pink-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{label}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-150 break-all">
                        {value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right: form */}
          <div className="md:col-span-3 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3
                id="form-heading"
                className="text-base font-semibold text-slate-900 dark:text-white mb-6"
              >
                Send a message
              </h3>

              <form
                onSubmit={handleSubmit}
                aria-labelledby="form-heading"
                noValidate
              >
                {/* Honeypot — invisible, catches bots; Formspree also rejects _gotcha server-side */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  aria-hidden="true"
                />

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Name <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      aria-required="true"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      autoComplete="name"
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Email <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      aria-required="true"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Message <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      aria-required="true"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, or just say hi!"
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex justify-start" aria-label="CAPTCHA verification required">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={(token) => setCaptchaToken(token)}
                      onExpired={() => setCaptchaToken(null)}
                    />
                  </div>

                  {/* Status messages */}
                  {submitStatus === 'success' && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-400 text-sm font-medium"
                    >
                      <span aria-hidden="true">✓</span>
                      Message sent! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-400 text-sm font-medium"
                    >
                      <span aria-hidden="true">!</span>
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!captchaToken || submitStatus === 'sending'}
                    aria-disabled={!captchaToken || submitStatus === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-pink-600 hover:bg-pink-700 dark:bg-pink-600 dark:hover:bg-pink-500 text-white text-sm font-semibold shadow-sm hover:shadow-md hover:shadow-pink-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-pink-600 disabled:hover:shadow-sm transition-all duration-200"
                  >
                    <Send size={14} aria-hidden="true" />
                    {submitStatus === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
