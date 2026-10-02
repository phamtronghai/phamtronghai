import type { Metadata } from "next";
import Link from "next/link";
import { Lang, PolicyLayout, PolicySection } from "@/components/policy/policy-layout";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: "Chính sách Quy chủ địa chính",
  description: "Chính sách quyền riêng tư của ứng dụng Quy chủ địa chính.",
  alternates: { canonical: "/privacy/quy-chu" },
};

export default function QuyChuPolicyPage() {
  return (
    <PolicyLayout
      app="Quy chủ địa chính"
      meta={[
        { label: "Phiên bản", value: "1.0" },
        { label: "Ngày hiệu lực", value: "02/10/2026" },
        { label: "Ứng dụng", value: "Quy chủ địa chính" },
        { label: "Đơn vị phát triển", value: profile.name },
        { label: "Đơn vị ghi trên ứng dụng", value: "Công ty TNHH MTV Trắc địa bản đồ" },
        { label: "Liên hệ", value: "dev.pth@icloud.com · Hải Phòng · +84 889 253 238" },
      ]}
    >
      <PolicySection title="1) Mục đích thu thập dữ liệu / Purpose of Data Collection">
        <p>
          <Lang>VI</Lang>
          Quy chủ địa chính dùng để thu thập điểm khảo sát địa chính ngoài thực địa: định vị trên bản đồ, ghi chú, đính kèm ảnh và PDF, quét QR căn cước của chủ sở hữu, lưu trên máy và đồng bộ lên máy chủ của đơn vị vận hành khi có mạng. Ứng dụng chỉ xử lý dữ liệu cần cho các việc này.
        </p>
        <p>
          <Lang>EN</Lang>
          Quy chủ địa chính is used to collect cadastral field-survey points: map positioning, notes, photo and PDF attachments, ID-card QR scans of land owners, on-device storage, and sync to the operating organization&apos;s server when a network is available. The app processes only data needed for these tasks.
        </p>
      </PolicySection>

      <PolicySection title="2) Dữ liệu chúng tôi thu thập / Data We Collect">
        <p>
          <Lang>VI</Lang>
          Tùy tài khoản và cách sử dụng, ứng dụng có thể xử lý:
        </p>
        <ul>
          <li>Thông tin tài khoản: tên đăng nhập hoặc email, mật khẩu, họ tên, đơn vị, phòng, địa bàn tỉnh/xã được gán.</li>
          <li>Điểm khảo sát: tọa độ, ghi chú, thời điểm tạo, người tạo, mã tỉnh/xã.</li>
          <li>Ảnh và PDF đính kèm điểm, gồm ảnh hoặc tệp căn cước, giấy chứng nhận quyền sử dụng đất và tài liệu khác do người dùng chọn hoặc chụp.</li>
          <li>Dữ liệu QR căn cước của chủ sở hữu, khi người dùng quét mã: số căn cước, số CMND cũ, họ tên, ngày sinh, giới tính, địa chỉ, ngày cấp, và chuỗi QR gốc. Một điểm có thể lưu nhiều người.</li>
          <li>Vị trí thiết bị khi đang dùng bản đồ, để đưa camera bản đồ tới vị trí hiện tại và ghi tọa độ điểm.</li>
          <li>Bản đồ nền đã tải về máy theo địa bàn được phân công.</li>
          <li>Dữ liệu kỹ thuật cần để đăng nhập, đồng bộ và xử lý lỗi: phiên đăng nhập trên thiết bị, trạng thái đồng bộ.</li>
        </ul>
        <p>
          <Lang>EN</Lang>
          Depending on the account and how the app is used, it may process:
        </p>
        <ul>
          <li>Account information: username or email, password, full name, organization unit, department, and assigned province/commune.</li>
          <li>Survey points: coordinates, notes, creation time, creator, and province/commune codes.</li>
          <li>Photos and PDFs attached to a point, including ID-card files, land-certificate files, and other documents the user captures or selects.</li>
          <li>ID-card QR data of land owners, when the user scans a code: ID number, legacy ID number, name, date of birth, gender, address, issue date, and the raw QR string. One point may store several people.</li>
          <li>Device location while the map is in use, to move the map camera to the current position and to record the point coordinates.</li>
          <li>Basemap tiles downloaded to the device for the assigned administrative area.</li>
          <li>Technical data needed to sign in, sync, and handle errors: the on-device session and sync status.</li>
        </ul>

        <h3 className="pt-2 font-display text-base font-semibold text-bone">
          Dữ liệu QR căn cước / ID-card QR data
        </h3>
        <p>
          <Lang>VI</Lang>
          Ứng dụng không tự quét căn cước. Chỉ khi người dùng bấm quét QR, camera đọc mã trên thẻ và ứng dụng tách các trường nêu trên để lưu cùng điểm khảo sát. Dữ liệu này là thông tin của chủ sở hữu đất, không chỉ của người đang đăng nhập. Dữ liệu được lưu trên máy và, với tài khoản được phép đồng bộ, được gửi lên máy chủ cùng điểm.
        </p>
        <p>
          <Lang>EN</Lang>
          The app does not scan an ID card on its own. Only when the user starts a QR scan does the camera read the card, and the app splits out the fields above to store them with the survey point. This is information about the land owner, not only the signed-in user. It is stored on the device and, for accounts allowed to sync, sent to the server with the point.
        </p>

        <h3 className="pt-2 font-display text-base font-semibold text-bone">
          Giấy chứng nhận và OCR / Land certificates and OCR
        </h3>
        <p>
          <Lang>VI</Lang>
          Khi ảnh hoặc PDF giấy chứng nhận đã được tải lên máy chủ, máy chủ có thể gửi các tệp đó tới dịch vụ OCR của đơn vị vận hành để đọc nội dung giấy và lưu kết quả cùng điểm khảo sát. Ứng dụng không mô tả việc dùng các tệp này để huấn luyện mô hình.
        </p>
        <p>
          <Lang>EN</Lang>
          After a land-certificate photo or PDF has been uploaded, the server may send those files to the operating organization&apos;s OCR service to read the document and store the result with the survey point. The app does not describe using these files to train a model.
        </p>

        <h3 className="pt-2 font-display text-base font-semibold text-bone">
          Face ID / vân tay / Face ID / fingerprint
        </h3>
        <p>
          <Lang>VI</Lang>
          Nếu người dùng bật đăng nhập nhanh, hệ điều hành xác thực Face ID hoặc vân tay trên thiết bị. Ứng dụng không nhận và không gửi mẫu sinh trắc lên máy chủ.
        </p>
        <p>
          <Lang>EN</Lang>
          If the user enables quick sign-in, the operating system checks Face ID or a fingerprint on the device. The app does not receive or upload a biometric template.
        </p>

        <h3 className="pt-2 font-display text-base font-semibold text-bone">
          Tài khoản dùng thử / Trial account
        </h3>
        <p>
          <Lang>VI</Lang>
          Tài khoản dùng thử không đẩy điểm và tệp lên máy chủ. Khi đăng xuất, dữ liệu điểm và tệp mà tài khoản đó đã tạo trên máy bị xóa.
        </p>
        <p>
          <Lang>EN</Lang>
          The trial account does not upload points or files. On sign-out, points and files that account created on the device are deleted.
        </p>
      </PolicySection>

      <PolicySection title="3) Quyền truy cập hệ thống (iOS) / iOS Permissions">
        <p>
          <Lang>VI</Lang>
          Ứng dụng có thể hỏi:
        </p>
        <ul>
          <li>Camera: chụp ảnh đính kèm và quét QR căn cước tại điểm khảo sát.</li>
          <li>Vị trí khi đang dùng ứng dụng: định vị trên bản đồ khảo sát. Bản cài iOS có thêm dòng mục đích cho vị trí «luôn luôn» vì thư viện định vị tham chiếu quyền này; luồng trong ứng dụng là định vị khi đang mở bản đồ.</li>
          <li>Thư viện ảnh: chọn ảnh có sẵn để đính kèm điểm.</li>
          <li>Face ID: đăng nhập nhanh. Mẫu sinh trắc ở lại trên thiết bị.</li>
        </ul>
        <p>
          Ứng dụng không xin quyền thông báo đẩy. Tắt một quyền trong Cài đặt iOS thì phần việc tương ứng không chạy.
        </p>
        <p>
          <Lang>EN</Lang>
          The app may request:
        </p>
        <ul>
          <li>Camera: to capture attachments and scan an ID-card QR at a survey point.</li>
          <li>Location while the app is in use: to position the survey map. The iOS build also includes an &quot;always&quot; location purpose string because the location library references that permission; the in-app flow positions the map while it is open.</li>
          <li>Photo library: to pick an existing photo as an attachment.</li>
          <li>Face ID: for quick sign-in. The biometric template stays on the device.</li>
        </ul>
        <p>
          The app does not request push-notification permission. Turning a permission off in iOS Settings stops the related feature.
        </p>
      </PolicySection>

      <PolicySection title="4) Cách chúng tôi sử dụng dữ liệu / How We Use Data">
        <p>
          <Lang>VI</Lang>
          Dữ liệu được dùng để:
        </p>
        <ul>
          <li>Đăng nhập và giữ phiên làm việc của tài khoản được cấp.</li>
          <li>Hiển thị bản đồ, ghi điểm khảo sát và địa bàn tương ứng.</li>
          <li>Lưu và đồng bộ ghi chú, ảnh, PDF và thông tin căn cước đã quét.</li>
          <li>Đọc giấy chứng nhận đã tải lên qua OCR của đơn vị vận hành và lưu kết quả vào điểm.</li>
          <li>Giữ bản đồ nền trên máy cho địa bàn đã được gán.</li>
        </ul>
        <p>
          <Lang>EN</Lang>
          Data is used to:
        </p>
        <ul>
          <li>Sign in and keep the session of an issued account.</li>
          <li>Show the map, record survey points, and resolve the administrative area.</li>
          <li>Store and sync notes, photos, PDFs, and scanned ID-card details.</li>
          <li>Read an uploaded land certificate through the operating organization&apos;s OCR service and store the result on the point.</li>
          <li>Keep an offline basemap on the device for the assigned area.</li>
        </ul>
      </PolicySection>

      <PolicySection title="5) Chia sẻ dữ liệu / Data Sharing">
        <p>
          <Lang>VI</Lang>
          Ứng dụng không bán dữ liệu cá nhân. Dữ liệu điểm, tệp và căn cước đã quét được gửi tới máy chủ của đơn vị vận hành ứng dụng khi tài khoản được phép đồng bộ. Ảnh hoặc PDF giấy chứng nhận có thể được máy chủ chuyển tiếp tới dịch vụ OCR của chính đơn vị đó. Dữ liệu có thể được cung cấp khi cơ quan có thẩm quyền yêu cầu theo pháp luật.
        </p>
        <p>
          <Lang>EN</Lang>
          The app does not sell personal data. Points, files, and scanned ID-card data are sent to the operating organization&apos;s server when the account is allowed to sync. A land-certificate photo or PDF may be forwarded by that server to the same organization&apos;s OCR service. Data may be disclosed when a competent authority requires it by law.
        </p>
      </PolicySection>

      <PolicySection title="6) Lưu trữ và bảo mật / Data Retention and Security">
        <p>
          <Lang>VI</Lang>
          Trên máy, điểm và tệp nằm trong vùng lưu trữ của ứng dụng cho đến khi người dùng xóa điểm, hoặc đến khi tài khoản dùng thử đăng xuất. Trên máy chủ, điểm đã đồng bộ và tệp đính kèm được giữ để phục vụ hồ sơ khảo sát cho đến khi đơn vị vận hành xóa. Mật khẩu đăng nhập không được ứng dụng ghi ra màn hình chính sách này; phiên đăng nhập được giữ trên thiết bị. Không có thời hạn xóa tự động riêng cho ảnh căn cước hoặc giấy chứng nhận ngoài các trường hợp xóa nêu trên.
        </p>
        <p>
          <Lang>EN</Lang>
          On the device, points and files stay in the app storage until the user deletes the point, or until a trial account signs out. On the server, synced points and attachments are kept for the survey record until the operating organization deletes them. This policy does not display sign-in passwords; the session is kept on the device. There is no separate automatic deletion period for ID-card images or land certificates beyond the deletion cases above.
        </p>
      </PolicySection>

      <PolicySection title="7) Quyền của người dùng / Your Rights">
        <p>
          <Lang>VI</Lang>
          Tùy pháp luật áp dụng, người dùng tài khoản và người có dữ liệu trong điểm khảo sát có thể yêu cầu truy cập, sửa, hoặc xóa dữ liệu cá nhân, hoặc rút lại đồng ý đối với xử lý dựa trên đồng ý. Quyền trên iOS có thể tắt trong Cài đặt. Yêu cầu về dữ liệu đã đồng bộ gửi qua email bên dưới; đơn vị vận hành ứng dụng là nơi lưu hồ sơ trên máy chủ.
        </p>
        <p>
          <Lang>EN</Lang>
          Subject to applicable law, the account holder and a person whose data is stored on a survey point may request access, correction, or deletion, or withdraw consent where processing is based on consent. iOS permissions can be turned off in Settings. Requests about synced data go to the email below; the operating organization holds the server record.
        </p>
        <p>
          <strong>Liên hệ / Contact:</strong>{" "}
          <a href="mailto:dev.pth@icloud.com">dev.pth@icloud.com</a>
        </p>
      </PolicySection>

      <PolicySection title="8) Dữ liệu trẻ em / Children's Privacy">
        <p>
          <Lang>VI</Lang>
          Ứng dụng dành cho tài khoản do đơn vị cấp để khảo sát địa chính, không hướng tới trẻ em và không cố ý mở tài khoản cho trẻ em. Nếu một điểm có dữ liệu căn cước của người chưa thành niên vì người đó đứng tên trên giấy tờ, dữ liệu đó được xử lý như dữ liệu chủ sở hữu nêu ở mục 2.
        </p>
        <p>
          <Lang>EN</Lang>
          The app is for accounts issued by the organization for cadastral survey. It is not directed at children and does not knowingly open accounts for children. If a point contains ID-card data of a minor because that person is named on a document, that data is handled as land-owner data described in section 2.
        </p>
      </PolicySection>

      <PolicySection title="9) Nơi xử lý dữ liệu / Where Data Is Processed">
        <p>
          <Lang>VI</Lang>
          Dữ liệu khảo sát đã đồng bộ được xử lý trên máy chủ của đơn vị vận hành ứng dụng. Chính sách này không mô tả việc chuyển dữ liệu ra ngoài Việt Nam.
        </p>
        <p>
          <Lang>EN</Lang>
          Synced survey data is processed on the operating organization&apos;s servers. This policy does not describe a transfer of data outside Vietnam.
        </p>
      </PolicySection>

      <PolicySection title="10) Thay đổi chính sách / Policy Changes">
        <p>
          <Lang>VI</Lang>
          Chính sách có thể được cập nhật. Bản mới được đăng tại trang này. Tiếp tục dùng ứng dụng sau khi bản mới có hiệu lực có nghĩa là người dùng đã đọc bản đó.
        </p>
        <p>
          <Lang>EN</Lang>
          This policy may be updated. The new version is published on this page. Continuing to use the app after the new version takes effect means the user has read it.
        </p>
      </PolicySection>

      <PolicySection title="11) Liên hệ / Contact Us">
        <p>
          <Lang>VI</Lang>
          Câu hỏi về quyền riêng tư hoặc yêu cầu về dữ liệu cá nhân:
        </p>
        <ul>
          <li>
            Email: <a href="mailto:dev.pth@icloud.com">dev.pth@icloud.com</a>
          </li>
          <li>Địa chỉ: Việt Nam, Hải Phòng</li>
          <li>
            Điện thoại: <a href="tel:+84889253238">+84 889 253 238</a>
          </li>
        </ul>
        <p>
          <Lang>EN</Lang>
          Privacy questions or personal-data requests:
        </p>
        <ul>
          <li>
            Email: <a href="mailto:dev.pth@icloud.com">dev.pth@icloud.com</a>
          </li>
          <li>Address: Vietnam, Haiphong</li>
          <li>
            Phone: <a href="tel:+84889253238">+84 889 253 238</a>
          </li>
        </ul>
        <p>
          Chính sách ứng dụng còn lại: <Link href="/privacy/attendance">AttendanceByFace</Link>
          {" · "}
          <Link href="/privacy/mo-liet-si">Mộ liệt sĩ</Link>
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
