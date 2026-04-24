import { useEffect, useRef, useState } from "react";

const FORM_SCRIPT_SRC = "https://l.industryrockstars.ch/js/form_embed.js";
const FORM_SCRIPT_ID = "industry-rockstars-form-embed";
const OPEN_REGISTRATION_MODAL_EVENT = "open-registration-modal";

export function RegistrationFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const hasOpenedOnceRef = useRef(false);

  useEffect(() => {
    const openModal = () => {
      hasOpenedOnceRef.current = true;
      setIsOpen(true);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener(OPEN_REGISTRATION_MODAL_EVENT, openModal);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener(OPEN_REGISTRATION_MODAL_EVENT, openModal);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (document.getElementById(FORM_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.id = FORM_SCRIPT_ID;
    script.src = FORM_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  useEffect(() => {
    const autoOpenTimer = window.setTimeout(() => {
      if (hasOpenedOnceRef.current) {
        return;
      }

      hasOpenedOnceRef.current = true;
      setIsOpen(true);
    }, 10000);

    return () => {
      window.clearTimeout(autoOpenTimer);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Registration form"
      onClick={() => setIsOpen(false)}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(4, 10, 21, 0.82)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        className="w-full max-w-5xl relative"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close registration form"
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "-14px",
            right: "-14px",
            width: "36px",
            height: "36px",
            borderRadius: "9999px",
            border: "1px solid rgba(214,51,132,0.45)",
            background: "#0B1D3A",
            color: "white",
            cursor: "pointer",
            fontSize: "18px",
            lineHeight: 1,
          }}
        >
          x
        </button>
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1.5px solid rgba(214,51,132,0.32)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
            background: "linear-gradient(160deg, #070F22 0%, #0B1D3A 60%, #0D2248 100%)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <div
            style={{
              background: "linear-gradient(90deg, #D63384, #F272B6, #D63384)",
              color: "white",
              textAlign: "center",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              padding: "10px 12px",
            }}
          >
            FREE 1-DAY VIRTUAL SUMMIT · AI AGENTS SUMMIT | APRIL 30, 2026 | REGISTER NOW - SEATS ARE LIMITED
          </div>
          <iframe
            src="https://l.industryrockstars.ch/widget/form/s58n5QGA5Lag7Rpy8Htu"
            style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px", minHeight: "570px" }}
            id="inline-s58n5QGA5Lag7Rpy8Htu"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="FB - AI Assisted Global Summit - April 30, 2026"
            data-height="570"
            data-layout-iframe-id="inline-s58n5QGA5Lag7Rpy8Htu"
            data-form-id="s58n5QGA5Lag7Rpy8Htu"
            title="FB - AI Assisted Global Summit - April 30, 2026"
          />
        </div>
      </div>
    </div>
  );
}
