---
name: figma-publishing
description: 피그마 MCP를 활용해 디자인을 Next.js 컴포넌트로 퍼블리싱하는 스킬. 피그마 디자인을 코드로 변환, 페이지 퍼블리싱, 컴포넌트 구현, 피그마 URL이 포함된 퍼블리싱 요청 시 반드시 이 스킬을 사용할 것. "퍼블리싱 해줘", "이 페이지 만들어줘", "피그마 보고 작업해줘", "디자인대로 구현해줘" 등의 요청에도 트리거.
---

# 피그마 퍼블리싱 스킬

피그마 MCP로 디자인을 가져와 Next.js + Tailwind CSS 컴포넌트로 퍼블리싱하는 워크플로우.

---

## 1. 작업 시작 — 디자인 분석

### 피그마 디자인 가져오기

1. 피그마 MCP 도구로 해당 페이지/프레임의 디자인 데이터를 가져온다.
2. 디자인이 이미지 형태(AI 생성 캡처)로 되어 있을 수 있다. 이 경우 시각적으로 분석하여 레이아웃, 색상, 타이포그래피, 간격을 파악한다.
3. 디자인을 논리적 단위(섹션, 카드, 리스트 등)로 분해한다.

### 기존 컴포넌트 매칭 (최우선)

퍼블리싱의 핵심 원칙은 **기존 컴포넌트 재사용 80%, 새 컴포넌트 생성 20%**이다.

디자인 분석 후 반드시 아래 컴포넌트 목록과 대조하여 재사용 가능한 것을 먼저 찾는다:

**UI 컴포넌트** (`@/components/ui/`):

- `Button` — CVA 기반 variants (default/destructive/outline/secondary/ghost/link), sizes (default/sm/lg/icon/icon-sm/icon-lg)
- `MainHeader` — 상단 네비게이션 헤더 (KBO 로고 + 메뉴)
- `GameCard` — 경기 정보 카드 (홈팀, 원정팀, 시간, 구장)
- `Container` — 페이지 콘텐츠 래퍼 (패딩, 테두리)
- `PageHeader` — 페이지 제목 + 설명
- `Label` — 폼 라벨 (Radix UI)
- `Form` — React Hook Form 래퍼

**메인 컴포넌트** (`@/components/main/ui/`):

- `TeamSelectModal` — 내 팀 선택 모달 (Compound Component: `Title` / `TeamGrid`)

**테이블 컴포넌트** (`@/components/table/`):

- `DataTable` — 정렬 가능한 데이터 테이블
- `Table`, `TableRow`, `TableCell` — 기본 테이블 구성요소
- `useTable` — 테이블 정렬/상태 훅

**지도 컴포넌트** (`@/components/map/ui/`):

- `KoreaMap` — 한국 지도 + 구장 마커
- `StadiumMarker` — 구장 마커
- `StadiumDetail` — 구장 상세 사이드바
- `SectionCard` — 섹션 카드 (white/lime 변형)
- `WeatherInfoItem` — 날씨 데이터 표시
- `HourlyForecast` — 시간별 예보
- `ForecastRow` — 일별 예보 행

**공유 컴포넌트** (`@/shared/ui/`):

- `KboNameTag` — 팀 이름 + 컬러 태그
- `IconTextButton` — 아이콘 + 텍스트 버튼

**타이포그래피** (`@/lib/Typography.tsx`):

- `H1`, `H2`, `H3`, `H4`, `P`, `Lead`, `Large`, `Muted`, `Blockquote`, `InlineCode`

---

## 2. 컴포넌트 생성 규칙

### 새 컴포넌트를 만들기 전에 반드시 사용자에게 확인받을 것

"이런 컴포넌트를 새로 만들어야 할 것 같은데 진행해도 될까요?" 라고 물어본 후 승인을 받아야 한다. 기존 컴포넌트로 대체 가능한지 먼저 충분히 검토하고, 정말 불가능할 때만 새로 만든다.

### 새 컴포넌트 설계 고려사항 (재사용성 & 확장성)

새 컴포넌트를 만들 때는 반드시 아래 기준을 충족하도록 설계한다:

- **Compound Component 원칙 (기본)**: 기본 설계 방식으로 Compound Component 패턴을 사용한다. 부모 컴포넌트가 Context를 소유하고, 자식 서브 컴포넌트들이 `useContext`로 필요한 값을 직접 읽는 구조로 만든다. Props가 3단계 이상 내려가는 props drilling을 원천 차단한다.

  ```tsx
  // Bad — props drilling
  <Modal data={data} selected={selected} onSelect={fn} onClose={fn}>
    <ModalBody data={data} selected={selected} onSelect={fn} />
  </Modal>

  // Good — Compound Component
  <TeamSelectModal onClose={fn}>
    <TeamSelectModal.Title />
    <TeamSelectModal.TeamGrid />
  </TeamSelectModal>
  ```

- **하드코딩 금지**: 컴포넌트 내부에 특정 팀 이름, 특정 문자열, 특정 색상 값을 직접 박지 않는다. 데이터는 외부에서 주입받는다.
- **variant / className 확장**: 스타일 변형이 생길 가능성이 있으면 CVA variant 또는 `className` prop을 열어둔다.
- **콜백 분리**: 클릭, 선택, 닫기 등의 동작은 컴포넌트 내부에서 처리하지 않고 `onXxx` 형태의 props로 부모에게 위임한다.
- **단일 책임**: 하나의 컴포넌트는 하나의 UI 역할만 담당한다. 데이터 fetching, 비즈니스 로직, 상태 파생은 컴포넌트 파일에 두지 않는다.

### 디렉토리 배치

| 조건 | 위치 |
| --- | --- |
| 3개 이상 페이지에서 범용 재사용 | `src/shared/ui/` |
| 여러 페이지에서 재사용하지만 앱 전반적인 UI | `src/components/ui/` |
| 특정 기능 그룹(페이지/영역) 전용 | `src/components/[그룹명]/ui/` |
| shadcn 자동 설치 컴포넌트 | `src/components/ui/` |

- `[그룹명]`은 기능 단위 그룹명으로 짓는다. (예: `main`, `table`, `map`)
- 특정 페이지/영역에서만 쓰이는 컴포넌트는 `components/ui/`가 아닌 해당 그룹 폴더에 둔다.

```
src/
  shared/ui/          — 앱 전반 범용 컴포넌트 (KboNameTag, IconTextButton 등)
  components/
    ui/               — 공통 UI 컴포넌트 (Button, MainHeader, GameCard 등)
    main/ui/          — 메인 페이지 전용 컴포넌트 (TeamSelectModal 등)
    table/ui/         — 테이블 전용 컴포넌트
    map/ui/           — 지도 전용 컴포넌트
```

### 파일 네이밍

- `.tsx` 파일: **PascalCase** (예: `GameCard.tsx`, `SectionCard.tsx`)
- `.ts` 파일: **camelCase** (예: `useTable.ts`, `types.ts`)

### 150줄 제한

하나의 컴포넌트 파일은 **150줄을 넘지 않는다**. 넘어갈 것 같으면 논리적 단위로 하위 컴포넌트를 분리한다. 분리된 하위 컴포넌트도 동일하게 150줄 제한을 적용한다.

---

## 3. 코드 작성 규칙

### Import 경로

모든 import는 `@/`로 시작한다. 상대경로(`../`, `./`) 사용 금지.

```tsx
// Good
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Bad
import { Button } from "../../components/ui/button";
```

### 스타일링

- **인라인 Tailwind 클래스만** 사용한다. CSS 모듈, styled-components 등 사용 금지.
- 클래스 조합 시 `cn()` 유틸리티를 사용한다 (`@/lib/utils`).
- 반응형 디자인은 적용하지 않는다.

### 레이아웃 기준

- **페이지**: 풀스크린(`w-full`)으로 퍼블리싱한다.
- **사이드바**: 오른쪽에 배치하며 전체 너비의 약 1/3(`w-1/3`)로 잡는다.

### 텍스트 커서 방지

단순히 정보를 표시하는 텍스트 영역(`<p>`, `<span>`, `<div>` 등)에 커서를 올렸을 때 텍스트 입력 커서(I-beam)가 깜빡이면 안 된다. 사용자가 편집 가능한 것으로 오해할 수 있기 때문이다. 정보 전달 영역에는 `cursor-default`를 적용하고, `contentEditable`이나 불필요한 `tabIndex`를 넣지 않는다.

### 커스텀 색상

프로젝트에 정의된 KBO 색상을 활용한다:

```
kbo-light (#e5e9ff)    kbo-lightBlue (#1f3399)
kbo-blue (#0c1f7a)     kbo-darkBlue (#001f63)
kbo-navy (#273b61)     kbo-gray (#808390)
kbo-black (#252329)
```

팀 브랜드 색상:

```
kiwoom (#570414)    hanwha (#fc4f00)    ssg (#ce0f2d)
samsung (#064ca2)   doosan (#131230)    kt (#000000)
Lg (#c30452)        kia (#ea0029)       nc (#325288)
lotte (#041e42)
```

### 컴포넌트 변형 (Variants)

여러 스타일 변형이 필요한 컴포넌트는 CVA(class-variance-authority)를 사용한다. 기존 Button 컴포넌트 패턴을 참고할 것.

### 아이콘

- **Tabler Icons** (`@tabler/icons-react`)를 주력으로 사용한다.
- Lucide는 보조로 사용.
- SVG 파일은 `public/image/` 경로에 저장한다.

### 이미지

- 래스터 이미지는 `next/image`의 `Image` 컴포넌트를 사용한다.
- SVG는 `<Img>` 태그로 사용.

### 커스텀 훅

- React hook을 사용하는 커스텀 훅만 `use` 접두사를 붙인다.
- 파일명은 camelCase (예: `useStadium.ts`).

#### 훅 배치 기준

| 범위 | 위치 |
| --- | --- |
| 여러 기능 그룹에서 범용적으로 재사용 | `src/hook/` |
| 특정 기능 그룹 내에서만 사용 | `src/components/[그룹명]/hook/` |

- `[그룹명]`은 개별 컴포넌트명이 아닌 **기능 단위 그룹명**으로 짓는다. (예: `main`, `table`, `map`)
- 같은 페이지/영역에서 사용하는 훅은 하나의 그룹 폴더로 묶는다. 사용처마다 개별 폴더를 만들지 않는다.

```
src/
  hook/                      — 전역 범용 훅
  components/
    main/hook/               — 메인 페이지 영역 훅 (헤더, 팀 선택 등)
    table/hook/              — 테이블 컴포넌트 훅
    map/hook/                — 지도 컴포넌트 훅
```

### 상태관리

- 서버 데이터: TanStack Query (`@tanstack/react-query`)
- 클라이언트 상태: Redux Toolkit (`@reduxjs/toolkit`)
- 폼: React Hook Form + Zod

#### 컴포넌트 파일 역할 3분리 원칙

파일 하나에 하나의 역할만 담는다. 세 역할을 아래와 같이 나눈다:

| 파일 | 역할 | 금지 사항 |
| --- | --- | --- |
| `[컴포넌트].tsx` | Context 구조 + 서브 컴포넌트 + JSX 렌더링 | `useAppDispatch` / `useAppSelector` 직접 호출 금지 |
| `hook/use[컴포넌트].ts` | Redux 연결 전담 — 상태값과 핸들러를 반환 | 비즈니스 로직 외 JSX 렌더링 금지 |
| `store/[도메인]Store.ts` | 상태 정의, 액션, 리듀서, 셀렉터 | UI 관련 코드 금지 |

컴포넌트는 훅이 반환한 값과 핸들러만 받아서 렌더링한다.

```tsx
// hook/useTeamSelectModal.ts — Redux 연결
export const useTeamSelectModal = () => {
  const dispatch = useAppDispatch();
  const selectedTeam = useAppSelector(selectMyTeam);
  const handleSelect = (team: Team) => { dispatch(setMyTeam(team)); };
  return { selectedTeam, handleSelect };
};

// TeamSelectModal.tsx — 순수 UI
const TeamSelectModal = ({ onClose }: TeamSelectModalProps) => {
  const { selectedTeam, handleSelect } = useTeamSelectModal();
  // Context에 주입 후 서브 컴포넌트에서 소비
};
```

#### store 폴더 — 관심사별 분리

`src/store/` 아래에 **기능/도메인 단위**로 store를 나눈다:

```
src/store/
  store.ts          — 루트 스토어 (reducer 등록만)
  hook.ts           — useAppDispatch, useAppSelector 타입 훅
  myTeamStore.ts    — 내 팀 선택 상태
  scheduleStore.ts  — 경기 일정 관련 상태
  stadiumStore.ts   — 구장 관련 상태
  ...
```

- 파일 네이밍은 **`[도메인]Store.ts`** 형식을 사용한다. `Slice` 접미사는 사용하지 않는다. (예: `myTeamStore.ts`, `stadiumStore.ts`)
- store 하나 = 하나의 도메인/기능 (팀, 경기, 구장 등)
- 같은 상태를 여러 컴포넌트에서 쓸 수 있도록 selector를 store 파일에 함께 export한다
- 컴포넌트는 `useAppSelector`로 읽고, `useAppDispatch`로 action만 dispatch한다 — store 내부 구조에 직접 접근하지 않는다

---

## 4. 접근성 기본 규칙

최소한의 접근성을 항상 챙긴다:

- **시맨틱 HTML**: `<button>`, `<nav>`, `<main>`, `<section>`, `<header>` 등 적절한 태그
- **alt 텍스트**: 모든 `<img>`, `Image` 컴포넌트에 `alt` 속성 제공
- **키보드 네비게이션**: 인터랙티브 요소는 키보드로 접근 가능하도록

---

## 5. 작업 완료 보고

커밋 전에 반드시 아래 내용을 포함한 **상세 보고서**를 작성한다:

### 보고서 템플릿

```
## 퍼블리싱 작업 보고

### 작업 페이지
- [페이지명]

### 기존 컴포넌트 재사용 목록
- [컴포넌트명] — [사용 위치/용도]

### 새로 생성한 컴포넌트
- [컴포넌트명] — [파일 경로] — [용도]

### 상태관리
- [사용한 상태관리 방식과 이유]

### 커스텀 훅
- [훅 이름] — [용도]

### 특이사항
- [디자인 대비 변경 사항, 기술적 결정 등]
```

---

## 6. 전체 워크플로우

```
1. 피그마 MCP로 디자인 가져오기
2. 디자인 분석 — 레이아웃, 색상, 타이포, 간격 파악
3. 기존 컴포넌트 매칭 — 재사용 가능한 것 먼저 식별
4. 새 컴포넌트 필요 시 → 사용자에게 확인
5. 코드 작성 — 위 규칙 준수
6. 프리뷰 확인 — 디자인과 비교
7. 코드 리뷰 — 규칙 준수 여부 점검
8. 상세 보고서 작성
9. 사용자 확인 후 커밋
```
