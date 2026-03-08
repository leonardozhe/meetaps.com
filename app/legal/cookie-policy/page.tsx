export default function CookiePolicyPage() {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-[--color-bg]">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="display-md font-semibold mb-4">Cookie Policy</h1>
          <p className="text-[--color-text-secondary]">Last updated: {formatDate(new Date())}</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
            <p className="text-[--color-text-secondary] mb-4">
              Meetaps Technology Ltd. (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) uses cookies and similar technologies to store and manage user preferences, deliver targeted advertising, and analyze website performance.
            </p>
            <p className="text-[--color-text-secondary]">
              This policy explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">What Are Cookies?</h2>
            <p className="text-[--color-text-secondary]">
              Cookies are small data files placed on your device when you visit a website. They help ensure websites function properly, improve user experience, and provide analytical data to website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="text-[--color-text-secondary] mb-2">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-[--color-text-secondary] mb-4">
              <li><strong>Essential cookies:</strong> These are necessary for our website to function properly.</li>
              <li><strong>Performance cookies:</strong> These help us understand how visitors interact with our website.</li>
              <li><strong>Functionality cookies:</strong> These allow us to remember your preferences and settings.</li>
              <li><strong>Targeting cookies:</strong> These cookies help us deliver relevant content and advertising.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-[--color-text-secondary]">
              Most web browsers allow you to control cookies through their settings preferences. You can usually choose to:
            </p>
            <ul className="list-disc pl-6 text-[--color-text-secondary] mt-2">
              <li>Block or delete cookies</li>
              <li>Allow all cookies</li>
              <li>Allow only essential cookies</li>
              <li>Alert you when a website wants to place a cookie on your device</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-[--color-text-secondary]">
              If you have any questions about this Cookie Policy, please contact us at hello@meetaps.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}