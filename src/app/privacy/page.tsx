import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="max-w-[760px] mx-auto px-6 py-24">
          <h1
            className="text-[32px] md:text-[40px] font-bold text-text-primary mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-[13px] text-text-muted mb-8">Last updated: March 31, 2026</p>

          <div className="prose-fieldpin space-y-8 text-[15px] text-text-secondary leading-[1.75]">
            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>1. Information We Collect</h2>
              <p>Fieldpin collects information necessary to provide offline field reporting services to park rangers and wildlife officers. This includes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Account information:</strong> Name, email address, agency affiliation, and role when you create a Fieldpin account.</li>
                <li><strong>GPS location data:</strong> Precise latitude and longitude coordinates captured when you drop a pin in the field. This data is stored locally on your device until sync and then transferred to our servers.</li>
                <li><strong>Field report data:</strong> Information entered into report templates including wildlife sightings, incident reports, and trail condition observations.</li>
                <li><strong>Photos:</strong> Images captured and attached to pins, including EXIF metadata (GPS coordinates, timestamp).</li>
                <li><strong>Device information:</strong> Device type, operating system version, and app version for troubleshooting and compatibility.</li>
                <li><strong>Sync metadata:</strong> Timestamps of data sync events, connection status, and data transfer records.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>2. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide and maintain the Fieldpin service, including offline data storage and synchronization.</li>
                <li>Display your field data on the agency dashboard for supervisors and managers.</li>
                <li>Generate reports and exports as requested by authorized agency personnel.</li>
                <li>Improve the accuracy and reliability of GPS pinning and data sync.</li>
                <li>Provide technical support and respond to inquiries.</li>
                <li>Ensure data integrity and prevent unauthorized access.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>3. Offline Data Storage</h2>
              <p>Fieldpin stores data locally on your device when you are offline. This data is encrypted at rest using AES-256 encryption. Local data persists even if the app is closed or the device is restarted. Data is synchronized to our servers only when a network connection is available and is removed from local storage after successful sync confirmation.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>4. Agency Data Isolation</h2>
              <p>Each agency&apos;s data is logically isolated in our systems. Rangers from one agency cannot view, access, or interact with data from another agency. Agency administrators can only view data from rangers within their own organization. This isolation is enforced at the database level and verified through regular security audits.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>5. GPS Data and Location Privacy</h2>
              <p>GPS coordinates are collected only when you actively drop a pin. Fieldpin does not continuously track your location. Location data is associated with specific field observations and is accessible only to you and authorized personnel within your agency. We do not sell, share, or monetize location data.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>6. Data Retention</h2>
              <p>Data retention periods depend on your plan:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Pilot plan:</strong> 14 days of data retention after the pilot period ends.</li>
                <li><strong>Professional and Agency plans:</strong> Unlimited retention while your subscription is active.</li>
                <li><strong>Account deletion:</strong> All data is permanently deleted within 30 days of account deletion request.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>7. Data Security</h2>
              <p>We implement industry-standard security measures including encryption in transit (TLS 1.3), encryption at rest (AES-256), regular security audits, and SOC 2 Type II compliance. Access to production data is restricted to authorized personnel with multi-factor authentication.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>8. Third-Party Services</h2>
              <p>Fieldpin uses the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Map tiles:</strong> OpenStreetMap for map rendering. Map tile requests include general location data.</li>
                <li><strong>Authentication:</strong> Google OAuth for optional single sign-on.</li>
                <li><strong>Infrastructure:</strong> Cloud hosting with data residency in the United States.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>9. Your Rights</h2>
              <p>You have the right to access, correct, export, or delete your personal data. Agency administrators can export all agency data in CSV or PDF format. To exercise these rights or for any privacy-related inquiries, contact us at privacy@getfieldpin.com.</p>
            </section>

            <section>
              <h2 className="text-[20px] font-bold text-text-primary mb-3" style={{ fontFamily: "var(--font-display)" }}>10. Contact</h2>
              <p>For privacy questions or concerns:</p>
              <p className="mt-2">Email: privacy@getfieldpin.com<br />Fieldpin (ChimeStream, Inc.)</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
