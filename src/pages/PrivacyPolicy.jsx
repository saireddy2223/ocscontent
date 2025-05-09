import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
      <div className="min-h-screen bg-white text-[#1a1a1a] font-sans py-12 px-4">
        <div className="max-w-5xl mx-auto bg-[#f9f9f9] p-10 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
          <h1 className="text-3xl font-bold text-[#21a045] mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: March 28, 2025</p>
          <div className="space-y-8 text-[#333]">
            <section>
              <h2 className="text-2xl font-semibold text-[#21a045] mb-2">1. Introduction</h2>
              <p>
                OneCloudStorage is owned by Neridio Systems, which acts as the data controller of your personal data. This Privacy Policy explains how we process the information collected by OneCloudStorage and why we must collect certain personal data.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-[#21a045] mb-2">2. Personal Information We Collect</h2>
              <p>
                When you use OneCloudStorage, we automatically collect certain information about your device, including your web browser type, IP address, time zone, and cookies installed on your device. Additionally, we collect personal data you provide, such as your name, email address, payment info, organization details (if applicable), and backup configuration preferences, including third-party service connections.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-[#21a045] mb-2">3. Third-Party Data Sync & Backup</h2>
              <p>
                OneCloudStorage offers integration with services like Google Drive and OneDrive. When you connect third-party accounts, we access and back up data using secure APIs. The data is encrypted, compressed, and fragmented before storage. With cloud migration enabled, fragments are sent to AWS or Azure for redundancy and security.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-[#21a045] mb-2">4. Why Do We Process Your Data?</h2>
              <p>
                We process your data to deliver OneCloudStorage services, maintain backups, and securely store your data. This includes encrypting and fragmenting your data for security. We also use the data for optimization, analytics, and enhanced security measures.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-[#21a045] mb-2">5. Data Security</h2>
              <p>
                We implement industry-standard security measures such as encryption at rest and in transit, fragmentation before storage, and cloud redundancy using AWS and Azure. Strict access controls and authentication mechanisms are enforced.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-[#21a045] mb-2">6. Your Rights</h2>
              <p>
                If you are a European resident, you have the right to access and rectify your data, request deletion, restrict processing, or object to the use of your data. You also have the right to data portability to another provider.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-[#21a045] mb-2">7. Links to Other Websites</h2>
              <p>
                Our website may contain links to external websites not controlled by us. We are not responsible for their privacy practices. We encourage you to review their privacy policies when leaving our site.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-[#21a045] mb-2">8. Data Retention and Deletion</h2>
              <p>
                We retain your data only as long as necessary. Upon cancellation, your account and backups are deleted after a retention period. You can download/export your data beforehand.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-[#21a045] mb-2">9. Legal Disclosure</h2>
              <p>
                We may disclose your information if required by law or to protect our rights, investigate fraud, or respond to legal processes.
              </p>
            </section>
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/"
              className="inline-block px-5 py-2 bg-[#21a045] text-white rounded hover:bg-[#45a049] transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  

















// export default function PrivacyPolicy() {
//     return (
//       <div className="min-h-screen bg-[#1a1a1a] text-[#f1f1f1] font-sans py-12 px-4">
//         <div className="max-w-5xl mx-auto bg-[#282828] p-10 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.8)]">
//           <h1 className="text-3xl font-bold text-[#21a045] mb-2">Privacy Policy</h1>
//           <p className="text-sm text-gray-400 mb-8">Last Updated: March 28, 2025</p>
  
//           <div className="space-y-8 text-[#d1d1d1]">
//             <section>
//               <h2 className="text-2xl font-semibold text-[#21a045] mb-2">1. Introduction</h2>
//               <p>
//                 OneCloudStorage is owned by Neridio Systems, which acts as the data controller of your personal data. This Privacy Policy explains how we process the information collected by OneCloudStorage and why we must collect certain personal data.
//               </p>
//             </section>
  
//             <section>
//               <h2 className="text-2xl font-semibold text-[#21a045] mb-2">2. Personal Information We Collect</h2>
//               <p>
//                 When you use OneCloudStorage, we automatically collect certain information about your device, including your web browser type, IP address, time zone, and cookies installed on your device. Additionally, we collect personal data you provide, such as your name, email address, payment info, organization details (if applicable), and backup configuration preferences, including third-party service connections.
//               </p>
//             </section>
  
//             <section>
//               <h2 className="text-2xl font-semibold text-[#21a045] mb-2">3. Third-Party Data Sync & Backup</h2>
//               <p>
//                 OneCloudStorage offers integration with services like Google Drive and OneDrive. When you connect third-party accounts, we access and back up data using secure APIs. The data is encrypted, compressed, and fragmented before storage. With cloud migration enabled, fragments are sent to AWS or Azure for redundancy and security.
//               </p>
//             </section>
  
//             <section>
//               <h2 className="text-2xl font-semibold text-[#21a045] mb-2">4. Why Do We Process Your Data?</h2>
//               <p>
//                 We process your data to deliver OneCloudStorage services, maintain backups, and securely store your data. This includes encrypting and fragmenting your data for security. We also use the data for optimization, analytics, and enhanced security measures.
//               </p>
//             </section>
  
//             <section>
//               <h2 className="text-2xl font-semibold text-[#21a045] mb-2">5. Data Security</h2>
//               <p>
//                 We implement industry-standard security measures such as encryption at rest and in transit, fragmentation before storage, and cloud redundancy using AWS and Azure. Strict access controls and authentication mechanisms are enforced.
//               </p>
//             </section>
  
//             <section>
//               <h2 className="text-2xl font-semibold text-[#21a045] mb-2">6. Your Rights</h2>
//               <p>
//                 If you are a European resident, you have the right to access and rectify your data, request deletion, restrict processing, or object to the use of your data. You also have the right to data portability to another provider.
//               </p>
//             </section>
  
//             <section>
//               <h2 className="text-2xl font-semibold text-[#21a045] mb-2">7. Links to Other Websites</h2>
//               <p>
//                 Our website may contain links to external websites not controlled by us. We are not responsible for their privacy practices. We encourage you to review their privacy policies when leaving our site.
//               </p>
//             </section>
  
//             <section>
//               <h2 className="text-2xl font-semibold text-[#21a045] mb-2">8. Data Retention and Deletion</h2>
//               <p>
//                 We retain your data only as long as necessary. Upon cancellation, your account and backups are deleted after a retention period. You can download/export your data beforehand.
//               </p>
//             </section>
  
//             <section>
//               <h2 className="text-2xl font-semibold text-[#21a045] mb-2">9. Legal Disclosure</h2>
//               <p>
//                 We may disclose your information if required by law or to protect our rights, investigate fraud, or respond to legal processes.
//               </p>
//             </section>
//           </div>
  
//           <div className="footer text-center text-sm text-[#bbb] mt-10">
//             <p>&copy; {new Date().getFullYear()} OneCloudStorage. All rights reserved.</p>
//           </div>
  
//           <div className="mt-6 text-center">
//             <a
//               href="/"
//               className="inline-block px-5 py-2 bg-[#21a045] text-white rounded hover:bg-[#45a049] transition"
//             >
//               Back to Home
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
  