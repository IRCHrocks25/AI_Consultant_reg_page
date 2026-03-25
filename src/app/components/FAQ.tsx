import { useState } from 'react';

const faqs = [
  {
    q: 'Do I need to know how to use AI or automation tools?',
    a: 'Not at all. We handle every part of the setup — tools, integrations, testing, and training. You show up to the onboarding call and we take it from there.',
  },
  {
    q: 'What kinds of businesses is this built for?',
    a: "Anyone who sells their time or expertise — realtors, coaches, consultants, mortgage brokers, insurance agents, marketing agencies, and any service business that runs on leads, calls, and follow-ups. If your business depends on relationships, this system was built for you.",
  },
  {
    q: 'What CRMs and tools do you connect to?',
    a: "We work with HighLevel, HubSpot, Monday, KVCore, Gmail, Outlook, Google Calendar, Zoom, and most major social platforms. If you're using something else, we'll confirm compatibility during scoping.",
  },
  {
    q: 'How long does it take to go live?',
    a: 'Typically 3 business days from the moment we receive your onboarding information. The faster you complete the intake form, the faster you go live.',
  },
  {
    q: 'What if I only want one or two workflows?',
    a: "The $200 package covers all five — but each workflow is modular and can be expanded or adjusted after launch. We can also discuss custom packages depending on your needs.",
  },
  {
    q: 'Is this a monthly subscription?',
    a: "The $200 covers full implementation. Ongoing monitoring, maintenance, and any third-party tool costs (like SMS) are handled separately. We'll walk you through everything during onboarding — no surprises.",
  },
  {
    q: 'What makes this different from just using Zapier or ChatGPT?',
    a: "Those are tools. This is a system. The AI Business OS is five workflows that talk to each other, trained on your brand voice, and built to run without you touching them. We handle the architecture, the logic, and the setup — so you get results, not another app to manage.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  const toggle = (i: number) => setOpen(i);

  return (
    <section
      id="faq"
      className="section-pad"
      style={{ padding: '120px 64px', background: 'var(--bg-1)' }}
    >
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="reveal">
          <p className="sec-label center">FAQ</p>
          <h2 className="faq-h2">Everything you're <em>probably wondering.</em></h2>
        </div>
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`faq-item${open === i ? ' open' : ''}`}
          >
            <button className="faq-q" onClick={() => toggle(i)}>
              {item.q}
              <span className="faq-ico">+</span>
            </button>
            <div className="faq-a">{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}