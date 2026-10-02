// Hồ sơ Phạm Trọng Hải. Chỉ ghi những gì có trong CV và chính sách ứng dụng.

const attendanceShots = [
  "1787891757228_204081392183455525_6380856099934285181_95311fea5059a03f8b2c9f53bb04fc5a.jpg",
  "1787891757818_204081392183455525_6380856099934285181_60c9f40a60e2c42f4d020f8ddbe9b92d.jpg",
  "1787891758080_204081392183455525_6380856099934285181_a0d1a889e62218b16000ca12cb5f6ca2.jpg",
  "1787891758285_204081392183455525_6380856099934285181_e9b9a5aa83a026b248864edc002c279a.jpg",
  "1787891758472_204081392183455525_6380856099934285181_906a861671c22dfdbd0ce653e9979b1f.jpg",
  "1787891758713_204081392183455525_6380856099934285181_db2981a184a843360eb65320302d98ec.jpg",
  "1787891759124_204081392183455525_6380856099934285181_6eaf3fbc578b49710dd2e0f14c2bef5b.jpg",
  "1787891759304_204081392183455525_6380856099934285181_8c209527f27d37ca5ce8be6fc90b1baf.jpg",
  "1787891759522_204081392183455525_6380856099934285181_15e901a82fd05e895b45444f1b5dd4e7.jpg",
].map((file) => `/assets/shots/attendance/${file}`);

const mlsShots = [
  "1784873326062_204081392183455525_6380856099934285181_a34c7863a2716756d800fd677e297993.jpg",
  "1784873326496_204081392183455525_6380856099934285181_630a423238f1078165b84ce36fe737e1.jpg",
  "1784873326797_204081392183455525_6380856099934285181_62dcc533ea2ea749ee085cab76702acd.jpg",
  "1784873327006_204081392183455525_6380856099934285181_cac5fe0a0de647cd01999620e2879a23.jpg",
  "1784873327193_204081392183455525_6380856099934285181_058a2686bc0c83c6d92dd13b01302b05.jpg",
  "1784873327433_204081392183455525_6380856099934285181_11d1d311d9c7ffdf29c58f41ca194486.jpg",
  "1784873327711_204081392183455525_6380856099934285181_d33e0dfcd607c71346db91cad6b04398.jpg",
].map((file) => `/assets/shots/mls/${file}`);

const qcdcShots = ["9.png", "10.png", "11.png", "12.png", "13.png"].map(
  (file) => `/assets/shots/qcdc/${file}`,
);

export const profile = {
  name: "Phạm Trọng Hải",
  role: "Kỹ sư phần mềm và chuyên gia GIS/Bản đồ",
  location: "Hải Phòng, Việt Nam",
  birthday: "22/11/1994",
  email: "dev.pth@icloud.com",
  phones: [
    { display: "+84 886 798 392", href: "+84886798392" },
    { display: "+84 889 253 238", href: "+84889253238" },
  ],
  resume: "/resume",
  resumeFile: "",
  socials: {
    github: "https://github.com/phamtronghai/phamtronghai.github.io",
    githubLabel: "github.com/phamtronghai",
    linkedin: "",
    website: "",
  },
  status: {
    label: "Kỹ sư phần mềm",
    org: "SAMCOM",
    note: "Nhóm Nghiên cứu và Phát triển KHCN",
    available: "SAMCOM · Hà Nội",
  },
  headline: ["WebGIS, ứng dụng di động", "và hạ tầng AI cục bộ."],
  intro:
    "Kỹ sư phần mềm và chuyên gia GIS/Bản đồ, nghiên cứu sinh tiến sĩ tại MIIGAiK. Xây dựng giải pháp WebGIS, ứng dụng di động và backend, đồng thời tích hợp mô hình AI/LLM cục bộ vào hạ tầng đám mây.",
} as const;

export const about = {
  lead: "Xây dựng WebGIS, ứng dụng di động và hệ thống backend, rồi đưa AI cục bộ vào chính hạ tầng đó.",
  paragraphs: [
    "Tôi là kỹ sư phần mềm và chuyên gia GIS/Bản đồ, với nền tảng nghiên cứu tại Đại học Trắc địa và Bản đồ Quốc gia Moscow (MIIGAiK). Công việc tập trung vào giải pháp WebGIS, ứng dụng di động đa nền tảng và backend hiệu năng cao.",
    "Tại SAMCOM tôi tham gia hệ sinh thái phần mềm nội bộ và các giải pháp WebGIS, gồm geocoding và xử lý dữ liệu không gian. Song song, tôi triển khai cụm RKE2 để tự lưu trữ và chạy các mô hình AI mã nguồn mở phục vụ suy luận nội bộ.",
  ],
  now: [
    "Kỹ sư phần mềm tại SAMCOM từ 03/2025",
    "Đã bảo vệ luận án tiến sĩ ngành Trắc địa và Bản đồ tại MIIGAiK",
    "Hạ tầng AI/LLM cục bộ trên RKE2, 04/2026",
  ],
  facts: [
    { k: "Ở", v: "Hải Phòng" },
    { k: "Hiện tại", v: "Kỹ sư phần mềm, SAMCOM" },
    { k: "Học vấn", v: "Tiến sĩ, MIIGAiK" },
    { k: "Trọng tâm", v: "WebGIS, di động, AI cục bộ" },
  ],
} as const;

export const capabilities = [
  {
    title: "WebGIS",
    body: "Ứng dụng WebGIS tổng thể, geocoding và các luồng xử lý dữ liệu không gian.",
  },
  {
    title: "Ứng dụng di động",
    body: "Ứng dụng thu thập, đồng bộ dữ liệu thực địa và vận hành nội bộ.",
  },
  {
    title: "Backend",
    body: "Hệ thống backend hiệu năng cao cho phần mềm chuyên ngành và dữ liệu không gian.",
  },
  {
    title: "AI/LLM cục bộ",
    body: "Cụm RKE2 trên Rocky Linux, GPU NVIDIA L40S, suy luận nội bộ với Ollama và vLLM.",
  },
] as const;

export type Experience = {
  company: string;
  role: string;
  location: string;
  mode: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "SAMCOM",
    role: "Kỹ sư phần mềm",
    location: "Hà Nội, Việt Nam",
    mode: "Nhóm NC&PT KHCN",
    start: "03/2025",
    end: "Hiện tại",
    current: true,
    summary:
      "Công ty TNHH MTV Trắc địa Bản đồ. Phát triển hệ sinh thái phần mềm nội bộ và giải pháp WebGIS.",
    bullets: [
      "Tham gia phát triển hệ sinh thái phần mềm nội bộ chuyên dụng và các giải pháp WebGIS tổng thể.",
      "Triển khai, tối ưu hóa hệ thống Geocoding và các luồng xử lý dữ liệu không gian phức tạp.",
    ],
  },
  {
    company: "SAMCOM",
    role: "Kỹ sư phần mềm",
    location: "Hà Nội, Việt Nam",
    mode: "Nhóm NC&PT KHCN",
    start: "04/2020",
    end: "11/2021",
    summary:
      "Công ty TNHH MTV Trắc địa Bản đồ. Cùng nhóm Nghiên cứu và Phát triển KHCN, trước giai đoạn nghiên cứu sinh.",
    bullets: [
      "Tham gia phát triển hệ sinh thái phần mềm nội bộ chuyên dụng và các giải pháp WebGIS tổng thể.",
      "Triển khai, tối ưu hóa hệ thống Geocoding và các luồng xử lý dữ liệu không gian phức tạp.",
    ],
  },
];

export const education = {
  school: "Đại học Trắc địa và Bản đồ Quốc gia Moscow (MIIGAiK)",
  program: "Nghiên cứu sinh tiến sĩ, Trắc địa và Bản đồ",
  location: "Moscow, Liên bang Nga",
  start: "11/2021",
  end: "03/2025",
  points: [
    "Bảo vệ thành công luận án tiến sĩ chuyên ngành Trắc địa và Bản đồ.",
    "Nghiên cứu chuyên sâu về dữ liệu không gian và khoa học bản đồ.",
  ],
} as const;

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  oneLiner: string;
  summary: string;
  detail: string;
  highlights: string[];
  stack: string[];
  links: { live?: string; repo?: string; docs?: string };
  image: string;
  gallery?: string[];
  fit?: "cover" | "content";
  featured: boolean;
  year: string;
  team?: string;
  active?: boolean;
  metrics?: { value: string; label: string; href?: string; live?: boolean }[];
  badges?: { src: string; alt: string; href: string }[];
  cite?: {
    doi: string;
    doiLabel: string;
    orcid: string;
    apa: string;
    bibtex: string;
  };
};

export const projects: Project[] = [
  {
    slug: "cham-cong",
    name: "Chấm công và tư liệu số",
    tagline: "AttendanceByFace",
    oneLiner:
      "Phần mềm chấm công bằng khuôn mặt và quản lý tư liệu số cho vận hành nội bộ.",
    summary:
      "Xây dựng và quản lý phần mềm cốt lõi phục vụ chấm công, ra/vào, nghỉ phép, trực ban và thông báo nội bộ.",
    detail:
      "AttendanceByFace phục vụ chấm công, quản lý ra/vào, đăng ký nghỉ phép, trực ban và thông báo nội bộ. Ảnh khuôn mặt được dùng để xác thực danh tính khi chấm công.\n\nĐây là nhóm phần mềm chấm công và quản lý tư liệu số trong các dự án vận hành nội bộ.",
    highlights: [
      "Chấm công, ra/vào, nghỉ phép, trực ban và thông báo nội bộ.",
      "Xác thực khuôn mặt phục vụ ghi nhận giờ làm.",
      "Chính sách quyền riêng tư công khai cho App Store.",
    ],
    stack: [],
    links: {
      docs: "/privacy/attendance",
    },
    image: attendanceShots[0],
    gallery: attendanceShots,
    fit: "content",
    featured: true,
    year: "",
    active: true,
  },
  {
    slug: "dieu-tra",
    name: "Điều tra ngoại nghiệp",
    tagline: "Thu thập thực địa",
    oneLiner: "Ứng dụng hỗ trợ thu thập và đồng bộ dữ liệu thực địa.",
    summary: "Phát triển ứng dụng hỗ trợ thu thập và đồng bộ dữ liệu khi làm việc ngoài thực địa.",
    detail: "Hệ thống điều tra ngoại nghiệp hỗ trợ thu thập dữ liệu tại hiện trường và đồng bộ về hệ thống nghiệp vụ.",
    highlights: ["Thu thập dữ liệu thực địa.", "Đồng bộ dữ liệu về hệ thống."],
    stack: [],
    links: {},
    image: "",
    featured: false,
    year: "",
  },
  {
    slug: "quy-chu",
    name: "Quy chủ địa chính",
    tagline: "Khảo sát địa chính",
    oneLiner:
      "Thu thập điểm khảo sát địa chính trên bản đồ, đính kèm hồ sơ và đồng bộ khi có mạng.",
    summary:
      "Thu thập điểm khảo sát ngoài thực địa: định vị, ghi chú, ảnh và PDF, quét QR căn cước, lưu trên máy và đồng bộ lên máy chủ đơn vị vận hành.",
    detail:
      "Quy chủ địa chính thu thập điểm khảo sát địa chính ngoài thực địa: định vị trên bản đồ, ghi chú, đính kèm ảnh và PDF, quét QR căn cước của chủ sở hữu, lưu trên máy và đồng bộ lên máy chủ của đơn vị vận hành khi có mạng.\n\nBản đồ nền được tải về máy theo địa bàn được phân công. Tài khoản dùng thử không đẩy điểm và tệp lên máy chủ.",
    highlights: [
      "Định vị trên bản đồ, ghi điểm khảo sát và tải bản đồ nền dùng offline.",
      "Đính kèm ảnh, PDF, giấy chứng nhận và quét QR căn cước của chủ sở hữu.",
      "Lưu trên máy, đồng bộ khi có mạng. Chính sách quyền riêng tư công khai.",
    ],
    stack: [],
    links: {
      docs: "/privacy/quy-chu",
    },
    image: qcdcShots[0],
    gallery: qcdcShots,
    fit: "content",
    featured: true,
    year: "",
    active: true,
  },
  {
    slug: "mo-liet-si",
    name: "Mộ liệt sĩ",
    tagline: "CV thực địa",
    oneLiner:
      "Nền tảng quản lý thông tin tìm kiếm, quy tập hài cốt liệt sĩ trên bản đồ.",
    summary:
      "Hỗ trợ tìm kiếm, ghi nhận và quản lý thông tin nghĩa trang, mộ liệt sĩ trên bản đồ cho công tác thực địa.",
    detail:
      "Ứng dụng Mộ liệt sĩ (CV thực địa) hỗ trợ tìm kiếm, ghi nhận và quản lý thông tin nghĩa trang và mộ liệt sĩ trên bản đồ.\n\nNgười dùng được cấp tài khoản có thể định vị, tạo và chỉnh sửa đối tượng bản đồ, đính kèm ảnh và nhập liệu bằng giọng nói. Dữ liệu nghiệp vụ đồng bộ lên hệ thống backend.",
    highlights: [
      "Bản đồ, GPS và dữ liệu hình học (điểm, đường, vùng).",
      "Ảnh đính kèm và nhập liệu bằng giọng nói.",
      "Chính sách quyền riêng tư công khai cho App Store.",
    ],
    stack: ["MapLibre", "GeoJSON"],
    links: {
      docs: "/privacy/mo-liet-si",
    },
    image: mlsShots[0],
    gallery: mlsShots,
    fit: "content",
    featured: true,
    year: "",
    active: true,
  },
  {
    slug: "ban-sao-so",
    name: "Bản sao số",
    tagline: "Digital Twin",
    oneLiner: "Mô hình 3D trực quan hóa dữ liệu không gian.",
    summary: "Xây dựng mô hình 3D để trực quan hóa dữ liệu không gian và tối ưu hiệu năng hiển thị.",
    detail:
      "Bản sao số (Digital Twin) dựng mô hình 3D để trực quan hóa dữ liệu không gian, với trọng tâm là hiệu năng hiển thị.",
    highlights: ["Mô hình 3D cho dữ liệu không gian.", "Tối ưu hiệu năng hiển thị."],
    stack: [],
    links: {},
    image: "",
    featured: false,
    year: "",
  },
  {
    slug: "ha-tang-ai",
    name: "Hạ tầng AI/LLM cục bộ",
    tagline: "RKE2 Kubernetes",
    oneLiner:
      "Cụm RKE2 trên Rocky Linux, GPU NVIDIA L40S, suy luận nội bộ với Ollama và vLLM.",
    summary:
      "Triển khai cụm RKE2 nhiều nút để tự lưu trữ và chạy các mô hình AI mã nguồn mở.",
    detail:
      "Hạ tầng AI/LLM cục bộ dùng cụm RKE2 trên Rocky Linux với GPU NVIDIA L40S. Các mô hình mã nguồn mở (Qwen, DeepSeek) được phục vụ suy luận nội bộ qua Ollama và vLLM. Triển khai tháng 04/2026.",
    highlights: [
      "Cụm RKE2 trên Rocky Linux, GPU NVIDIA L40S.",
      "Tự lưu trữ mô hình Qwen và DeepSeek.",
      "Suy luận nội bộ qua Ollama và vLLM.",
    ],
    stack: ["RKE2", "Rocky Linux", "NVIDIA L40S", "Ollama", "vLLM"],
    links: {},
    image: "",
    featured: false,
    year: "04/2026",
  },
];

export const WEB_PROJECTS: string[] = [];

export const FEATURED_ORDER = ["cham-cong", "mo-liet-si", "quy-chu"];

export const research = {
  title: "Trắc địa và Bản đồ",
  subtitle: "Nghiên cứu sinh tiến sĩ tại MIIGAiK, Moscow",
  byline: "Đại học Trắc địa và Bản đồ Quốc gia Moscow",
  year: "11/2021 – 03/2025",
  pages: "",
  summary:
    "Nghiên cứu sinh tiến sĩ ngành Trắc địa và Bản đồ tại Đại học Trắc địa và Bản đồ Quốc gia Moscow (MIIGAiK). Công việc tập trung vào dữ liệu không gian và khoa học bản đồ. Luận án đã được bảo vệ thành công.",
  findings: [
    "Bảo vệ thành công luận án tiến sĩ chuyên ngành Trắc địa và Bản đồ.",
    "Nghiên cứu chuyên sâu về dữ liệu không gian và khoa học bản đồ.",
  ],
  note: "Thời gian nghiên cứu: 11/2021 – 03/2025, Moscow, Liên bang Nga.",
  image: "",
  pdf: "",
  repo: "",
  doi: "",
  orcid: "",
  citation: "",
  bibtex: "",
} as const;

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend và mobile",
    items: ["Flutter", "Svelte/SvelteKit", "Tailwind CSS", "Flowbite", "Bits UI"],
  },
  {
    group: "Backend",
    items: ["Go", "Rust", "Python", "Bun", "ElysiaJS"],
  },
  {
    group: "GIS",
    items: [
      "Cesium",
      "MapLibre GL JS",
      "Mars3D (3D Tiles)",
      "QGIS",
      "ArcGIS",
      "PostGIS",
      "PMTiles",
      "Overture Maps",
      "Pelias",
    ],
  },
  {
    group: "DevOps, hạ tầng và AI",
    items: [
      "Docker",
      "RKE2 (Kubernetes)",
      "Rocky Linux",
      "Cursor",
      "MCP",
      "Ollama",
      "vLLM",
      "GitNexus",
      "Tối ưu CPU/GPU",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  url?: string;
};

export const certifications: Certification[] = [];

export const navLinks = [
  { href: "/projects", label: "Dự án" },
  { href: "/work", label: "Công việc" },
  { href: "/about", label: "Giới thiệu" },
] as const;

export function resolveSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
