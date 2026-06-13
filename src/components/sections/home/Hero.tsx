import Container from "@/components/common/Container";

export default function Hero() {
  return (
    <section className="bg-[var(--color-background)] py-24">
      <Container>
        <div className="max-w-3xl">

          {/* Tagline */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-[2px] bg-[var(--color-primary)]"></div>

            <span className="uppercase font-semibold tracking-wide text-[var(--color-primary)]">
              Trader First. Transparency Always.
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-7xl font-bold leading-tight">
            Built by Traders.
            <br />

            <span className="text-[var(--color-primary)]">
              Defined by Transparency.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-2xl leading-relaxed text-[var(--color-text-secondary)]">
            Founded by traders with over $250,000 in prop firm payouts.
            Our mission is simple: fair rules, transparent operations,
            and payouts you can trust.
          </p>

          {/* Stats */}
          <div className="mt-10 flex gap-10 text-[var(--color-text-secondary)]">
            <span>$250,000+ Paid</span>
            <span>Trader Founded</span>
            <span>100% Transparent</span>
          </div>

          {/* Waitlist Card */}
          <div
            className="
              mt-12
              flex items-center justify-between
              rounded-3xl
              border
              p-8
            "
            style={{
              borderColor: "var(--color-border)",
              boxShadow: "var(--shadow-card)"
            }}
          >
            <div>
              <h3 className="text-3xl font-bold">
                Join The Founding Trader List
              </h3>

              <p className="mt-3 max-w-lg text-[var(--color-text-secondary)]">
                Get launch updates, giveaway entries, exclusive discounts,
                and early access opportunities.
              </p>
            </div>

            <button
              className="
                rounded-2xl
                px-10 py-5
                text-xl font-semibold text-white
              "
              style={{
                backgroundColor: "var(--color-primary)"
              }}
            >
              Join Waitlist
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
}