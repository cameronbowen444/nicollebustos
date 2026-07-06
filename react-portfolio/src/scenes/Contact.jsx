import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMapPin, FiLinkedin, FiSend } from "react-icons/fi";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const successTimerRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  const closeSuccess = () => {
    if (successTimerRef.current) {
      clearTimeout(successTimerRef.current);
      successTimerRef.current = null;
    }

    setShowSuccess(false);
  };

  const onValidSubmit = async (data) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/nicollebowen555@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: data.name.trim(),
            email: data.email.trim(),
            message: data.message.trim(),
            _subject: "New Portfolio Contact Message",
          }),
        }
      );

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success === false) {
        throw new Error("Message could not be sent.");
      }

      reset();
      setShowSuccess(true);

      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }

      successTimerRef.current = setTimeout(() => {
        setShowSuccess(false);
        successTimerRef.current = null;
      }, 4000);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = (hasError) =>
    `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-[border-color,background-color,color,box-shadow] duration-300 ${
      hasError
        ? "!border-[#ff4d8d] !bg-[#3a1638] !text-[#f8dbe8] placeholder:!text-[#f5a8c4] focus:!border-[#ff4d8d] focus:!outline-none focus:!ring-2 focus:!ring-[#ff4d8d]/40"
        : "!border-pink-300/25 !bg-white/[0.08] !text-[#e2c6dc] placeholder:!text-[#8f6d89] focus:!border-pink-400 focus:!outline-none focus:!ring-2 focus:!ring-pink-400/25"
    }`;

  return (
    <>
      <section id="contact" className="relative w-full overflow-hidden py-12 md:py-16">
        <div className="relative z-10 mx-auto grid w-[90%] max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400">
              Let&apos;s Connect
            </p>

            <h2 className="mt-3 font-playfair text-3xl font-semibold leading-tight text-[#c18ab7] sm:text-4xl">
              Let&apos;s create
              <span className="block bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 bg-clip-text italic text-transparent">
                something memorable.
              </span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#b98eaf]">
              Open to new opportunities, collaborations, and meaningful
              conversations about marketing.
            </p>

            <div className="mt-6 space-y-3">
              {/* EMAIL */}
              <a
                href="mailto:nicollebowen555@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-pink-300/20 bg-white/[0.06] px-4 py-3 transition-[border-color,background-color] duration-300 hover:border-pink-400/40 hover:bg-white/[0.09]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-400 text-white">
                  <FiMail />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-[#a97b9f]">
                    Email
                  </p>

                  <p className="break-all text-xs font-semibold text-[#c99bbf] sm:break-normal">
                    nicollebowen555@gmail.com
                  </p>
                </div>
              </a>

              {/* LOCATION */}
              <div className="flex items-center gap-3 rounded-xl border border-fuchsia-300/20 bg-white/[0.06] px-4 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-pink-500 text-white">
                  <FiMapPin />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-[#a97b9f]">
                    Based In
                  </p>

                  <p className="text-xs font-semibold text-[#c99bbf]">
                    Los Angeles, California
                  </p>
                </div>
              </div>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/nicollebowen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-orange-300/20 bg-white/[0.06] px-4 py-3 transition-[border-color,background-color] duration-300 hover:border-orange-400/40 hover:bg-white/[0.09]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 via-pink-500 to-fuchsia-500 text-white">
                  <FiLinkedin />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-[#a97b9f]">
                    LinkedIn
                  </p>

                  <p className="text-xs font-semibold text-[#c99bbf]">
                    Connect professionally
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="rounded-[1.5rem] border border-pink-200/20 bg-[#20152f]/80 p-5 shadow-[0_20px_55px_rgba(90,30,85,0.14)] sm:p-6 md:bg-white/[0.08] md:backdrop-blur-md"
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-pink-400">
              Send a Message
            </p>

            <h3 className="mt-2 font-playfair text-2xl font-semibold text-[#d0a4c7]">
              Tell me what&apos;s on your mind.
            </h3>

            <form
              onSubmit={handleSubmit(onValidSubmit)}
              className="mt-5 space-y-4"
              noValidate
            >
              {/* NAME */}
              <div>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={errors.name ? "true" : "false"}
                  className={inputStyles(errors.name)}
                  {...register("name", {
                    required: "Please enter your name.",
                    maxLength: {
                      value: 100,
                      message: "Name must be under 100 characters.",
                    },
                  })}
                />

                {errors.name && (
                  <p className="mt-2 text-xs font-semibold !text-[#ff4d4d]" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <input
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="Email address"
                  aria-invalid={errors.email ? "true" : "false"}
                  className={inputStyles(errors.email)}
                  {...register("email", {
                    required: "Please enter your email.",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                      message: "Please enter a valid email address.",
                    },
                  })}
                />

                {errors.email && (
                  <p className="mt-2 text-xs font-semibold !text-[#ff4d4d]" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  placeholder="Tell me about the opportunity or idea..."
                  rows={4}
                  aria-invalid={errors.message ? "true" : "false"}
                  className={`${inputStyles(errors.message)} resize-none`}
                  {...register("message", {
                    required: "Please enter a message.",
                    maxLength: {
                      value: 2000,
                      message: "Message must be under 2000 characters.",
                    },
                  })}
                />

                {errors.message && (
                  <p className="mt-2 text-xs font-semibold !text-[#ff4d4d]" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* SUBMIT ERROR */}
              {submitError && (
                <p className="text-xs font-semibold !text-[#ff4d4d]" role="alert">
                  {submitError}
                </p>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 px-5 py-3 text-xs font-bold text-white transition-[transform,opacity] duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <FiSend />}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSuccess}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
            aria-describedby="contact-success-description"
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#08041f]/80 px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 8 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-pink-300/30 bg-[#191535] p-7 text-center shadow-[0_25px_70px_rgba(236,72,153,0.26)]"
            >
              {/* GLOWS */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-pink-500/15 blur-2xl"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-14 -left-12 h-32 w-32 rounded-full bg-orange-400/12 blur-2xl"
              />

              {/* CHECK */}
              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-400 text-2xl font-bold text-white shadow-[0_10px_30px_rgba(236,72,153,0.35)]">
                ✓
              </div>

              <h3
                id="contact-success-title"
                className="relative mt-5 font-playfair text-2xl font-semibold text-[#e4badb]"
              >
                Your message was sent!
              </h3>

              <p
                id="contact-success-description"
                className="relative mt-2 text-sm leading-6 text-[#b98eaf]"
              >
                Thanks for reaching out. Nicolle will get back to you soon.
              </p>

              <button
                type="button"
                onClick={closeSuccess}
                className="relative mt-6 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 px-6 py-2.5 text-xs font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;