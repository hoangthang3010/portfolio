import { useEffect, useRef, useState } from 'react'
import './App.css'

const projects = [
  {
    number: '01',
    period: '03/2026 — HIỆN TẠI',
    type: 'TÀI CHÍNH · ENTERPRISE',
    name: 'Trade Finance Platform',
    description:
      'Nền tảng nghiệp vụ bảo lãnh ngân hàng và thư tín dụng, hỗ trợ toàn bộ vòng đời giao dịch, quy trình Maker–Checker và lịch sử kiểm toán.',
    role: 'Frontend Developer · VietinBank',
    stack: ['React', 'SCSS', 'Ant Design'],
    teamSize: 20,
    highlights: [
      'Quản lý vòng đời bảo lãnh ngân hàng và thư tín dụng: phát hành, sửa đổi, gia hạn, hủy và tất toán.',
      'Xây dựng quy trình Maker–Checker, phê duyệt giao dịch và nhật ký kiểm toán.',
      'Hỗ trợ tìm kiếm, lọc giao dịch, xác thực chứng từ, phí, hoa hồng và quy tắc nghiệp vụ.',
      'Xử lý các quy trình LC gồm xuất trình, kiểm tra chứng từ, sai biệt, chấp nhận thanh toán và tất toán.',
    ],
    contributions: [
      'Phát triển tính năng mới và sửa lỗi.',
      'Xây dựng giao diện responsive.',
      'Quản lý state và luồng dữ liệu giữa các component.',
      'Tích hợp frontend với backend API.',
    ],
    featured: true,
  },
  {
    number: '02',
    period: '10/2026 — 11/2026',
    type: 'THƯƠNG MẠI ĐIỆN TỬ · FULL-STACK',
    name: 'Hoàn Tiền Nhanh',
    description:
      'Nền tảng cashback đa sàn: chuyển đổi link tiếp thị, đồng bộ đơn hàng, quản lý ví và xử lý yêu cầu rút tiền.',
    role: 'Full-stack Developer · Dự án cá nhân',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis'],
    href: 'https://hoantiennhanh.vn/',
    teamSize: 1,
    highlights: [
      'Chuyển đổi link sản phẩm Shopee, TikTok Shop thành affiliate link và theo dõi lượt click.',
      'Đồng bộ đơn hàng, tính cashback theo nền tảng hoặc danh mục sản phẩm.',
      'Quản lý ví, sổ cái giao dịch, yêu cầu rút tiền và quy trình chi trả.',
      'Có website khách hàng và dashboard quản trị người dùng, đơn hàng, tỷ lệ cashback và payout.',
    ],
    contributions: [
      'Phát triển giao diện chuyển link, lịch sử đơn hàng, ví và rút tiền.',
      'Xây dựng REST API bằng NestJS cùng kiến trúc adapter để mở rộng marketplace.',
      'Tạo lịch đồng bộ đơn hàng/hoa hồng và logic đối soát với người dùng.',
      'Thiết kế ledger, luồng duyệt rút tiền và biện pháp chống yêu cầu trùng lặp.',
      'Triển khai Ubuntu, PM2, Nginx và cấu hình Cloudflare.',
    ],
  },
  {
    number: '03',
    period: '09/2026 — 10/2026',
    type: 'THÚ CƯNG · FULL-STACK',
    name: 'Pawspa Pet House',
    description:
      'Kết hợp cửa hàng sản phẩm thú cưng, đặt lịch spa và xem camera trực tiếp với quyền truy cập được kiểm soát.',
    role: 'Full-stack Developer · Dự án cá nhân',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'MediaMTX'],
    teamSize: 1,
    highlights: [
      'Danh mục sản phẩm, giỏ hàng và quản lý đơn hàng thú cưng.',
      'Đặt lịch và quản lý dịch vụ spa.',
      'Phát trực tiếp camera để khách theo dõi thú cưng trong phiên spa.',
      'Phân quyền xem camera và cấp quyền truy cập theo phiên.',
      'Dashboard quản trị sản phẩm, lịch hẹn và camera.',
    ],
    contributions: [
      'Phát triển giao diện e-commerce, đặt lịch spa và quản lý lịch hẹn.',
      'Xây dựng REST API cho thương mại điện tử, booking và quản lý camera.',
      'Tích hợp luồng camera, quản lý session truy cập tạm thời và cấu hình MediaMTX.',
      'Triển khai Cloudflare Tunnel, Workers, PM2 và Nginx.',
    ],
  },
  {
    number: '04',
    period: '01/2026 — 04/2026',
    type: 'NỀN TẢNG NỘI BỘ · FULL-STACK',
    name: 'Hệ thống quản lý gia phả',
    description:
      'Ứng dụng quản lý thành viên, mối quan hệ và tư liệu gia đình với sơ đồ gia phả tương tác.',
    role: 'Full-stack Developer · Dự án nội bộ',
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL'],
    teamSize: 1,
    highlights: [
      'Trực quan hóa cây gia phả và quản lý hồ sơ thành viên.',
      'Quản lý quan hệ giữa các thành viên, tìm kiếm và lọc dữ liệu.',
      'Lưu trữ tư liệu lịch sử và phân quyền truy cập.',
    ],
    contributions: [
      'Phát triển giao diện cây gia phả tương tác và responsive bằng React.',
      'Xây dựng REST API với NestJS, TypeORM và thiết kế schema quan hệ.',
      'Triển khai xác thực, phân quyền và xử lý logic quan hệ gia đình.',
      'Quản lý state và tích hợp giao diện với backend API.',
    ],
  },
  {
    number: '05',
    period: '08/2025 — 03/2026',
    type: 'QUẢN LÝ BÁN HÀNG · TEAM LEAD',
    name: 'Sales Management System',
    description:
      'Ứng dụng desktop hỗ trợ quản lý khách hàng, sản phẩm và cấu hình; phụ trách kiến trúc frontend và điều phối nhóm.',
    role: 'Team Lead Frontend · Khách hàng Nhật Bản',
    stack: ['React', 'Electron', 'Ant Design', 'SCSS'],
    teamSize: 15,
    highlights: [
      'Ứng dụng Windows quản lý xác thực, khách hàng, sản phẩm và cấu hình hệ thống.',
      'Chuyển đổi thiết kế Figma thành component và layout React.',
      'Thiết lập kiến trúc frontend và môi trường Electron.',
    ],
    contributions: [
      'Ước lượng, lập kế hoạch và triển khai tính năng; tự kiểm thử và review.',
      'Kiểm soát chất lượng, quản lý lỗi và review code/SRS.',
      'Phân chia công việc, làm rõ yêu cầu và theo dõi tiến độ nhóm frontend.',
    ],
  },
  {
    number: '06',
    period: '07/2025 — 04/2026',
    type: 'QUẢN LÝ VISA',
    name: 'Visa System Maintenance',
    description:
      'Bảo trì hệ thống quản lý visa, xử lý lỗi và triển khai các yêu cầu chức năng mới.',
    role: 'Frontend Developer · Khách hàng Nhật Bản',
    stack: ['React', 'JavaScript', 'Ant Design', 'SCSS'],
    teamSize: 4,
    highlights: [
      'Bảo trì hệ thống quản lý visa đang vận hành.',
      'Sửa lỗi và triển khai các yêu cầu chức năng mới.',
    ],
    contributions: ['Sửa lỗi và phát triển yêu cầu mới cho frontend.'],
  },
  {
    number: '07',
    period: '03/2025 — 07/2025',
    type: 'QUẢN TRỊ MẠNG',
    name: 'Network Management System',
    description:
      'Hệ thống nội bộ quản lý truy cập mạng, người dùng, phân quyền và cấu hình; tích hợp Keycloak.',
    role: 'Frontend Developer · Khách hàng Hong Kong',
    stack: ['React', 'Refine', 'Keycloak', 'SCSS'],
    teamSize: 5,
    highlights: [
      'Quản lý truy cập mạng, người dùng, vai trò và cấu hình hệ thống.',
      'Tích hợp xác thực và phân quyền với Keycloak.',
    ],
    contributions: [
      'Phát triển màn hình bằng Refine và kết nối backend API.',
      'Triển khai tính năng mới, sửa lỗi và cải thiện chất lượng code.',
    ],
  },
  {
    number: '08',
    period: '10/2024 — 02/2025',
    type: 'GIÁM SÁT · DATA VISUALIZATION',
    name: 'Monitoring System',
    description:
      'Bổ sung dashboard theo dõi hoạt động, hiệu suất, trạng thái vận hành và dữ liệu hệ thống.',
    role: 'Frontend Developer · Khách hàng Nhật Bản',
    stack: ['React', 'Material UI', 'Axios', 'SCSS'],
    teamSize: 15,
    highlights: [
      'Dashboard giám sát hệ thống và trực quan hóa dữ liệu.',
      'Theo dõi hoạt động, hiệu suất, trạng thái vận hành và cấu hình.',
    ],
    contributions: [
      'Phát triển tính năng, sửa lỗi và review code.',
      'Chuyển thiết kế Figma thành giao diện responsive.',
      'Tích hợp logic frontend với backend API.',
    ],
  },
  {
    number: '09',
    period: '08/2024 — 10/2024',
    type: 'BLOCKCHAIN · THANH TOÁN',
    name: 'Stablecoin Payment Gateway',
    description:
      'Cổng thanh toán stablecoin cho website, hỗ trợ kết nối MetaMask, plugin WordPress và cập nhật giao dịch thời gian thực.',
    role: 'Frontend Developer · Khách hàng Nhật Bản',
    stack: ['Next.js', 'Redux Toolkit', 'Socket.IO', 'MetaMask'],
    teamSize: 8,
    highlights: [
      'Thanh toán bằng stablecoin và theo dõi giao dịch.',
      'Kết nối ví MetaMask, tích hợp plugin WordPress và cập nhật realtime qua Socket.IO.',
      'Giao diện responsive cho luồng thanh toán.',
    ],
    contributions: [
      'Phát triển tính năng và chuyển thiết kế Figma thành component.',
      'Tích hợp giao diện với API liên quan blockchain và backend.',
      'Review code, sửa lỗi và cải thiện chất lượng frontend.',
    ],
  },
  {
    number: '10',
    period: '03/2024 — 09/2024',
    type: 'QUẢN LÝ TÀI KHOẢN QUẢNG CÁO · FULL-STACK',
    name: 'Advertising Account Rental System',
    description:
      'Nền tảng trung gian cho thuê tài khoản quảng cáo, quản lý người dùng, giao dịch và lịch sử hoạt động.',
    role: 'Full-stack Developer · Khách hàng Việt Nam',
    stack: ['React', 'NestJS', 'MongoDB', 'Redis'],
    teamSize: 2,
    highlights: [
      'Cho thuê tài khoản quảng cáo từ nhà cung cấp bên thứ ba.',
      'Quản lý người dùng, vai trò, tài khoản, giao dịch và lịch sử hoạt động.',
      'Xác thực, phân quyền và cấu hình hệ thống.',
    ],
    contributions: [
      'Phát triển giao diện responsive và tích hợp backend API.',
      'Xây dựng REST API, xác thực, phân quyền và logic quản lý tài khoản.',
      'Thiết kế schema và xử lý nghiệp vụ backend.',
    ],
  },
  {
    number: '11',
    period: '05/2024 — 08/2024',
    type: 'TÀI CHÍNH · QUẢN LÝ TÍN DỤNG',
    name: 'Credit Management System',
    description:
      'Hệ thống quản lý tín dụng, sổ cái kế toán và nghiệp vụ tài chính nội bộ, có cập nhật dữ liệu thời gian thực.',
    role: 'Frontend Developer · Khách hàng Nhật Bản',
    stack: ['Next.js', 'Redux Toolkit', 'Socket.IO', 'Ant Design'],
    teamSize: 10,
    highlights: [
      'Quản lý thông tin tín dụng và sổ cái kế toán.',
      'Cập nhật realtime, báo cáo và trực quan hóa dữ liệu tài chính.',
      'Xác thực, phân quyền và giao diện responsive.',
    ],
    contributions: [
      'Phát triển tính năng và review code.',
      'Chuyển thiết kế Figma thành layout Next.js.',
      'Kết nối frontend với backend API.',
    ],
  },
  {
    number: '12',
    period: '12/2023 — 05/2024',
    type: 'NĂNG LƯỢNG · DASHBOARD',
    name: 'Power Consumption Admin Panel',
    description:
      'Trang quản trị theo dõi dữ liệu tiêu thụ điện, quản lý người dùng và vai trò, cùng báo cáo trực quan.',
    role: 'Frontend Developer · Khách hàng Nhật Bản',
    stack: ['Next.js', 'Ant Design', 'Tailwind CSS', 'SCSS'],
    teamSize: 16,
    highlights: [
      'Theo dõi mức tiêu thụ điện và cung cấp dashboard vận hành.',
      'Quản lý người dùng, vai trò và cấu hình hệ thống.',
      'Báo cáo, trực quan hóa dữ liệu và giao diện responsive.',
    ],
    contributions: [
      'Phát triển tính năng và review code.',
      'Chuyển thiết kế Figma thành layout React/Next.js.',
      'Kết nối frontend với backend API.',
    ],
  },
  {
    number: '13',
    period: '08/2023 — 12/2023',
    type: 'DU LỊCH · THEO DÕI VỊ TRÍ',
    name: 'Leisure & Travel',
    description:
      'Ứng dụng hiển thị vị trí người leo núi nhằm hỗ trợ tìm kiếm và cứu hộ.',
    role: 'Frontend Developer · Khách hàng Nhật Bản',
    stack: ['Nuxt.js', 'Vuex', 'Ant Design', 'SCSS'],
    teamSize: 20,
    highlights: [
      'Hiển thị vị trí người leo núi nhằm phục vụ công tác tìm kiếm và cứu hộ.',
      'Có xác thực, cấu hình hệ thống, theo dõi vị trí và giao diện trực quan dữ liệu.',
    ],
    contributions: [
      'Phát triển tính năng và review code.',
      'Chuyển thiết kế Figma thành giao diện Vue responsive.',
      'Xây dựng logic frontend và tích hợp backend API.',
    ],
  },
  {
    number: '14',
    period: '06/2023 — 08/2023',
    type: 'NGÂN HÀNG · QUẢN LÝ NHÂN SỰ',
    name: 'Banking & Finance',
    description:
      'Phát triển hệ thống quản lý nhân sự điện tử, gồm xác thực, quản lý nhân sự và báo cáo.',
    role: 'Frontend Developer · Khách hàng Nhật Bản',
    stack: ['React', 'Redux Toolkit', 'Material UI', 'SCSS'],
    teamSize: 15,
    highlights: [
      'Hệ thống quản lý nhân sự điện tử với xác thực và cấu hình.',
      'Giao diện responsive và trực quan hóa dữ liệu.',
    ],
    contributions: [
      'Phát triển tính năng, review code và tích hợp backend API.',
      'Chuyển thiết kế Figma thành component React.',
    ],
  },
  {
    number: '15',
    period: '07/2022 — 06/2023',
    type: 'THUẾ · THƯƠNG MẠI ĐIỆN TỬ',
    name: 'Tax & E-commerce',
    description:
      'Website thuế địa phương kết hợp quy trình mua sắm trực tuyến, quản lý sản phẩm, đơn hàng, thanh toán và giao dịch.',
    role: 'Frontend Developer · Khách hàng Nhật Bản',
    stack: ['Nuxt.js', 'Vuex', 'Element UI', 'SCSS'],
    teamSize: 32,
    highlights: [
      'Website thu thuế địa phương thông qua hoạt động mua sắm trực tuyến.',
      'Quản lý sản phẩm, bán hàng, đơn hàng, thanh toán, người dùng và giao dịch.',
      'Bao gồm các luồng thương mại điện tử, thuế và cấu hình hệ thống.',
    ],
    contributions: [
      'Phát triển tính năng và review code.',
      'Xây dựng layout Nuxt.js và tích hợp logic giao diện với backend API.',
    ],
  },
  {
    number: '16',
    period: '01/2022 — 07/2022',
    type: 'UI FRAMEWORK · INTERNAL APP',
    name: 'UI Framework for Internal App',
    description:
      'Mở rộng thư viện giao diện nội bộ với lưới tùy biến, kéo-thả, thu phóng và minimap có thể tái sử dụng.',
    role: 'Frontend Developer · Khách hàng Hàn Quốc',
    stack: ['Vue', 'Vuex', 'JavaScript', 'SCSS'],
    teamSize: 12,
    highlights: [
      'Mở rộng thư viện workflow nội bộ để có thể tái sử dụng ở các website khác.',
      'Tùy biến component Grid Freeze và hỗ trợ kéo-thả trên màn hình chính/minimap.',
      'Bổ sung phóng to, thu nhỏ và cấu hình kích thước linh hoạt.',
    ],
    contributions: [
      'Tùy biến component theo yêu cầu khách hàng.',
      'Triển khai kéo-thả, di chuyển minimap và thao tác zoom.',
      'Làm cho kích thước màn hình chính và minimap có thể cấu hình, tái sử dụng.',
    ],
  },
  {
    number: '17',
    period: '11/2021 — 01/2022',
    type: 'THƯ VIỆN GIAO DIỆN',
    name: 'UI Framework',
    description:
      'Xây dựng thư viện website gồm các thành phần giao diện tương tự Smart Web Component.',
    role: 'Frontend Developer · Khách hàng Hàn Quốc',
    stack: ['JavaScript', 'HTML5', 'SCSS'],
    teamSize: 10,
    highlights: ['Thư viện website với các component tương tự Smart Web Component.'],
    contributions: ['Hỗ trợ sửa lỗi và hoàn thiện dự án để bàn giao đúng hạn.'],
  },
  {
    number: '18',
    period: '05/2021 — 12/2021',
    type: 'QUẢN LÝ NHÂN SỰ · IDENTITY',
    name: 'Personnel Management System',
    description:
      'Cổng người dùng và quản trị cho quản lý vòng đời định danh, tài khoản, vai trò, chính sách và phân quyền.',
    role: 'Frontend Developer · Khách hàng Hàn Quốc',
    stack: ['Vue', 'Vuex', 'Axios', 'SCSS'],
    teamSize: 8,
    highlights: [
      'Cổng người dùng và quản trị cho quản lý vòng đời định danh.',
      'Quản lý tài khoản, vai trò, chính sách và phân quyền.',
    ],
    contributions: [
      'Chuyển thiết kế Zeplin thành layout Vue và tích hợp REST API.',
      'Trao đổi yêu cầu với khách hàng và phối hợp nhóm triển khai.',
      'Tối ưu, refactor code để cải thiện hiệu năng và khả năng mở rộng.',
    ],
  },
  {
    number: '19',
    period: '02/2021 — 05/2021',
    type: 'AI · PHÂN TÍCH HÌNH ẢNH',
    name: 'Camera AI',
    description:
      'Giao diện quản trị và dashboard phân tích người ra vào, độ tuổi, giới tính và khu vực đông người.',
    role: 'Frontend Developer · System Tenants',
    stack: ['Vue', 'Vuex', 'Vue Material', 'Axios'],
    teamSize: 20,
    highlights: [
      'Dashboard phân tích và theo dõi người ra vào, độ tuổi, giới tính và khu vực đông người.',
      'Cổng quản trị phục vụ quản lý và phân tích dữ liệu camera.',
    ],
    contributions: [
      'Điều chỉnh giao diện theo nhu cầu người dùng.',
      'Tích hợp API để hiển thị dữ liệu trên dashboard.',
    ],
  },
  {
    number: '20',
    period: '08/2020 — 02/2021',
    type: 'GIÁO DỤC · NỀN TẢNG THI TRỰC TUYẾN',
    name: 'English Test System',
    description:
      'Website luyện thi trắc nghiệm, điền từ và ghép hình cho học sinh trung học; tích hợp API câu hỏi.',
    role: 'Frontend Developer · System Tenants',
    stack: ['React', 'Hooks', 'Ant Design', 'Axios'],
    teamSize: 5,
    highlights: [
      'Website luyện thi cho học sinh trung học.',
      'Hỗ trợ câu hỏi trắc nghiệm, điền vào chỗ trống và ghép hình.',
    ],
    contributions: [
      'Chuyển thiết kế PSD thành layout React.',
      'Tích hợp API để tải dữ liệu câu hỏi vào các bộ đề.',
    ],
  },
]

const experience = [
  {
    period: '03/2026 — HIỆN TẠI',
    company: 'Aequitas Joint Stock Company',
    role: 'Frontend Developer · Dự án VietinBank',
    detail:
      'Phát triển tính năng, nâng cấp nghiệp vụ Core Banking và xử lý vấn đề hệ thống theo yêu cầu.',
  },
  {
    period: '07/2022 — 03/2026',
    company: 'VMO Holdings',
    role: 'Frontend Developer · Team Lead',
    detail:
      'Phát triển sản phẩm cho khách hàng Nhật Bản; tham gia dự án nội bộ và dẫn dắt nhóm frontend.',
  },
  {
    period: '05/2021 — 07/2022',
    company: 'CMC Global',
    role: 'Frontend Developer',
    detail:
      'Triển khai tính năng theo yêu cầu khách hàng Hàn Quốc, tiêu biểu như Samsung SDS.',
  },
  {
    period: '08/2020 — 05/2021',
    company: 'Meditech & CPIT',
    role: 'Frontend Developer',
    detail: 'Tham gia phát triển các sản phẩm và dự án nội bộ của công ty.',
  },
]

const skills = [
  {
    category: 'FRONTEND',
    items: 'React · Vue · Next.js · Nuxt · TypeScript · JavaScript',
  },
  {
    category: 'BACKEND',
    items: 'NestJS · Node.js · REST API · Socket.IO',
  },
  {
    category: 'UI & STATE',
    items: 'Ant Design · Tailwind CSS · SCSS · Redux Toolkit · Vuex',
  },
  {
    category: 'DỮ LIỆU & CÔNG CỤ',
    items: 'PostgreSQL · Redis · MongoDB · Git · Jira · Figma',
  },
]

function App() {
  const flightPathRef = useRef<SVGPathElement>(null)
  const [flightPoint, setFlightPoint] = useState({ x: 32, y: 0, angle: 0 })

  useEffect(() => {
    let animationFrame = 0

    const updateFlight = () => {
      animationFrame = 0
      const path = flightPathRef.current
      if (!path) return

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      const length = path.getTotalLength()
      const distance = Math.min(1, Math.max(0, progress)) * length
      const point = path.getPointAtLength(distance)
      const before = path.getPointAtLength(Math.max(0, distance - 1))
      const after = path.getPointAtLength(Math.min(length, distance + 1))
      const angle = Math.atan2(after.y - before.y, after.x - before.x) * (180 / Math.PI) + 90

      setFlightPoint({ x: point.x, y: point.y, angle })
    }

    const scheduleUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateFlight)
    }

    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    const resizeObserver = new ResizeObserver(scheduleUpdate)
    resizeObserver.observe(document.body)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      resizeObserver.disconnect()
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <>
      <div className="flight-tracker" aria-hidden="true">
        <svg className="flight-route" viewBox="0 0 64 360">
          <path
            ref={flightPathRef}
            className="flight-route-line"
            d="M32 4 C58 64 6 120 32 180 S58 300 32 356"
          />
          <g
            className="flight-plane"
            transform={`translate(${flightPoint.x} ${flightPoint.y}) rotate(${flightPoint.angle}) translate(-32 -32)`}
          >
            <path d="M32 5 38 24 57 32 57 37 39 33 37 49 43 53 43 57 32 53 21 57 21 53 27 49 25 33 7 37 7 32 26 24Z" />
          </g>
        </svg>
      </div>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Hoàng Minh Thắng, về đầu trang">
          HT<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Điều hướng chính">
          <a href="#about">Giới thiệu</a>
          <a href="#experience">Kinh nghiệm</a>
          <a href="#work">Dự án</a>
          <a className="nav-contact" href="#contact">
            Liên hệ <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> SOFTWARE ENGINEER · HANOI, VIETNAM</p>
            <h1>
              Xin chào,
              <br />
              mình là <span>Thắng.</span>
            </h1>
            <p className="hero-intro">
              Mình xây dựng những sản phẩm web hữu ích — từ trải nghiệm
              frontend chỉn chu đến hệ thống backend đáng tin cậy.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Khám phá dự án <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="mailto:thangminhhoang98@gmail.com">
                Kết nối với mình <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="hero-aside" aria-label="Tóm tắt kinh nghiệm">
            <span className="aside-index">01 / 04</span>
            <div className="orbit" aria-hidden="true">
              <img
                className="orbit-avatar"
                src={`${import.meta.env.BASE_URL}IMG_0451.jpg`}
                alt="Ảnh đại diện Hoàng Minh Thắng"
              />
              <span className="orbit-node orbit-node-one" />
              <span className="orbit-node orbit-node-two" />
              <span className="orbit-node orbit-node-three" />
            </div>
            <p>Frontend là thế mạnh.<br />Full-stack là hướng đi.</p>
          </div>
          <a className="scroll-cue" href="#about">
            <span aria-hidden="true">↓</span> CUỘN ĐỂ KHÁM PHÁ
          </a>
        </section>

        <section className="intro-section section-wrap" id="about">
          <div className="section-label">
            <span>01</span>
            <span>GIỚI THIỆU</span>
          </div>
          <div className="intro-content">
            <h2>
              Kết nối trải nghiệm người dùng với những hệ thống vận hành
              <span> phía sau.</span>
            </h2>
            <div className="intro-bottom">
              <p>
                Mình là Full-stack Software Engineer với 6 năm kinh nghiệm
                phát triển frontend cùng React và Vue, và kinh nghiệm backend
                với NestJS, Node.js. Mình từng làm việc với các sản phẩm
                enterprise, thương mại điện tử và nền tảng nội bộ; đồng thời
                có kinh nghiệm dẫn dắt nhóm nhỏ.
              </p>
              <div className="stats">
                <div><strong>06<span>+</span></strong><span>NĂM KINH NGHIỆM</span></div>
                <div><strong>{projects.length}</strong><span>DỰ ÁN ĐÃ THAM GIA</span></div>
                <div><strong>02</strong><span>VAI TRÒ FRONTEND / FULL-STACK</span></div>
              </div>
            </div>
            <div className="client-strip">
              <span className="client-label">KHÁCH HÀNG NỔI BẬT</span>
              <ul aria-label="Khách hàng nổi bật">
                <li>VietinBank</li>
                <li>Samsung</li>
                <li>Honda</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-label">
            <span>02</span>
            <span>KINH NGHIỆM</span>
          </div>
          <div className="experience-content">
            <div className="section-heading section-heading-compact">
              <h2>Kinh nghiệm<br />làm việc<span>.</span></h2>
              <p>Không ngừng học hỏi, chia sẻ và tạo ra giá trị cùng đồng đội.</p>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={item.company}>
                  <span className="timeline-period">{item.period}</span>
                  <div>
                    <h3>{item.company}</h3>
                    <p className="timeline-role">{item.role}</p>
                    <p className="timeline-detail">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section" id="work">
          <div className="section-wrap">
            <div className="section-heading">
              <div className="section-label">
                <span>03</span>
                <span>DỰ ÁN ĐÃ THAM GIA · {projects.length}</span>
              </div>
              <p>Các dự án được tóm lược từ kinh nghiệm trong CV.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className={`project-card${project.featured ? ' project-featured' : ''}`} key={project.number}>
                  <span className="project-number">{project.number}</span>
                  <div className="project-main">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p className="project-period">{project.period}</p>
                    <p className="project-description">{project.description}</p>
                    <p className="project-role">{project.role}</p>
                    <p className="project-team">Quy mô nhóm · {project.teamSize} người</p>
                    <ul className="tag-list" aria-label="Công nghệ sử dụng">
                      {project.stack.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <details className="project-details">
                      <summary>
                        <span>Xem tính năng & phần việc</span>
                        <span className="details-toggle" aria-hidden="true">+</span>
                      </summary>
                      <div className="project-details-grid">
                        <div>
                          <h4>Phạm vi & tính năng</h4>
                          <ul>
                            {project.highlights.map((item) => <li key={item}>{item}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h4>Vai trò & đóng góp</h4>
                          <ul>
                            {project.contributions.map((item) => <li key={item}>{item}</li>)}
                          </ul>
                        </div>
                      </div>
                    </details>
                  </div>
                  {project.href ? (
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Xem ${project.name}`}>
                      ↗
                    </a>
                  ) : (
                    <span className="project-link project-link-muted" aria-hidden="true">↗</span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="section-wrap skills-wrap">
            <div className="section-label">
              <span>04</span>
              <span>CÔNG CỤ</span>
            </div>
            <div className="skills-content">
              <h2>Công nghệ mình<br />thường làm việc cùng<span>.</span></h2>
              <div className="skill-list">
                {skills.map((skill) => (
                  <div className="skill-row" key={skill.category}>
                    <span>{skill.category}</span>
                    <p>{skill.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="section-label">
            <span>05</span>
            <span>LIÊN HỆ</span>
          </div>
          <div className="contact-content">
            <p className="eyebrow">BẠN ĐANG CÓ MỘT Ý TƯỞNG?</p>
            <h2>Cùng làm điều<br />thật <span>hay ho.</span></h2>
            <a className="contact-email" href="mailto:thangminhhoang98@gmail.com">
              thangminhhoang98@gmail.com <span aria-hidden="true">↗</span>
            </a>
            <a className="linkedin-link" href="https://www.linkedin.com/in/hmthang3010/" target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">HT<span>.</span></a>
        <span>© Hoàng Minh Thắng</span>
        <a href="#home">Về đầu trang ↑</a>
      </footer>
    </>
  )
}

export default App
