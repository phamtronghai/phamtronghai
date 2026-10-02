import type { Metadata } from "next";
import Link from "next/link";
import { Lang, PolicyLayout, PolicySection } from "@/components/policy/policy-layout";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: "Chính sách Mộ liệt sĩ",
  description: "Chính sách quyền riêng tư của ứng dụng Mộ liệt sĩ (CV thực địa).",
  alternates: { canonical: "/privacy/mo-liet-si" },
};

export default function MoLietSiPolicyPage() {
  return (
    <PolicyLayout
      app="Mộ liệt sĩ (CV thực địa)"
      meta={[
        { label: "Ngày hiệu lực", value: "24/07/2026" },
        { label: "Cập nhật lần cuối", value: "24/07/2026" },
        { label: "Đơn vị vận hành", value: profile.name },
        { label: "Liên hệ", value: "dev.pth@icloud.com · Hải Phòng · +84 889 253 238" },
      ]}
    >
      <PolicySection title="1) Giới thiệu / Introduction">
        <p>
          <Lang>VI</Lang>
          Ứng dụng Mộ liệt sĩ (“Ứng dụng”, “chúng tôi”) hỗ trợ tìm kiếm, ghi nhận và quản lý thông tin liên quan đến nghĩa trang / mộ liệt sĩ trên bản đồ phục vụ công tác thực địa.
        </p>
        <p>
          Chúng tôi tôn trọng quyền riêng tư của người dùng và cam kết xử lý dữ liệu cá nhân theo mục đích nêu trong Chính sách này. Việc sử dụng Ứng dụng đồng nghĩa với việc bạn đã đọc và hiểu các nội dung dưới đây.
        </p>
        <p>
          <Lang>EN</Lang>
          The Mộ liệt sĩ app (“App”, “we”, “us”) supports searching, recording, and managing information related to martyrs’ cemeteries / graves on a map for field operations.
        </p>
        <p>
          We respect user privacy and process personal data only for the purposes described in this Policy. By using the App, you acknowledge that you have read and understood the following terms.
        </p>
      </PolicySection>

      <PolicySection title="2) Phạm vi áp dụng / Scope">
        <p>
          <Lang>VI</Lang>
          Chính sách này áp dụng cho việc thu thập, sử dụng, lưu trữ và chia sẻ dữ liệu khi bạn sử dụng Ứng dụng trên thiết bị iOS (và các nền tảng khác nếu có).
        </p>
        <p>
          <Lang>EN</Lang>
          This Policy applies to the collection, use, storage, and sharing of data when you use the App on iOS devices (and other platforms, if any).
        </p>
      </PolicySection>

      <PolicySection title="3) Dữ liệu chúng tôi thu thập / Data We Collect">
        <h3 className="pt-2 font-display text-base font-semibold text-bone">
          3.1. Thông tin tài khoản và hồ sơ / Account and profile information
        </h3>
        <p>
          <Lang>VI</Lang>
        </p>
        <ul>
          <li>Tên đăng nhập và mật khẩu (để xác thực).</li>
          <li>Thông tin hồ sơ: họ tên, email, số điện thoại, đơn vị, chức vụ, ảnh đại diện (nếu bạn cung cấp/cập nhật).</li>
          <li>Token phiên đăng nhập (để duy trì trạng thái đăng nhập).</li>
        </ul>
        <p>
          <Lang>EN</Lang>
        </p>
        <ul>
          <li>Username and password (for authentication).</li>
          <li>Profile information: full name, email, phone number, organization, position, and profile photo (if you provide/update them).</li>
          <li>Session tokens (to maintain login state).</li>
        </ul>

        <h3 className="pt-2 font-display text-base font-semibold text-bone">
          3.2. Dữ liệu nghiệp vụ / bản đồ / Operational / map data
        </h3>
        <p>
          <Lang>VI</Lang>
        </p>
        <ul>
          <li>Vị trí địa lý (GPS) khi bạn dùng chức năng bản đồ / vị trí hiện tại.</li>
          <li>Dữ liệu hình học (điểm, đường, vùng) và thuộc tính đối tượng bạn tạo hoặc chỉnh sửa (ví dụ: nghĩa trang, mộ liệt sĩ, địa giới hành chính, ghi chú, lý do cập nhật).</li>
          <li>Ảnh đính kèm đối tượng / phiếu biên tập (nếu bạn chụp hoặc chọn ảnh).</li>
          <li>Lịch sử tìm kiếm địa chỉ trên thiết bị (lưu cục bộ).</li>
        </ul>
        <p>
          <Lang>EN</Lang>
        </p>
        <ul>
          <li>Geographic location (GPS) when you use map / current-location features.</li>
          <li>Geometry data (points, lines, areas) and attributes of objects you create or edit (e.g., cemeteries, martyrs’ graves, administrative boundaries, notes, update reasons).</li>
          <li>Photos attached to objects / edit records (if you capture or select images).</li>
          <li>Address search history on the device (stored locally).</li>
        </ul>

        <h3 className="pt-2 font-display text-base font-semibold text-bone">3.3. Giọng nói / Voice</h3>
        <p>
          <Lang>VI</Lang>
          Khi bật nhập liệu / tìm kiếm bằng giọng nói, Ứng dụng sử dụng micro và dịch vụ nhận dạng giọng nói của hệ điều hành (Apple Speech trên iOS) để chuyển lời nói thành văn bản. Chúng tôi không lưu trữ file âm thanh gốc trên máy chủ của Ứng dụng cho mục đích này, trừ khi bạn chủ động lưu nội dung văn bản đã chuyển đổi vào form/dữ liệu nghiệp vụ.
        </p>
        <p>
          <Lang>EN</Lang>
          When voice input / voice search is enabled, the App uses the microphone and the operating system’s speech recognition service (Apple Speech on iOS) to convert speech into text. We do not store original audio files on the App’s servers for this purpose, unless you intentionally save the converted text into a form or operational data record.
        </p>

        <h3 className="pt-2 font-display text-base font-semibold text-bone">3.4. Dữ liệu kỹ thuật / Technical data</h3>
        <p>
          <Lang>VI</Lang>
          Thông tin thiết bị cần thiết để vận hành Ứng dụng (ví dụ: loại hệ điều hành, phiên bản ứng dụng) có thể được hệ thống/hạ tầng xử lý ở mức tối thiểu để cung cấp dịch vụ và bảo mật. Chúng tôi không sử dụng SDK quảng cáo và không thu thập dữ liệu cho mục đích quảng cáo cá nhân hóa trong phiên bản hiện tại.
        </p>
        <p>
          <Lang>EN</Lang>
          Device information necessary to operate the App (e.g., operating system type, app version) may be processed by systems/infrastructure at a minimal level to provide the service and maintain security. We do not use advertising SDKs and do not collect data for personalized advertising in the current version.
        </p>
      </PolicySection>

      <PolicySection title="4) Mục đích sử dụng dữ liệu / How We Use Data">
        <p>
          <Lang>VI</Lang>
          Chúng tôi sử dụng dữ liệu để:
        </p>
        <ul>
          <li>Xác thực người dùng và bảo vệ tài khoản (kể cả đăng nhập nhanh bằng Face ID / sinh trắc học trên thiết bị, nếu bạn bật).</li>
          <li>Hiển thị bản đồ, định vị và hỗ trợ công tác thực địa.</li>
          <li>Tạo, chỉnh sửa, đồng bộ dữ liệu đối tượng / phiếu biên tập lên hệ thống nghiệp vụ.</li>
          <li>Cập nhật và hiển thị hồ sơ cá nhân.</li>
          <li>Hỗ trợ nhập liệu bằng giọng nói và tìm kiếm địa chỉ.</li>
          <li>Cải thiện độ ổn định, bảo mật và trải nghiệm sử dụng.</li>
          <li>Tuân thủ yêu cầu pháp luật khi có căn cứ.</li>
        </ul>
        <p>
          <Lang>EN</Lang>
          We use data to:
        </p>
        <ul>
          <li>Authenticate users and protect accounts (including quick login with Face ID / on-device biometrics, if enabled).</li>
          <li>Display maps, locate positions, and support field operations.</li>
          <li>Create, edit, and sync object data / edit records to the operational backend.</li>
          <li>Update and display personal profiles.</li>
          <li>Support voice input and address search.</li>
          <li>Improve stability, security, and user experience.</li>
          <li>Comply with legal requirements when applicable.</li>
        </ul>
      </PolicySection>

      <PolicySection title="5) Quyền truy cập trên thiết bị / Device Permissions">
        <p>
          <Lang>VI</Lang>
          Ứng dụng có thể yêu cầu các quyền sau (chỉ khi cần chức năng tương ứng):
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-bone">
                <th className="py-2 pr-4 font-medium">Quyền / Permission</th>
                <th className="py-2 font-medium">Mục đích / Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-line">
                <td className="py-2 pr-4">Vị trí (khi đang dùng app) / Location (When In Use)</td>
                <td className="py-2">Hiển thị vị trí hiện tại trên bản đồ / Show current location on the map</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-2 pr-4">Camera</td>
                <td className="py-2">Chụp ảnh đại diện / ảnh đính kèm / Capture profile or attachment photos</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-2 pr-4">Thư viện ảnh / Photo Library</td>
                <td className="py-2">Chọn ảnh đại diện / ảnh đính kèm / Select profile or attachment photos</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-2 pr-4">Micro / Microphone</td>
                <td className="py-2">Nhập liệu / tìm kiếm bằng giọng nói / Voice input / voice search</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-2 pr-4">Nhận dạng giọng nói / Speech Recognition</td>
                <td className="py-2">Chuyển giọng nói thành văn bản / Convert speech to text</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Face ID / sinh trắc học / Biometrics</td>
                <td className="py-2">Đăng nhập nhanh với tài khoản đã lưu trên thiết bị / Quick login with credentials stored on the device</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <Lang>VI</Lang>
          Bạn có thể từ chối hoặc thu hồi quyền trong phần Cài đặt của thiết bị; một số tính năng có thể không hoạt động nếu thiếu quyền cần thiết.
        </p>
        <p>
          <Lang>EN</Lang>
          You may deny or revoke permissions in your device Settings; some features may not work without the required permissions.
        </p>
      </PolicySection>

      <PolicySection title="6) Cách lưu trữ và bảo mật / Storage and Security">
        <p>
          <Lang>VI</Lang>
        </p>
        <ul>
          <li>
            <strong>Trên thiết bị:</strong> thông tin đăng nhập/token có thể được lưu trong kho bảo mật của thiết bị (Secure Storage); dự án bản đồ (GeoJSON), ảnh đính kèm và lịch sử tìm kiếm có thể lưu cục bộ trên máy.
          </li>
          <li>
            <strong>Trên máy chủ:</strong> dữ liệu tài khoản, hồ sơ và dữ liệu nghiệp vụ được gửi tới hệ thống backend của đơn vị vận hành (ví dụ: dịch vụ tại miền geodef.vn) để xác thực, lưu trữ và đồng bộ.
          </li>
        </ul>
        <p>
          Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức phù hợp (xác thực, truyền dữ liệu qua HTTPS, giới hạn quyền truy cập) để bảo vệ dữ liệu. Tuy nhiên, không phương thức truyền tải hoặc lưu trữ nào bảo đảm an toàn tuyệt đối 100%.
        </p>
        <p>
          <Lang>EN</Lang>
        </p>
        <ul>
          <li>
            <strong>On device:</strong> login credentials/tokens may be stored in the device secure store (Secure Storage); map projects (GeoJSON), attached photos, and search history may be stored locally.
          </li>
          <li>
            <strong>On servers:</strong> account, profile, and operational data are sent to the operator’s backend systems (e.g., services under the geodef.vn domain) for authentication, storage, and sync.
          </li>
        </ul>
        <p>
          We apply appropriate technical and organizational measures (authentication, HTTPS transmission, access controls) to protect data. However, no method of transmission or storage is 100% secure.
        </p>
      </PolicySection>

      <PolicySection title="7) Chia sẻ dữ liệu với bên thứ ba / Sharing with Third Parties">
        <p>
          <Lang>VI</Lang>
          Chúng tôi không bán dữ liệu cá nhân. Dữ liệu có thể được xử lý bởi các bên sau chỉ để vận hành Ứng dụng:
        </p>
        <ul>
          <li>Hệ thống backend nghiệp vụ (geodef.vn) — đăng nhập, hồ sơ, biên tập, tệp đính kèm.</li>
          <li>Dịch vụ bản đồ / địa chỉ (Samcom: nền bản đồ MapLibre style, geocoding) — hiển thị bản đồ và tìm kiếm/định vị địa chỉ.</li>
          <li>Apple — dịch vụ hệ thống (Face ID, Speech Recognition, phân phối App Store) theo chính sách của Apple.</li>
          <li>Khi bạn chủ động chia sẻ (ví dụ xuất/chia sẻ file GeoJSON qua chức năng chia sẻ của hệ điều hành).</li>
        </ul>
        <p>Chúng tôi không tích hợp mạng quảng cáo hoặc công cụ phân tích quảng cáo bên thứ ba trong phiên bản hiện tại.</p>
        <p>
          <Lang>EN</Lang>
          We do not sell personal data. Data may be processed by the following parties solely to operate the App:
        </p>
        <ul>
          <li>Operational backend systems (geodef.vn) — login, profile, editing, attachments.</li>
          <li>Map / address services (Samcom: MapLibre-style basemap, geocoding) — map display and address search/geolocation.</li>
          <li>Apple — system services (Face ID, Speech Recognition, App Store distribution) under Apple’s policies.</li>
          <li>When you intentionally share content (e.g., export/share a GeoJSON file via the operating system share sheet).</li>
        </ul>
        <p>We do not integrate advertising networks or third-party advertising analytics tools in the current version.</p>
      </PolicySection>

      <PolicySection title="8) Lưu trữ và xóa dữ liệu / Retention and Deletion">
        <p>
          <Lang>VI</Lang>
          Dữ liệu được lưu trong thời gian cần thiết để cung cấp dịch vụ, phục vụ nghiệp vụ hoặc theo yêu cầu pháp luật / quy định nội bộ của đơn vị vận hành. Bạn có thể yêu cầu chỉnh sửa hồ sơ trong Ứng dụng (nếu được cấp quyền). Để yêu cầu xóa tài khoản hoặc dữ liệu cá nhân, vui lòng liên hệ theo thông tin ở Mục 12. Chúng tôi sẽ xử lý theo quy định áp dụng và khả năng kỹ thuật/nghiệp vụ (một số dữ liệu nghiệp vụ có thể cần lưu theo quy định quản lý nhà nước).
        </p>
        <p>
          <Lang>EN</Lang>
          Data is retained for as long as necessary to provide the service, support operations, or comply with legal / internal requirements of the operator. You may request profile edits in the App (if permitted). To request deletion of an account or personal data, please contact us using the details in Section 12. We will process requests in accordance with applicable rules and technical / operational constraints (some operational data may need to be retained under state management regulations).
        </p>
      </PolicySection>

      <PolicySection title="9) Dữ liệu của trẻ em / Children's Privacy">
        <p>
          <Lang>VI</Lang>
          Ứng dụng hướng tới người dùng là cán bộ / nhân sự được cấp tài khoản phục vụ công tác. Ứng dụng không dành cho trẻ em dưới 13 tuổi và chúng tôi không cố ý thu thập dữ liệu của trẻ em. Nếu phát hiện việc thu thập nhầm, vui lòng liên hệ để chúng tôi xử lý.
        </p>
        <p>
          <Lang>EN</Lang>
          The App is intended for officers / staff who have been issued accounts for work purposes. The App is not directed to children under 13, and we do not knowingly collect data from children. If such collection is discovered, please contact us so we can address it.
        </p>
      </PolicySection>

      <PolicySection title="10) Chuyển dữ liệu ra ngoài lãnh thổ / International Data Transfers">
        <p>
          <Lang>VI</Lang>
          Dữ liệu chủ yếu được xử lý phục vụ hệ thống nghiệp vụ tại Việt Nam. Nếu hạ tầng hoặc nhà cung cấp dịch vụ (ví dụ dịch vụ hệ điều hành của Apple) xử lý dữ liệu ngoài lãnh thổ, việc này được thực hiện trong phạm vi cần thiết để cung cấp chức năng tương ứng và theo chính sách của nhà cung cấp đó.
        </p>
        <p>
          <Lang>EN</Lang>
          Data is primarily processed for operational systems in Vietnam. If infrastructure or service providers (e.g., Apple operating-system services) process data outside the territory, this is done only as necessary to provide the relevant features and under that provider’s policies.
        </p>
      </PolicySection>

      <PolicySection title="11) Thay đổi Chính sách / Policy Changes">
        <p>
          <Lang>VI</Lang>
          Chúng tôi có thể cập nhật Chính sách này theo thời gian. Phiên bản mới sẽ được đăng tại trang này và ghi rõ ngày cập nhật. Việc tiếp tục sử dụng Ứng dụng sau khi cập nhật đồng nghĩa với việc bạn chấp nhận phiên bản mới (trừ khi pháp luật yêu cầu hình thức đồng ý khác).
        </p>
        <p>
          <Lang>EN</Lang>
          We may update this Policy from time to time. The new version will be published on this page with a clear update date. Continued use of the App after an update means you accept the revised Policy (unless applicable law requires a different form of consent).
        </p>
      </PolicySection>

      <PolicySection title="12) Liên hệ / Contact Us">
        <p>
          <Lang>VI</Lang>
          Mọi câu hỏi về quyền riêng tư, yêu cầu truy cập / chỉnh sửa / xóa dữ liệu, vui lòng liên hệ:
        </p>
        <ul>
          <li>
            Email: <a href="mailto:dev.pth@icloud.com">dev.pth@icloud.com</a>
          </li>
          <li>Đơn vị: Pham Trong Hai</li>
          <li>Địa chỉ: Vietnam, Haiphong, Tanky</li>
          <li>
            Điện thoại: <a href="tel:+84889253238">+84 889253238</a>
          </li>
        </ul>
        <p>
          <Lang>EN</Lang>
          For privacy questions or requests to access / correct / delete data, please contact:
        </p>
        <ul>
          <li>
            Email: <a href="mailto:dev.pth@icloud.com">dev.pth@icloud.com</a>
          </li>
          <li>Operator: Pham Trong Hai</li>
          <li>Address: Vietnam, Haiphong, Tanky</li>
          <li>
            Phone: <a href="tel:+84889253238">+84 889253238</a>
          </li>
        </ul>
        <p>
          Chính sách ứng dụng còn lại: <Link href="/privacy/attendance">AttendanceByFace</Link>
          {" · "}
          <Link href="/privacy/quy-chu">Quy chủ địa chính</Link>
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
