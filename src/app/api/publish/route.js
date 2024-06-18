import {NextResponse} from "next/server";

const publishList = [
    {
        "id": 1,
        "name": "대전시통합도서관 작은도서관 도서관리시스템 구축사업",
        "detail": "메인 및 서브 데코레이터 퍼블리싱",
        "url": "http://small.u-library.kr/",
        "imageUrl": "daejeon.jpg",
        "contribution": 100
    },
    {
        "id": 2,
        "name": "전남도립대학교 전자도서 관리시스템 업그레이드",
        "detail": "상단메뉴 동적 UI 구현(반응형웹)",
        "url": "http://lib.dorip.ac.kr/",
        "imageUrl": "dorip.jpg",
        "contribution": 50
    },
    {
        "id": 3,
        "name": "한국노동연구원 통합전자도서관 시스템 고도화",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "http://dl.kli.re.kr/",
        "imageUrl": "nodong.jpg",
        "contribution": 100
    },
    {
        "id": 4,
        "name": "통계청 디지털 통계도서관 고도화 사업",
        "detail": "반응형 전환(반응형웹)",
        "url": "https://lib1.kostat.go.kr/",
        "imageUrl": "kostat.jpg",
        "contribution": 100
    },
    {
        "id": 5,
        "name": "국회도서관 학술연구자정보 공유시스템 유지보수",
        "detail": "기존 페이지 수정 및 추가 페이지 퍼블리싱(반응형웹)",
        "url": "https://dl.nanet.go.kr/",
        "imageUrl": "nanet.jpg",
        "contribution": 100
    },
    {
        "id": 6,
        "name": "2019년 국가전자도서관 시스템 고도화",
        "detail": "전 페이지 퍼블리싱 (CSS 및 이미지 구조 설계, 반응형웹)",
        "url": "https://www.dlibrary.go.kr/",
        "imageUrl": "dlibrary.jpg",
        "contribution": 100
    },
    {
        "id": 7,
        "name": "청주대 중앙도서관 독서커뮤니티 포털시스템 구축",
        "detail": "메인 및 서브 데코레이터 퍼블리싱",
        "url": "http://booksuda.cju.ac.kr/",
        "imageUrl": "booksuda.jpg",
        "contribution": 100
    },
    {
        "id": 8,
        "name": "2019년 RISS 유지관리",
        "detail": "RISS 유지보수",
        "url": "http://www.riss.kr/index.do",
        "imageUrl": "riss.jpg",
        "contribution": 100
    },
    {
        "id": 9,
        "name": "통계청 도서관 전자도서관 홈페이지 디자인 개편",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "https://lib1.kostat.go.kr/",
        "imageUrl": "kostat.jpg",
        "contribution": 100
    },
    {
        "id": 10,
        "name": "학술연구정보서비스 개방 및 연계",
        "detail": "기존 페이지 수정 및 추가 페이지 퍼블리싱(반응형웹)",
        "url": "http://www.rinfo.kr/",
        "imageUrl": "rinfo.jpg",
        "contribution": 100
    },
    {
        "id": 11,
        "name": "한국예술종합학교 반응형 전자도서관 홈페이지 구축",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "http://lib.karts.ac.kr/",
        "imageUrl": "karts.jpg",
        "contribution": 100
    },
    {
        "id": 12,
        "name": "국회도서관 학술연구자정보 공유시스템 고도화 사업",
        "detail": "기존 페이지 수정 및 추가 페이지 퍼블리싱(반응형)",
        "url": "https://dl.nan웹.go.kr/",
        "imageUrl": "nanet.jpg",
        "contribution": 100
    },
    {
        "id": 13,
        "name": "동국대학교 서울경주 첨단도서관 시스템 구축",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "http://libk.dongguk.ac.kr/",
        "imageUrl": "",
        "contribution": 100
    },
    {
        "id": 14,
        "name": "우즈베키스탄 2016",
        "detail": "우즈벡 국립 및 지역 도서관 사이트 퍼블리싱(반응형웹)",
        "url": "https://www.natlib.uz/",
        "imageUrl": "natlib.png",
        "contribution": 100
    },
    {
        "id": 15,
        "name": "대구가톨릭대학교 학술정보관리시스템 개선사업",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "https://lib.cu.ac.kr/",
        "imageUrl": "cu.jpg",
        "contribution": 100
    },
    {
        "id": 16,
        "name": "2018년 RISS위탁운영",
        "detail": "RISS 유지보수",
        "url": "http://www.riss.kr/index.do",
        "imageUrl": "riss.jpg",
        "contribution": 100
    },
    {
        "id": 17,
        "name": "한밭도서관 공공도서관 지역서점 연계체계 구축 용역",
        "detail": "관리자 페이지 수정",
        "url": "",
        "imageUrl": "",
        "contribution": 100
    },
    {
        "id": 18,
        "name": "인권도서관 인권자료관리시스템 구축",
        "detail": "메인 및 서브 데코레이터 퍼블리싱\n웹접근성 관련 UI 및 스크립트 수정(반응형웹)",
        "url": "https://library.humanrights.go.kr/",
        "imageUrl": "humanRights.jpg",
        "contribution": 100
    },
    {
        "id": 19,
        "name": "서울도서관 홈페이지 이용자서비스 고도화 및 디자인 개선",
        "detail": "메인 및 서브 데코레이터 퍼블리싱\n웹접근성 인증마크 획득(반응형웹)",
        "url": "https://library.humanrights.go.kr/",
        "imageUrl": "seoul.jpg",
        "contribution": 100
    },
    {
        "id": 20,
        "name": "안산대학교 도서관 통합학술정보시스템 구축",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "https://lib.ansan.ac.kr/",
        "imageUrl": "seoul.jpg",
        "contribution": 100
    },
    {
        "id": 21,
        "name": "박정희대통령 기념재단 통합 전자도서관 시스템 구축 사업",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "http://www.presidentparkchunghee.org/",
        "imageUrl": "pch.jpg",
        "contribution": 100
    },
    {
        "id": 22,
        "name": "도서관 통합관리포털 개발",
        "detail": "관리자 페이지 퍼블리싱",
        "url": "",
        "imageUrl": "",
        "contribution": 100
    },
    {
        "id": 23,
        "name": "우송대학교 도서관 홈페이지 리뉴얼 제작 계약",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "http://library.wsu.ac.kr/",
        "imageUrl": "wsu.jpg",
        "contribution": 100
    },
    {
        "id": 24,
        "name": "대구대학교 통합형 전자도서관시스템 업그레이드 및 홈페이지 리뉴얼",
        "detail": "메인 및 서브 데코레이터 퍼블리싱",
        "url": "https://lib.daegu.ac.kr/",
        "imageUrl": "daegu.png",
        "contribution": 100
    },
    {
        "id": 25,
        "name": "삼육대학교 튤립 업그레이드",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "https://lib.syu.ac.kr/",
        "imageUrl": "syu.jpg",
        "contribution": 100
    },
    {
        "id": 26,
        "name": "추천시스템",
        "detail": "부트스트랩 테마 활용 관리자 페이지 퍼블리싱",
        "url": "",
        "imageUrl": "",
        "contribution": 100
    },
    {
        "id": 27,
        "name": "육군3사관학교 도서관 자료 대출반납 자동화체계 소프트웨어",
        "detail": "메인 및 서브 데코레이터 퍼블리싱",
        "url": "http://lib.kaay.mil.kr",
        "imageUrl": "",
        "contribution": 100
    },
    {
        "id": 28,
        "name": "한국교육개발원 신청사 구축공사 전자도서관장비 납품 및 설치공사",
        "detail": "메인 및 서브 데코레이터 퍼블리싱",
        "url": "http://askkedi.kedi.re.kr/",
        "imageUrl": "",
        "contribution": 100
    },
    {
        "id": 29,
        "name": "한국정보화진흥원 차세대업무시스템",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "http://library.nia.or.kr/",
        "imageUrl": "nia.png",
        "contribution": 100
    },
    {
        "id": 30,
        "name": "한국예술종합학교 TULIP 3.0 업그레이드",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "https://lib.karts.ac.kr/",
        "imageUrl": "karts.jpg",
        "contribution": 100
    },
    {
        "id": 31,
        "name": "광주교육대학교 통합형 전자도서관시스템 구축",
        "detail": "메인 및 서브 데코레이터 퍼블리싱",
        "url": "http://library.gnue.ac.kr/",
        "imageUrl": "gnue.png",
        "contribution": 100
    },
    {
        "id": 32,
        "name": "2016년 RISS위탁운영",
        "detail": "RISS 유지보수",
        "url": "http://www.riss.kr/index.do",
        "imageUrl": "riss.jpg",
        "contribution": 100
    },
    {
        "id": 33,
        "name": "청주대학교 중앙도서관 전자도서관업그레이드",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "https://library.cju.ac.kr/",
        "imageUrl": "cju.png",
        "contribution": 100
    },
    {
        "id": 34,
        "name": "2015년 이화여자대학교 홈페이지 반응형 웹 개편",
        "detail": "메인 및 서브 데코레이터 퍼블리싱, 모듈 화면 커스터마이징(반응형웹)",
        "url": "http://lib.ewha.ac.kr/",
        "imageUrl": "ewha.jpg",
        "contribution": 100
    },
    {
        "id": 35,
        "name": "대구대학교 통합형 전자도서관시스템 업그레이드 및 홈페이지 리뉴얼",
        "detail": "메인 및 서브 데코레이터 퍼블리싱",
        "url": "https://lib.daegu.ac.kr/",
        "imageUrl": "daegu.png",
        "contribution": 100
    },
    {
        "id": 36,
        "name": "순천향대학교 통합 전자도서관시스템 구축",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "https://library.sch.ac.kr/",
        "imageUrl": "sch.png",
        "contribution": 100
    },
    {
        "id": 37,
        "name": "KDISCHOOL 통합도서관자동화시스템구축",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "https://library.kdischool.ac.kr/",
        "imageUrl": "kdiSchool.jpg",
        "contribution": 100
    },
    {
        "id": 38,
        "name": "한국전력연구원",
        "detail": "메인 및 서브 데코레이터 퍼블리싱",
        "url": "http://library.kepco.co.kr",
        "imageUrl": "",
        "contribution": 100
    },
    {
        "id": 39,
        "name": "사관학교 자료대출반납 자동화 장비도입",
        "detail": "메인 및 서브 데코레이터 퍼블리싱",
        "url": "http://lib.kma.ac.kr",
        "imageUrl": "",
        "contribution": 100
    },
    {
        "id": 40,
        "name": "인제대 통합전자도서관 시스템 구축",
        "detail": "메인 및 서브 데코레이터 퍼블리싱",
        "url": "http://library.inje.ac.kr/",
        "imageUrl": "inje.png",
        "contribution": 100
    },
    {
        "id": 41,
        "name": "대전시 유성구 관평도서관 통합전자도서관",
        "detail": "메인 및 서브 데코레이터 퍼블리싱",
        "url": "http://www.gplib.or.kr/",
        "imageUrl": "",
        "contribution": 100
    },
    {
        "id": 42,
        "name": "국민건강보험공단통합 전자도서관 시스템",
        "detail": "메인 및 서브 데코레이터 퍼블리싱\n웹접근성 관련 UI 및 스크립트 수정",
        "url": "http://lib.nhis.or.kr/",
        "imageUrl": "nhis.png",
        "contribution": 100
    },
    {
        "id": 43,
        "name": "안전보건공단",
        "detail": "메인 및 서브 데코레이터 퍼블리싱",
        "url": "http://library.kosha.or.kr/",
        "imageUrl": "kosha.png",
        "contribution": 100
    },
    {
        "id": 44,
        "name": "연세대학교 통합형 전자도서관 시스템 구축",
        "detail": "반응형웹 구조 설정 및 전체페이지 퍼블리싱(반응형웹)",
        "url": "https://library.yonsei.ac.kr/",
        "imageUrl": "yonsei.jpg",
        "contribution": 100
    },
    {
        "id": 45,
        "name": "가천대학교 도서관 웹기반 통합시스템",
        "detail": "메인 및 서브 데코레이터 퍼블리싱(반응형웹)",
        "url": "http://lib.gachon.ac.kr/",
        "imageUrl": "gachon.png",
        "contribution": 100
    },
    {
        "id": 46,
        "name": "한양대학교 홈페이지개선",
        "detail": "이용안내 하드코딩 페이지 퍼블리싱",
        "url": "",
        "imageUrl": "",
        "contribution": 100
    },
    {
        "id": 47,
        "name": "고려대학교 도서관 시설 운영시스템 구축 사업",
        "detail": "상단 메뉴영역 스크립트 처리\n이용안내 하드코딩 페이지 퍼블리싱",
        "url": "https://library.korea.ac.kr/",
        "imageUrl": "",
        "contribution": 100
    },
    {
        "id": 48,
        "name": "홍익대학교 통합형 전자도서관 구축사업",
        "detail": "이용안내 하드코딩 페이지 퍼블리싱",
        "url": "http://honors.hongik.ac.kr/",
        "imageUrl": "hongik.png",
        "contribution": 50
    },
    {
        "id": 49,
        "name": "이벤트 페이지 내 댓글 기능 추가",
        "detail": "댓글입력창 및 댓글목록 퍼블리싱",
        "url": "",
        "imageUrl": "publish01.png",
        "mobile": true,
        "contribution": 100
    }
]

export async function GET() {
    return NextResponse.json(publishList);
}