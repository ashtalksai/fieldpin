import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="max-w-[760px] mx-auto px-6 py-24">
          <h1
            className="text-[32px] md:text-[40px] font-bold text-text-primary mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Terms of Service
          </h1>
          <p className="text-[13px] text-text-muted mb-8">Last updated: March 31, 2026</p>

          <div className="space-y-8 text-[15px] text-text-secondary leading-[1.75]">
            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>1. Acceptance of Terms</h2>
              <p>By accessing or using Fieldpin (&quot;the Service&quot;), operated by ChimeStream, Inc. (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;), you agree to be bound by these Terms of Service. If you are using the Service on behalf of an organization (such as a government agency or park service), you represent that you have authority to bind that organization to these terms.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>2. Description of Service</h2>
              <p>Fieldpin provides offline-capable field data collection tools for park rangers, wildlife officers, and field researchers. The Service includes mobile applications for data capture, a web dashboard for data management, and synchronization infrastructure. The Service is designed to function without internet connectivity, with data synchronization occurring when connectivity is available.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>3. Account Registration</h2>
              <p>You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials. Agency administrators are responsible for managing ranger access within their organization. You must notify us immediately of any unauthorized use of your account.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>4. Subscriptions and Billing</h2>
              <p><strong>Pilot Plan:</strong> One-time payment of $49. No recurring charges. Includes up to 5 rangers and 14-day data retention after the pilot period.</p>
              <p className="mt-2"><strong>Professional Plan:</strong> $25 per user per month, billed monthly. Cancel anytime with 30 days notice.</p>
              <p className="mt-2"><strong>Agency Plan:</strong> $49 per user per month, billed annually. Custom terms available for government procurement. 14-day money-back guarantee on all plans.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>5. Data Ownership</h2>
              <p>You retain all ownership rights to the data you create and upload through Fieldpin. This includes GPS coordinates, field reports, photos, and any other content. We do not claim ownership of your data. We will not access, use, or share your data except as necessary to provide and improve the Service, or as required by law.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>6. Acceptable Use</h2>
              <p>You agree to use Fieldpin only for lawful purposes related to field data collection and management. You will not: attempt to gain unauthorized access to other agencies&apos; data; use the Service to store content unrelated to field operations; interfere with or disrupt the Service; reverse engineer or attempt to extract the source code of the Service.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>7. Offline Functionality</h2>
              <p>Fieldpin is designed to operate without internet connectivity. However, we do not guarantee GPS accuracy, as this depends on your device hardware and satellite availability. Data stored offline is subject to device storage limitations. Synchronization requires a network connection and may be affected by connection quality.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>8. Service Availability</h2>
              <p>We strive for 99.9% uptime for our synchronization and dashboard services. Agency plan customers receive an SLA with service credits for downtime. Offline functionality is not dependent on our server availability. Planned maintenance windows will be communicated 48 hours in advance.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>9. Limitation of Liability</h2>
              <p>Fieldpin is a data collection tool and is not a substitute for professional judgment. We are not liable for decisions made based on data collected through the Service. Our total liability is limited to the amount you paid for the Service in the 12 months preceding the claim. We are not liable for data loss resulting from device failure, user error, or circumstances beyond our reasonable control.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>10. Termination</h2>
              <p>You may terminate your account at any time. Upon termination, your data will be available for export for 30 days, after which it will be permanently deleted. We may terminate or suspend your account for violations of these terms, with notice except in cases of severe violation.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>11. Changes to Terms</h2>
              <p>We may update these terms from time to time. We will notify you of material changes via email or in-app notification at least 30 days before they take effect. Continued use of the Service after changes take effect constitutes acceptance of the updated terms.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>12. Contact</h2>
              <p>For questions about these terms:</p>
              <p className="mt-2">Email: legal@getfieldpin.com<br />Fieldpin (ChimeStream, Inc.)</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
