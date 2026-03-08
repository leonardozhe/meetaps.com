export default function PrivacyPolicyPage() {
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
          <h1 className="display-md font-semibold mb-4">Privacy Policy</h1>
          <p className="text-[--color-text-secondary]">Last updated: {formatDate(new Date())}</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-[--color-text-secondary] mb-4">
              Meetaps Technology Ltd. ("we", "us", "our") operates the website meetaps.com (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
            <p className="text-[--color-text-secondary]">
              We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Information Collection And Use</h2>
            <p className="text-[--color-text-secondary] mb-4">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <h3 className="font-medium mb-2">Personal Data</h3>
            <p className="text-[--color-text-secondary] mb-4">
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data").
            </p>
            <p className="text-[--color-text-secondary] mb-2">
              Personal Data may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 text-[--color-text-secondary] mb-4">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code</li>
              <li>Company name and size</li>
              <li>Usage Data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Use of Data</h2>
            <p className="text-[--color-text-secondary] mb-2">
              We use the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 text-[--color-text-secondary] mb-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To evaluate and improve our products and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Legal Basis for Processing</h2>
            <p className="text-[--color-text-secondary] mb-4">
              We process your personal data under the following legal bases:
            </p>
            <ul className="list-disc pl-6 text-[--color-text-secondary] mb-4">
              <li>Performance of a contract with you</li>
              <li>Compliance with a legal obligation</li>
              <li>Our legitimate interests in conducting business</li>
              <li>Your consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Security Of Data</h2>
            <p className="text-[--color-text-secondary]">
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Service Providers</h2>
            <p className="text-[--color-text-secondary] mb-4">
              We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
            </p>
            <p className="text-[--color-text-secondary]">
              These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Disclosure Of Data</h2>
            <h3 className="font-medium mb-2">Legal Requirements</h3>
            <p className="text-[--color-text-secondary]">
              We may disclose your Personal Data in the good faith belief that such action is necessary to: comply with a legal obligation; protect and defend the rights or property of Meetaps; prevent or investigate possible wrongdoing in connection with the Service; protect the personal safety of users of the Service or the public; or protect against legal liability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Your Data Protection Rights</h2>
            <p className="text-[--color-text-secondary] mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-[--color-text-secondary] mb-4">
              <li>The right to access – You have the right to request copies of your personal data.</li>
              <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
              <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
              <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-[--color-text-secondary]">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-[--color-text-secondary] mt-2">
              By email: hello@meetaps.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}