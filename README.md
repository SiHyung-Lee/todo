# 투두리스트 앱

## 소개

이 프로젝트는 React와 Vite를 기반으로 구축된 현대적인 투두리스트 애플리케이션입니다. 사용자 중심의 직관적인 디자인과 최신 웹 기술을 활용하여 빠르고 효율적인 할 일 관리 경험을 제공합니다.

## 데모

[🔗 라이브 데모 보기](https://todo-kohl-delta.vercel.app)

## 주요 기능

- ✅ 할 일 생성, 수정, 삭제 기능
- 🔄 실시간 상태 업데이트
- 📱 모든 디바이스에 최적화된 반응형 디자인
- 🎨 직관적이고 미니멀한 사용자 인터페이스
- 📋 드래그 앤 드롭으로 할 일 순서 변경
- 🏷️ 카테고리별 할 일 분류
- 🔍 할 일 검색 기능
- 📊 완료된 작업 통계 보기
- 🌓 다크/라이트 모드 지원
- 💾 로컬 스토리지를 활용한 데이터 영구 저장
- ⌨️ 키보드 단축키 지원
- 🔔 할 일 마감 알림 기능

## 기술 스택

- **프론트엔드 프레임워크**: React 18.3.1
- **빌드 도구**: Vite 5.4.10
- **상태 관리**: React Hooks, Context API
- **라우팅**: React Router DOM 7.0.1
- **스타일링**: CSS Modules, PostCSS
- **아이콘**: Font Awesome, Lucide React
- **드래그 앤 드롭**: react-beautiful-dnd
- **날짜 관리**: date-fns
- **알림**: react-toastify
- **배포 및 호스팅**: Vercel
- **버전 관리**: Git
- **테스트**: Jest, React Testing Library

## 주요 아키텍처

- 컴포넌트 기반 아키텍처
- Flux 패턴을 활용한 단방향 데이터 흐름
- 재사용 가능한 컴포넌트 설계
- 성능 최적화를 위한 메모이제이션 적용
- 커스텀 훅을 통한 비즈니스 로직 분리
- 접근성(A11Y) 고려한 시맨틱 마크업

## 개발 환경 설정

```shell script
# 프로젝트 클론
git clone [repository-url]

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env
# .env 파일을 열어 필요한 환경 변수 설정

# 개발 서버 실행 (기본 포트: 3000)
npm run dev

# 프로덕션 빌드
npm run build

# 테스트 실행
npm test

# 린트 검사
npm run lint

# 타입 검사
npm run type-check
```

## 프로젝트 구조

```
src/
├── components/    # 재사용 가능한 UI 컴포넌트
│   ├── common/   # 공통 컴포넌트
│   ├── todo/     # 할 일 관련 컴포넌트
│   └── layout/   # 레이아웃 컴포넌트
├── hooks/         # 커스텀 React hooks
├── pages/         # 라우트별 페이지 컴포넌트
├── context/       # React Context 정의
├── utils/         # 유틸리티 함수
├── constants/     # 상수 정의
├── types/        # TypeScript 타입 정의
├── styles/        # 전역 스타일 및 테마
├── services/     # API 통신 및 외부 서비스
└── assets/        # 이미지, 폰트 등 정적 파일
```
