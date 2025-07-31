import {NextResponse} from "next/server";

const devlopList = [
    {
        "id": 1,
        "name": "3종앱(공구마켓, 심쿵할인, 할인중독) 장바구니 개편",
        "period": "2021.08 ~ 2021.10",
        "skills": [
            "HTML5",
            "SCSS"
        ],
        "detail": [
            "장바구니 페이지 UI 수정"
        ],
        "imageUrl": "",
        "contribution": 50
    },
    {
        "id": 2,
        "name": "3종앱(공구마켓, 심쿵할인, 할인중독) 라이브커머스",
        "period": "2021.08 ~ 2021.10",
        "skills": [
            "HTML5",
            "Vanilla JS",
            "SCSS",
            "Socket.IO",
            "Axios"
        ],
        "detail": [
            "실시간 채팅 연동",
            "실시간 방송상태(대기 - 진행중 - 종료)값에 따른 화면 분기처리",
            "상황별 에러 화면 처리",
            "방송 진입 시 방송 및 상품 정보 처리",
            "라이브 전용 쿠폰 노출 및 다운로드",
            "상품 상세페이지 이동 앱 링크 연동",
            "앱 연동 처리(방송종료 후 상품 상세 자동 이동 처리)"
        ],
        "imageUrl": "/images/develop/image2.png",
        "contribution": 90
    },
    {
        "id": 3,
        "name": "3종 모바일웹(공구마켓, 심쿵할인, 할인중독) 고도화",
        "period": "2021.10 ~ 2022.04",
        "skills": [
            "React",
            "Next.js",
            "SCSS",
            "Axios"
        ],
        "detail": [
            "APP 화면 및 기능 동기화(컴포넌트 분기 처리 및 기능 추가/수정)"
        ],
        "imageUrl": "/images/develop/image3.png",
        "contribution": 40
    },
    {
        "id": 4,
        "name": "3종앱(공구마켓, 심쿵할인, 할인중독) 경매라이브",
        "period": "2022.05 ~ 2022.08",
        "skills": [
            "HTML5",
            "Vanilla JS",
            "SCSS",
            "Socket.IO",
            "Axios"
        ],
        "detail": [
            "실시간 입찰현황 노출",
            "경매 상품 노출 처리",
            "낙찰 시 레어어 팝업 노출 이벤트 처리"
        ],
        "imageUrl": "/images/develop/image4.png",
        "contribution": 100
    },
    {
        "id": 5,
        "name": "3종앱(공구마켓, 심쿵할인, 할인중독) 장바구니 쿠폰 적용 및 UI개선",
        "period": "2022.10",
        "skills": [
            "HTML5",
            "jQuery",
            "SCSS",
            "Ajax"
        ],
        "detail": [
            "장바구니 페이지 내 장바구니 쿠폰 UI 노출 조건 개발 및 금액에 따른 게이지 계산 연동",
            "주문 취소 시 쿠폰 깨짐 및 회수 API 연동 처리"
        ],
        "imageUrl": "",
        "contribution": 80
    },
    {
        "id": 6,
        "name": "3종앱(공구마켓, 심쿵할인, 할인중독) 포인트 지급",
        "period": "2023.03 ~ 2023.04",
        "skills": [
            "HTML5",
            "jQuery",
            "SCSS",
            "Ajax"
        ],
        "detail": [
            "출금 계좌입력 페이지 개발(은행 선택 옵션 리스트 노출 및 API 연동 계좌 정보 유효성 체크)",
            "출금 신청 완료 페이지 개발",
            "친구초대하기 페이지 개발",
            "구매미션 페이지 개발"
        ],
        "imageUrl": "/images/develop/image6.png",
        "contribution": 40
    },
    {
        "id": 7,
        "name": "3종앱(공구마켓, 심쿵할인, 할인중독) 용돈봉투",
        "period": "2023.05 ~ 2023.06",
        "skills": [
            "HTML5",
            "jQuery",
            "SCSS",
            "Ajax"
        ],
        "detail": [
            "출금 신청 페이지(계좌입력 및 API 연동)",
            "출금 완료 페이지 개발"
        ],
        "imageUrl": "/images/develop/image7.png",
        "contribution": 40
    },
    {
        "id": 8,
        "name": "3종앱(공구마켓, 심쿵할인, 할인중독) 온보딩",
        "period": "2023.07",
        "skills": [
            "HTML5",
            "jQuery",
            "SCSS"
        ],
        "detail": [
            "슬라이드배너 터치 스와이프 및 인디케이터 개발"
        ],
        "imageUrl": "/images/develop/image8.png",
        "contribution": 50
    },
    {
        "id": 9,
        "name": "3종앱(공구마켓, 심쿵할인, 할인중독) OKcashbag 연동",
        "period": "2023.08",
        "skills": [
            "HTML5",
            "jQuery",
            "SCSS",
            "Ajax"
        ],
        "detail": [
            "결제페이지 OKcashbag 포인트 조회 및 결제 연동",
            "결제완료 페이지 OKcashbag 포인트 사용에 따른 주문 확인 및 상세정보 UI 분기 처리"
        ],
        "imageUrl": "/images/develop/image9.png",
        "contribution": 100
    },
    {
        "id": 10,
        "name": "3종앱(공구마켓, 심쿵할인, 할인중독) Youtube 연동",
        "period": "2023.09 ~ 2023.10",
        "skills": [
            "HTML5",
            "jQuery",
            "SCSS",
            "Ajax"
        ],
        "detail": [
            "채널별 목록 페이지 개발",
            "채널별 목록 상세 페이지 개발",
            "메인 - 코드 리팩토링",
            "메인 - 출금 애니메이션 처리",
            "내 비디오 페이지 처리 및 삭제기능 구현",
            "출금 계좌입력 페이지 개발(은행 선택 옵션 리스트 노출 및 API 연동 계좌 정보 유효성 체크)",
            "출금 신청 완료 페이지 개발"
        ],
        "imageUrl": "/images/develop/image10.jpg",
        "contribution": 60
    },
    {
        "id": 11,
        "name": "3종앱(공구마켓, 심쿵할인, 할인중독) 클레임",
        "period": "2023.10 ~ 2023.11",
        "skills": [
            "HTML5",
            "jQuery",
            "SCSS",
            "Ajax",
            "LocalStorage"
        ],
        "detail": [
            "주문취소 프로세스 개발(신청접수 - 접수 완료)",
            "반품 프로세스 개발(신청접수 - 접수 완료)",
            "교환 프로세스 개발(신청접수 - 접수 완료)"
        ],
        "imageUrl": "/images/develop/image11.png",
        "contribution": 40
    },
    {
        "id": 12,
        "name": "동패인터내셔널 웹사이트 구축(반응형웹)",
        "period": "2024.09 ~ 2024.09",
        "skills": [
            "Next.js 14",
            "HTML5",
            "SCSS",
            "Axios",
            "Bootstrap"
        ],
        "detail": [
            "사용자 전체 페이지 퍼블리싱",
            "관리자 제품 등록 프론트엔드 개발",
        ],
        "imageUrl": "/images/develop/site-image-02-01.jpg",
        "imageUrl2": "/images/develop/site-image-02-02.jpg",
        "contribution": 100,
        "url": "https://dongpae.co.kr/"
    },
    {
        "id": 13,
        "name": "동패 아이스업 웹사이트 구축(반응형웹)",
        "period": "2024.09 ~ 2024.09",
        "skills": [
            "Next.js 14",
            "HTML5",
            "SCSS",
            "Axios",
            "Bootstrap",
            "three.js"
        ],
        "detail": [
            "사용자 전체 페이지 퍼블리싱",
            "모델링 연동 및 콘트롤 개발",
        ],
        "imageUrl": "/images/develop/site-image-03.jpg",
        "contribution": 100,
        "url": "https://www.iceup.co.kr/"
    },
    {
        "id": 14,
        "name": "발맥스 기업 웹사이트 구축(반응형웹)",
        "period": "2024.10 ~ 2024.10",
        "skills": [
            "Next.js 14",
            "HTML5",
            "SCSS",
            "Axios",
            "three.js"
        ],
        "detail": [
            "사용자 전체 페이지 퍼블리싱",
            "모델링 연동 및 콘트롤 개발",
            "블로그/포트폴리오 리스트, 상세 페이지 개발",
            "관리자 컨텐츠 CRUD API 연동"
        ],
        "imageUrl": "/images/develop/site-image-04.jpg",
        "contribution": 100,
        "url": "https://valmax.co.kr/"
    },
    {
        "id": 15,
        "name": "인천스타트업파크 노인복지회관 화재감지시스템",
        "period": "2024.11 ~ 2024.11",
        "skills": [
            "Next.js 14",
            "HTML5",
            "SCSS",
            "Axios",
            "three.js",
            "gsap"
        ],
        "imageUrl": "/images/develop/site-image-12.jpg",
        "detail": [
            "로그인 및 모델링 연동 페이지 퍼블리싱",
            "층별 센서 정보 API 연동",
            "화재 시 경보 화면 연동",
            "모델링 층별 그룹화 및 이동 처리"
        ],
        "contribution": 100,
        "url": "http://dotsfire.cafe24.com/",
    },
    {
        "id": 16,
        "name": "대동도어 기업 웹사이트 구축(반응형웹)",
        "period": "2024.12 ~ 2024.12",
        "skills": [
            "Next.js 14",
            "HTML5",
            "SCSS",
            "Axios",
            "three.js",
            "gsap"
        ],
        "imageUrl": "/images/develop/site-image-06.jpg",
        "detail": [
            "사용자 전체 페이지 퍼블리싱",
            "사용자 채용공고 리스트 및 입사지원 프로세스 프론트엔드 개발",
            "사용자 모델링 연동 및 버튼 이벤트 구현",
            "관리자 컨텐츠 등록 프론트엔드 개발",
            "관리자 채용 공고 리스트 및 등록/수정 프론트엔드 개발",
        ],
        "contribution": 100,
        "url": "https://hi-lexdoor.com/"
    },
    {
        "id": 17,
        "name": "디케이락 웹사이트 제품 검색기능 구현",
        "period": "2024.12 ~ 2024.12",
        "skills": [
            "Next.js 14",
            "HTML5",
            "SCSS",
            "Axios",
        ],
        "imageUrl": "/images/develop/site-image-07.jpg",
        "detail": [
            "사용자 화면 검색기능 적용 및 리스트 화면 퍼블리싱",
        ],
        "contribution": 100,
        "url": "https://dklok.com/product-introduction/product-classification/search-product?keyword=DF"
    },
    {
        "id": 18,
        "name": "KCL Valve 기업 웹사이트 구축(반응형웹)",
        "period": "2025.01 ~ 2025.01",
        "skills": [
            "Next.js 14",
            "HTML5",
            "SCSS",
            "Axios",
            "three.js",
        ],
        "imageUrl": "/images/develop/site-image-08.jpg",
        "imageUrl2": "/images/develop/site-image-08-02.jpg",
        "detail": [
            "사용자 전체 페이지 퍼블리싱",
            "사용자 프로젝트 목록/상세 프론트엔드 개발",
            "사용자 모델링 연동",
            "관리자 프로젝트 카테고리 관리 및 목록/등록/수정 프론트엔드 개발",
        ],
        "contribution": 100,
        "url": "https://valvekcl.com/"
    },
    {
        "id": 19,
        "name": "이지시스템 기업 웹사이트 구축(반응형웹)",
        "period": "2025.02 ~ 2025.02",
        "skills": [
            "Next.js 14",
            "HTML5",
            "SCSS",
            "Axios",
            "three.js",
            "gsap"
        ],
        "imageUrl": "/images/develop/site-image-09.jpg",
        "detail": [
            "사용자 전체 페이지 퍼블리싱",
            "사용자 메인 페이지 모델링 연동 및 버튼 이벤트 구현",
            "사용자 컨텐츠(카탈로그, 홍보영상, 기술자료) 목록/상세 프론트엔드 개발",
            "관리자 컨텐츠(카탈로그, 홍보영상, 기술자료) 목록/등록/수정 프론트엔드 개발",
        ],
        "contribution": 100,
        "url": "https://easy-sys.co.kr/"
    },

    {
        "id": 20,
        "name": "우신에이펙 기업 웹사이트 구축(반응형웹)",
        "period": "2025.03 ~ 2025.03",
        "skills": [
            "Next.js 14",
            "HTML5",
            "SCSS",
            "Axios"
        ],
        "imageUrl": "/images/develop/site-image-10.jpg",
        "detail": [
            "사용자 전체 페이지 퍼블리싱",
            "사용자 메인 페이지 모델링 연동 및 버튼 이벤트 구현",
            "사용자 조명제품 목록/상세 API 연동",
            "사용자 컨텐츠(시공사례, 홍보영상, 공지사항) 목록/상세 프론트엔드 개발",
            "관리자 조명제품 카테고리 및 목록/등록/수정 프론트엔드 개발",
            "관리자 컨텐츠(시공사례, 홍보영상, 공지사항) 목록/등록/수정 프론트엔드 개발",
        ],
        "contribution": 100,
        "url": "https://wooshinapec.com/"
    },
    {
        "id": 21,
        "name": "대풍코리아",
        "period": "2025.04 ~ 2024.05",
        "skills": [
            "Next.js 14",
            "HTML5",
            "SCSS",
            "Axios",
        ],
        "imageUrl": "/images/develop/site-image-13.png",
        "detail": [
            "사용자 전체 페이지 퍼블리싱",
            "사용자 컨텐츠(뉴스) 목록/상세 프론트엔드 개발",
            "사용자 문의접수 API 연동",
            "관리자 문의접수 리스트/상세 개발",
            "관리자 컨텐츠 목록/등록/수정 프론트엔드 개발",
        ],
        "contribution": 100,
        "url": "https://daepung.com/"
    },
    {
        "id": 22,
        "name": "AXEED 기업 웹사이트 구축(반응형웹)",
        "period": "2025.06 ~ 2025.06",
        "skills": [
            "Next.js 14",
            "HTML5",
            "SCSS",
            "Axios",
            "Quill.js"
        ],
        "imageUrl": "/images/develop/site-image-12.jpg",
        "detail": [
            "사용자 전체 페이지 퍼블리싱",
            "사용자 컨텐츠(공지사항, 적용사례, 자료실) 목록/상세 프론트엔드 개발",
            "관리자 조명제품 카테고리 및 목록/등록/수정 프론트엔드 개발",
            "관리자 컨텐츠(공지사항, 적용사례, 자료실) 목록/등록/수정 프론트엔드 개발",
            "관리자 컨텐츠 등록 Quill.js 에디터 적용"
        ],
        "contribution": 100,
        "url": "https://axeed.co.kr/"
    },
]

export async function GET() {
    return NextResponse.json(devlopList);
}
