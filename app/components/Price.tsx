import { Button } from "@/components/ui/button";

export default function Price() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "For solo developers getting started.",
      features: [
        "1 project",
        "Basic CRUD operations",
        "No authentication",
        "Community support",
      ],
      cta: "Get Started",
    },
    {
      name: "Pro",
      price: "$9/mo",
      description: "For professionals building real apps.",
      features: [
        "Unlimited projects",
        "User authentication",
        "Database hosting",
        "Email support",
      ],
      cta: "Upgrade Now",
    },
    {
      name: "Team",
      price: "$29/mo",
      description: "Best for growing teams and startups.",
      features: [
        "All Pro features",
        "Team collaboration",
        "Role-based access",
        "Priority support",
      ],
      cta: "Start Trial",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <h2 className="text-4xl font-bold text-[#262626]">Pricing Plans</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Choose the plan that fits your needs. Whether you&apos;re just starting or
          scaling your app — we&apos;ve got you covered.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-2xl font-semibold text-[#5A04FA]">
              {plan.name}
            </h3>
            <p className="text-3xl font-bold mt-2 text-[#262626]">
              {plan.price}
            </p>
            <p className="text-gray-500 mt-2 mb-6">{plan.description}</p>
            <ul className="space-y-2 text-sm text-[#444] mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-[#5A04FA]">✓</span> {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-gradient-to-r from-[#5A04FA] to-[#FF126D] text-white hover:opacity-90">
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
