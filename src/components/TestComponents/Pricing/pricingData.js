const pricingTiers = [
  {
    name: "Starter",
    description: "For quickly creating and signing forms and agreements.",
    priceMonthly: 35,
    priceAnnually: 19,
    buttonCaption: "Start a free trial",
    features: [
      "Unlimited document uploads and e‑Signatures",
      "Rich media drag and drop document editor",
      "Real‑time tracking and notifications",
      "24/7 email and chat support",
    ],
  },
  {
    name: "Business",
    description: "For sales proposals and integrated agreement workflows.",
    priceMonthly: 65,
    priceAnnually: 49,
    buttonCaption: "Request a demo",
    features: [
      "Custom quotes and sales agreements",
      "CRM integrations",
      "Custom branding and content library",
      "Deal rooms",
      "Approval workflows",
      "Web forms",
      "Bulk send",
    ],
  },
  {
    name: "Enterprise",
    description: "For end-to-end document workflows and automations.",
    priceMonthly: null,
    priceAnnually: null,
    buttonCaption: "Contact sales",
    features: [
      "CPQ (configure, price, quote)",
      "Workflow automation",
      "Smart content",
      "Single sign‑on (SSO)",
      "Team workspaces",
      "Notary",
      "API",
    ],
  },
];

export default pricingTiers;
