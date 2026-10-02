import type { Metadata } from "next";
import Link from "next/link";
import { Lang, PolicyLayout, PolicySection } from "@/components/policy/policy-layout";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: "Chính sách AttendanceByFace",
  description: "Chính sách quyền riêng tư của ứng dụng AttendanceByFace.",
  alternates: { canonical: "/privacy/attendance" },
};

export default function AttendancePolicyPage() {
  return (
    <PolicyLayout
      app="AttendanceByFace"
      meta={[
        { label: "Phiên bản", value: "1.0" },
        { label: "Ngày hiệu lực", value: "05/05/2026" },
        { label: "Ứng dụng", value: "AttendanceByFace (Chấm công bằng khuôn mặt)" },
        { label: "Đơn vị phát triển", value: profile.name },
        { label: "Liên hệ", value: "dev.pth@icloud.com · Hải Phòng · +84 889 253 238" },
      ]}
    >
      <PolicySection title="1) Mục đích thu thập dữ liệu / Purpose of Data Collection">
        <p>
          <Lang>VI</Lang>
          AttendanceByFace được thiết kế để phục vụ chấm công, quản lý ra/vào, đăng ký nghỉ phép, trực ban và thông báo nội bộ trong tổ chức. Chúng tôi chỉ thu thập dữ liệu cần thiết để cung cấp các chức năng này.
        </p>
        <p>
          <Lang>EN</Lang>
          AttendanceByFace is designed for attendance tracking, in/out management, leave requests, duty scheduling, and internal notifications within an organization. We only collect data necessary to provide these features.
        </p>
      </PolicySection>

      <PolicySection title="2) Dữ liệu chúng tôi thu thập / Data We Collect">
        <p>
          <Lang>VI</Lang>
          Tùy theo vai trò tài khoản và cách bạn sử dụng ứng dụng, chúng tôi có thể xử lý các loại dữ liệu sau:
        </p>
        <ul>
          <li>Thông tin tài khoản: họ tên, email, phòng ban, chức vụ, số điện thoại, mã người dùng nội bộ.</li>
          <li>Dữ liệu chấm công: thời gian chấm công, trạng thái chấm công, lịch sử ca trực/đăng ký liên quan.</li>
          <li>Dữ liệu khuôn mặt (biometric-related): ảnh khuôn mặt hoặc dữ liệu đặc trưng khuôn mặt phục vụ xác thực chấm công.</li>
          <li>Dữ liệu vị trí: vị trí hiện tại khi thực hiện chấm công hoặc chức năng cần xác minh vị trí.</li>
          <li>Dữ liệu camera/ảnh: ảnh chụp khi xác thực chấm công, đăng ký khuôn mặt, hoặc cập nhật ảnh đại diện (nếu người dùng thực hiện).</li>
          <li>Dữ liệu thông báo: token thiết bị (ví dụ FCM/APNs token), trạng thái đã đọc/chưa đọc thông báo.</li>
          <li>Dữ liệu kỹ thuật cơ bản: thông tin thiết bị/phiên bản ứng dụng cần thiết để vận hành, bảo mật, chẩn đoán lỗi.</li>
        </ul>
        <p>
          <Lang>EN</Lang>
          Depending on your role and app usage, we may process:
        </p>
        <ul>
          <li>Account information: name, email, department, position, phone number, internal user ID.</li>
          <li>Attendance data: check-in/out timestamps, attendance status, related duty/registration records.</li>
          <li>Face-related data (biometric-related): face image or face feature data used for attendance verification.</li>
          <li>Location data: current location when checking attendance or using location-dependent features.</li>
          <li>Camera/photo data: captured images for attendance verification, face registration, or profile photo updates (when initiated by user).</li>
          <li>Notification data: device tokens (e.g., FCM/APNs tokens), read/unread notification status.</li>
          <li>Basic technical data: device/app version info necessary for operation, security, and troubleshooting.</li>
        </ul>
        <p>
          <strong>VI — Dữ liệu liên quan đến khuôn mặt</strong>
        </p>
        <p>
          Ứng dụng thu ảnh khuôn mặt thô từ camera thiết bị khi bạn đăng ký khuôn mặt và khi chấm công. Ảnh được gửi lên máy chủ của chúng tôi để trích xuất vector đặc trưng (embedding) và so khớp với vector khuôn mặt đã lưu cho tài khoản đã đăng ký nhằm xác thực danh tính phục vụ chấm công.
        </p>
        <p>
          <strong>Mục đích:</strong> Dữ liệu khuôn mặt chỉ được dùng cho xác thực chấm công (ghi nhận giờ làm). Chúng tôi không sử dụng ảnh khuôn mặt hoặc vector đặc trưng để huấn luyện, cải thiện hoặc phát triển mô hình học máy/AI (kể cả cho bên thứ ba).
        </p>
        <p>
          <strong>Chia sẻ:</strong> Chúng tôi không bán dữ liệu liên quan đến khuôn mặt và không chia sẻ cho bên thứ ba phục vụ mục đích riêng của họ. Việc xử lý được thực hiện trên hệ thống của chúng tôi trong phạm vi cần thiết để cung cấp dịch vụ chấm công.
        </p>
        <p>
          <strong>Lưu trữ:</strong> Ảnh thô và dữ liệu xác thực liên quan phục vụ chấm công được lưu trong 45 ngày để phục vụ hồ sơ chấm công và đối chiếu/xử lý khi có tranh chấp hoặc sai sót. Sau thời hạn này, dữ liệu được xóa tự động theo chính sách lưu trữ.
        </p>
        <p>
          <strong>EN — Face-related data</strong>
        </p>
        <p>
          We collect a raw face image from the device camera when you register your face and when you check in/out. The image is transmitted to our servers, where we extract a face feature vector (embedding) and compare it to the feature vector stored for your registered account to verify your identity for attendance.
        </p>
        <p>
          <strong>Purpose:</strong> Face data is used solely for employee attendance verification (time and attendance). We do not use face images or face embeddings to train, improve, or develop machine-learning/AI models (including for any third party).
        </p>
        <p>
          <strong>Sharing:</strong> We do not sell face-related data and do not share it with third parties for their own purposes. Processing is performed on our systems as necessary to provide the attendance service.
        </p>
        <p>
          <strong>Retention:</strong> Raw images and related face verification data used for attendance are retained for 45 days to support attendance records and reconciliation/investigation if there is a dispute or error. After that period, data is deleted.
        </p>
      </PolicySection>

      <PolicySection title="3) Quyền truy cập hệ thống (iOS permissions) / iOS Permissions">
        <p>
          <Lang>VI</Lang>
          Ứng dụng có thể yêu cầu các quyền sau:
        </p>
        <ul>
          <li>Camera: để chụp ảnh xác thực khuôn mặt/chấm công.</li>
          <li>Location (When In Use): để xác minh vị trí khi chấm công.</li>
          <li>Photos (nếu áp dụng): để chọn/cập nhật ảnh đại diện.</li>
          <li>Notifications: để gửi thông báo công việc và sự kiện liên quan.</li>
        </ul>
        <p>Bạn có thể tắt các quyền này trong phần Cài đặt iOS, nhưng một số chức năng có thể không hoạt động đầy đủ.</p>
        <p>
          <Lang>EN</Lang>
          The app may request:
        </p>
        <ul>
          <li>Camera: to capture images for face verification/attendance.</li>
          <li>Location (When In Use): to verify location during attendance actions.</li>
          <li>Photos (if applicable): to select/update profile picture.</li>
          <li>Notifications: to deliver work-related alerts and events.</li>
        </ul>
        <p>You can disable these permissions in iOS Settings, but some features may not function properly.</p>
      </PolicySection>

      <PolicySection title="4) Cách chúng tôi sử dụng dữ liệu / How We Use Data">
        <p>
          <Lang>VI</Lang>
          Chúng tôi sử dụng dữ liệu để:
        </p>
        <ul>
          <li>Xác thực danh tính và hỗ trợ đăng nhập an toàn.</li>
          <li>Thực hiện chấm công và quản lý lịch sử chấm công.</li>
          <li>Hỗ trợ đăng ký/duyệt nghỉ phép, trực ban, và yêu cầu ra/vào.</li>
          <li>Gửi thông báo liên quan đến công việc.</li>
          <li>Duy trì bảo mật, phát hiện bất thường, cải thiện ổn định dịch vụ.</li>
        </ul>
        <p>
          <Lang>EN</Lang>
          We use data to:
        </p>
        <ul>
          <li>Verify identity and support secure login.</li>
          <li>Process attendance and maintain attendance history.</li>
          <li>Support leave requests, duty workflows, and in/out approvals.</li>
          <li>Send work-related notifications.</li>
          <li>Maintain security, detect anomalies, and improve service reliability.</li>
        </ul>
      </PolicySection>

      <PolicySection title="5) Chia sẻ dữ liệu / Data Sharing">
        <p>
          <Lang>VI</Lang>
          Chúng tôi không bán dữ liệu cá nhân. Dữ liệu chỉ được chia sẻ trong các trường hợp cần thiết:
        </p>
        <ul>
          <li>Với hệ thống máy chủ/doanh nghiệp quản trị ứng dụng để cung cấp dịch vụ.</li>
          <li>Với nhà cung cấp hạ tầng kỹ thuật (ví dụ dịch vụ thông báo đẩy) theo phạm vi cần thiết.</li>
          <li>Khi có yêu cầu hợp pháp từ cơ quan có thẩm quyền theo quy định pháp luật.</li>
        </ul>
        <p>
          <Lang>EN</Lang>
          We do not sell personal data. Data may be shared only when necessary:
        </p>
        <ul>
          <li>With enterprise/backend systems operating the service.</li>
          <li>With technical infrastructure providers (e.g., push notification services) on a need-to-know basis.</li>
          <li>When legally required by competent authorities.</li>
        </ul>
      </PolicySection>

      <PolicySection title="6) Lưu trữ và bảo mật dữ liệu / Data Retention and Security">
        <p>
          <Lang>VI</Lang>
          Dữ liệu được lưu trong thời gian cần thiết để phục vụ mục đích vận hành, tuân thủ pháp luật và giải quyết tranh chấp (nếu có). Chúng tôi áp dụng các biện pháp bảo mật phù hợp về kỹ thuật và tổ chức để bảo vệ dữ liệu trước truy cập trái phép, mất mát hoặc lạm dụng.
        </p>
        <p>
          <Lang>EN</Lang>
          Data is retained as long as necessary for operational purposes, legal compliance, and dispute resolution (if any). We implement appropriate technical and organizational safeguards to protect data against unauthorized access, loss, or misuse.
        </p>
      </PolicySection>

      <PolicySection title="7) Quyền của người dùng / Your Rights">
        <p>
          <Lang>VI</Lang>
          Tùy quy định pháp luật áp dụng, bạn có thể có quyền:
        </p>
        <ul>
          <li>Yêu cầu truy cập, chỉnh sửa hoặc cập nhật dữ liệu cá nhân.</li>
          <li>Yêu cầu xóa hoặc hạn chế xử lý dữ liệu trong một số trường hợp.</li>
          <li>Rút lại sự đồng ý đối với một số hoạt động xử lý (nếu dựa trên consent).</li>
          <li>Khiếu nại với đơn vị quản lý dữ liệu hoặc cơ quan nhà nước có thẩm quyền.</li>
        </ul>
        <p>
          <strong>Liên hệ:</strong> <a href="mailto:dev.pth@icloud.com">dev.pth@icloud.com</a> để thực hiện yêu cầu.
        </p>
        <p>
          <Lang>EN</Lang>
          Subject to applicable laws, you may have rights to:
        </p>
        <ul>
          <li>Access, correct, or update your personal data.</li>
          <li>Request deletion or restriction of processing in certain circumstances.</li>
          <li>Withdraw consent for certain processing activities (where consent is the legal basis).</li>
          <li>Lodge a complaint with the data controller or competent authority.</li>
        </ul>
        <p>
          <strong>Contact:</strong> <a href="mailto:dev.pth@icloud.com">dev.pth@icloud.com</a> to submit requests.
        </p>
      </PolicySection>

      <PolicySection title="8) Dữ liệu trẻ em / Children's Privacy">
        <p>
          <Lang>VI</Lang>
          Ứng dụng không hướng tới người dùng dưới [13/16] tuổi và không cố ý thu thập dữ liệu từ trẻ em dưới độ tuổi này. Nếu phát hiện dữ liệu được cung cấp không phù hợp, chúng tôi sẽ xử lý xóa theo quy định.
        </p>
        <p>
          <Lang>EN</Lang>
          The app is not directed to children under [13/16], and we do not knowingly collect personal data from children below this age. If such data is identified, we will take steps to delete it in accordance with applicable law.
        </p>
      </PolicySection>

      <PolicySection title="9) Chuyển dữ liệu xuyên biên giới (nếu có) / International Data Transfers (if any)">
        <p>
          <Lang>VI</Lang>
          Trong trường hợp dữ liệu được xử lý/lưu trữ ngoài quốc gia của bạn, chúng tôi áp dụng biện pháp phù hợp theo quy định pháp luật để bảo vệ dữ liệu.
        </p>
        <p>
          <Lang>EN</Lang>
          If data is processed/stored outside your country, we apply appropriate safeguards as required by applicable laws.
        </p>
      </PolicySection>

      <PolicySection title="10) Thay đổi chính sách / Policy Changes">
        <p>
          <Lang>VI</Lang>
          Chúng tôi có thể cập nhật Chính sách này theo thời gian. Phiên bản mới sẽ được công bố tại trang này. Việc tiếp tục sử dụng ứng dụng sau khi cập nhật đồng nghĩa bạn đã đọc và hiểu phiên bản mới.
        </p>
        <p>
          <Lang>EN</Lang>
          We may update this Policy from time to time. The latest version will be published on this page. Continued use of the app after updates means you have reviewed and understood the revised Policy.
        </p>
      </PolicySection>

      <PolicySection title="11) Liên hệ / Contact Us">
        <p>
          <Lang>VI</Lang>
          Nếu bạn có câu hỏi về quyền riêng tư hoặc muốn thực hiện quyền dữ liệu cá nhân, vui lòng liên hệ:
        </p>
        <ul>
          <li>
            Email: <a href="mailto:dev.pth@icloud.com">dev.pth@icloud.com</a>
          </li>
          <li>Địa chỉ: Vietnam, Haiphong, Tanky</li>
          <li>
            Điện thoại: <a href="tel:+84889253238">+84 889253238</a>
          </li>
        </ul>
        <p>
          <Lang>EN</Lang>
          If you have questions about privacy or want to exercise your data rights, contact us at:
        </p>
        <ul>
          <li>
            Email: <a href="mailto:dev.pth@icloud.com">dev.pth@icloud.com</a>
          </li>
          <li>Address: Vietnam, Haiphong, Tanky</li>
          <li>
            Phone: <a href="tel:+84889253238">+84 889253238</a>
          </li>
        </ul>
        <p>
          Chính sách ứng dụng còn lại: <Link href="/privacy/mo-liet-si">Mộ liệt sĩ</Link>
          {" · "}
          <Link href="/privacy/quy-chu">Quy chủ địa chính</Link>
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
