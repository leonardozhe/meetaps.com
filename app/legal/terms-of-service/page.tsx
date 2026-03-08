export default function TermsOfServicePage() {
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
          <h1 className="display-md font-semibold mb-4">Terms of Service</h1>
          <p className="text-[--color-text-secondary]">Last updated: {formatDate(new Date())}</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-[--color-text-secondary] mb-4">
              Welcome to Meetaps! These Terms of Service (&quot;Terms&quot;, &quot;Agreement&quot;) govern your use of the Meetaps Technology Ltd. website located at meetaps.com (the &quot;Service&quot;) operated by Meetaps Technology Ltd. (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
            </p>
            <p className="text-[--color-text-secondary]">
              Our Terms of Service have been created with the help of the TermsFeed Terms of Service Generator.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Interpretation and Definitions</h2>
            <h3 className="font-medium mb-2">Interpretation</h3>
            <p className="text-[--color-text-secondary] mb-4">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
            <h3 className="font-medium mb-2">Definitions</h3>
            <p className="text-[--color-text-secondary] mb-2">
              For the purposes of this Terms and Conditions:
            </p>
            <ul className="list-disc pl-6 text-[--color-text-secondary] mb-4">
              <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
              <li><strong>Country</strong> refers to: Hong Kong SAR</li>
              <li><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Meetaps Technology Ltd.</li>
              <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
              <li><strong>Service</strong> refers to the Website.</li>
              <li><strong>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
              <li><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
              <li><strong>Website</strong> refers to Meetaps, accessible from meetaps.com</li>
              <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Acknowledgment</h2>
            <p className="text-[--color-text-secondary]">
              These are the Terms of Service governing the use of this Service and the agreement that operates between You and the Company. These Terms of Service set out the rights and obligations of all users regarding the use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Services</h2>
            <p className="text-[--color-text-secondary]">
              Meetaps provides enterprise AI and cross-border technology services including but not limited to AI compute tokens, cross-border e-commerce solutions, GEO optimization, OpenClaw customization, and AI architecture consulting.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-[--color-text-secondary] mb-4">
              The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of Meetaps Technology Ltd. and its licensors.
            </p>
            <p className="text-[--color-text-secondary]">
              The Service is protected by copyright, trademark, and other laws of both the Hong Kong SAR and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Meetaps Technology Ltd.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Links to Other Websites</h2>
            <p className="text-[--color-text-secondary] mb-4">
              Our Service may contain links to third-party web sites or services that are not owned or controlled by Meetaps Technology Ltd.
            </p>
            <p className="text-[--color-text-secondary]">
              Meetaps Technology Ltd. has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Termination</h2>
            <p className="text-[--color-text-secondary]">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="text-[--color-text-secondary]">
              In no event shall Meetaps, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-[--color-text-secondary]">
              If you have any questions about these Terms and Conditions, please contact us:
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