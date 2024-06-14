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
        "contribution": 100
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
        "contribution": 100
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
        "contribution": 100
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
        "contribution": 90
    }
]

export async function GET() {
    return NextResponse.json(devlopList);
}