import { HeroSection } from "./components/HeroSection";
import { RegistrationFormModal } from "./components/RegistrationFormSection";
import { InfoSection1 } from "./components/InfoSection1";
import { WhatYouLearn } from "./components/WhatYouLearn";
import { ExclusiveTopics } from "./components/ExclusiveTopics";
import { WhoIsThisFor } from "./components/WhoIsThisFor";
import { FreeGiftSection } from "./components/FreeGiftSection";
import { CelebsSection } from "./components/CelebsSection";
import { MessageFromFounders } from "./components/MessageFromFounders";
import { FAQSection } from "./components/FAQSection";
import { TwoChoices } from "./components/TwoChoices";
import { FinalCTA } from "./components/FinalCTA";
import { BottomNewToAISection } from "./components/BottomNewToAISection";

export default function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* 1. ABOVE THE FOLD */}
      <HeroSection />
      <RegistrationFormModal />

      {/* 2. THE LEAD */}
      <InfoSection1 />

      {/* 3. THE SIX AGENT FUNCTIONS */}
      <WhatYouLearn />

      {/* 4. FASCINATION BULLETS */}
      <ExclusiveTopics />

      {/* 5. WHO THIS IS FOR */}
      <WhoIsThisFor />

      {/* 6. WHAT YOU'LL WALK AWAY WITH */}
      <FreeGiftSection />

      {/* 7. SOCIAL PROOF BLOCK */}
      <CelebsSection />

      {/* 8. ABOUT YOUR HOSTS */}
      <MessageFromFounders />

      {/* 9. FAQ */}
      <FAQSection />

      {/* 10. FINAL CLOSE */}
      <TwoChoices />
      <FinalCTA />
      <BottomNewToAISection />

      {/* Footer */}
      <footer
        style={{
          background: "#040A15",
          padding: "32px 16px",
          textAlign: "center",
          fontFamily: "'DM Sans', sans-serif",
          borderTop: "1px solid rgba(214,51,132,0.12)",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 8,
          }}
        >
          AI Agents Summit 2026
        </p>
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)", lineHeight: 1.7 }}>
          © 2026 AI Unleashed · All Rights Reserved
          <br />
          <span style={{ fontSize: "0.72rem" }}>
            Privacy Policy · Terms of Service · Disclaimer: Results may vary. Testimonials represent individual experiences.
          </span>
        </p>
      </footer>
    </div>
  );
}
