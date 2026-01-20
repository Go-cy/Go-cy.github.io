# 💒 모바일 청첩장 웹사이트

고찬윤 ❤️ 이은민의 결혼식에 초대합니다

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-success)](https://go-cy.github.io)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)

## 📅 결혼식 정보

- **신랑**: 고찬윤
- **신부**: 이은민
- **날짜**: 2026년 6월 14일 (토요일)
- **시간**: 오후 1시 10분
- **장소**: 안산 AW 컨벤션
- **주소**: 경기도 안산시 단원구 광덕대로 285

## 🌐 웹사이트 주소

**메인 URL**: [https://go-cy.github.io](https://go-cy.github.io)

## ✨ 주요 기능

- ✅ **모바일 최적화** - 반응형 디자인으로 모든 기기에서 완벽하게 작동
- ⏰ **카운트다운 타이머** - 결혼식까지 남은 시간을 실시간으로 표시
- 🗺️ **카카오맵 연동** - 결혼식 장소를 지도로 확인 가능
- 📸 **포토 갤러리** - 8장의 사진을 라이트박스로 확인
- 📱 **연락하기** - 신랑/신부 측 전화/문자 연결
- 💝 **마음 전하기** - 계좌번호 복사 기능
- 🎨 **모던한 디자인** - 골드/로즈골드 컬러의 우아한 디자인
- 🎭 **부드러운 애니메이션** - 스크롤 시 자연스러운 페이드인 효과
- 🔗 **SNS 공유** - Open Graph 메타태그로 SNS 공유 최적화

## 📂 프로젝트 구조

```
Go-cy.github.io/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 스타일시트
├── js/
│   └── script.js       # JavaScript 기능
├── images/             # 사진 폴더
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   ├── photo6.jpg
│   ├── photo7.jpg
│   └── photo8.jpg
└── README.md           # 이 파일
```

## 🚀 GitHub Pages 배포 방법

### 1단계: GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 선택
4. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
   - **Save** 버튼 클릭

### 2단계: 배포 확인

- 몇 분 후 `https://go-cy.github.io` 에서 웹사이트 확인 가능
- 배포 상태는 저장소의 **Actions** 탭에서 확인 가능

## 📸 사진 업로드 방법

### 실제 사진으로 교체하기

1. 촬영한 결혼 사진을 준비합니다 (최소 8장)
2. 사진 크기를 최적화합니다 (권장: 1200x900px 이하, 각 500KB 이하)
3. 사진 파일명을 `photo1.jpg` ~ `photo8.jpg`로 변경
4. `images/` 폴더의 기존 placeholder 파일을 삭제
5. 새로운 사진 파일을 `images/` 폴더에 업로드

### GitHub 웹 인터페이스로 업로드

1. GitHub 저장소에서 `images/` 폴더로 이동
2. **Add file** → **Upload files** 클릭
3. 사진 파일을 드래그 앤 드롭
4. **Commit changes** 버튼 클릭

### Git 명령어로 업로드

```bash
# 저장소 클론
git clone https://github.com/Go-cy/Go-cy.github.io.git
cd Go-cy.github.io

# 기존 placeholder 이미지 삭제
rm images/*.jpg

# 새로운 사진 복사
cp /path/to/your/photos/*.jpg images/

# Git에 추가 및 커밋
git add images/
git commit -m "Update wedding photos"
git push origin main
```

## ✏️ 내용 수정 방법

### index.html 수정

#### 1. 연락처 수정

```html
<!-- 신랑측 연락처 -->
<a href="tel:010-XXXX-XXXX" class="contact-btn">

<!-- 신부측 연락처 -->
<a href="tel:010-YYYY-YYYY" class="contact-btn">
```

#### 2. 계좌번호 수정

```html
<!-- 신랑측 계좌 -->
<p class="account-number" id="groom-account">은행명 계좌번호</p>

<!-- 신부측 계좌 -->
<p class="account-number" id="bride-account">은행명 계좌번호</p>
```

#### 3. 카카오맵 API 키 설정

1. [Kakao Developers](https://developers.kakao.com/)에서 계정 생성
2. 애플리케이션 추가
3. JavaScript 키 발급
4. `index.html` 파일에서 다음 부분 수정:

```html
<script type="text/javascript" 
    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_API_KEY_HERE">
</script>
```

`YOUR_KAKAO_API_KEY_HERE`를 발급받은 키로 교체

### 색상 변경 (css/style.css)

```css
:root {
    --primary-color: #d4af37;        /* 메인 골드 컬러 */
    --secondary-color: #c9a66b;      /* 라이트 골드 */
    --accent-color: #b8860b;         /* 다크 골드 */
    --rose-gold: #b76e79;            /* 로즈골드 */
    --bg-ivory: #fffef7;             /* 아이보리 배경 */
}
```

### 텍스트 내용 수정

`index.html`에서 다음 섹션의 텍스트를 자유롭게 수정할 수 있습니다:

- 초대 메시지 (`.invitation-message`)
- 결혼식 정보 (`.wedding-info-section`)
- 푸터 메시지 (`.footer-message`)

## 🛠️ 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - 모던 스타일링, Flexbox, Grid, Animations
- **JavaScript (ES6+)** - 인터랙티브 기능
- **Google Fonts** - Noto Sans KR, Nanum Myeongjo
- **Font Awesome** - 아이콘
- **AOS Library** - 스크롤 애니메이션
- **Kakao Maps API** - 지도 연동

## 📱 브라우저 지원

- ✅ Chrome (최신 버전)
- ✅ Safari (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Edge (최신 버전)
- ✅ 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 🔧 로컬 개발 환경

### 로컬에서 실행하기

1. 저장소 클론:
```bash
git clone https://github.com/Go-cy/Go-cy.github.io.git
cd Go-cy.github.io
```

2. 간단한 HTTP 서버 실행:

**Python 3 사용:**
```bash
python -m http.server 8000
```

**Node.js 사용 (http-server):**
```bash
npx http-server -p 8000
```

**VS Code 사용:**
- Live Server 확장 프로그램 설치
- `index.html` 우클릭 → "Open with Live Server"

3. 브라우저에서 `http://localhost:8000` 접속

## 📝 커스터마이징 팁

### 폰트 변경
```html
<!-- index.html에서 -->
<link href="https://fonts.googleapis.com/css2?family=다른폰트&display=swap" rel="stylesheet">
```

```css
/* style.css에서 */
:root {
    --font-primary: '다른폰트', sans-serif;
}
```

### 애니메이션 속도 조정
```javascript
// script.js에서
AOS.init({
    duration: 1000,  // 밀리초 단위 (기본: 1000)
    once: true,
    offset: 100
});
```

### 갤러리 레이아웃 변경
```css
/* style.css에서 */
.gallery-grid {
    grid-template-columns: repeat(4, 1fr);  /* 4열로 변경 */
    gap: 15px;  /* 간격 조정 */
}
```

## 🐛 문제 해결

### 지도가 표시되지 않는 경우
- Kakao Maps API 키가 올바르게 설정되었는지 확인
- 브라우저 콘솔(F12)에서 오류 메시지 확인
- API 키의 플랫폼 설정에서 도메인이 등록되었는지 확인

### 사진이 표시되지 않는 경우
- 파일명이 `photo1.jpg` ~ `photo8.jpg`인지 확인
- 파일이 `images/` 폴더에 있는지 확인
- 이미지 파일 확장자가 `.jpg` 또는 `.jpeg`인지 확인
- 파일 크기가 너무 크지 않은지 확인 (권장: 500KB 이하)

### 모바일에서 레이아웃이 깨지는 경우
- 브라우저 캐시를 삭제하고 새로고침
- 반응형 CSS가 적용되었는지 확인
- 개발자 도구의 디바이스 모드로 테스트

## 📄 라이선스

이 프로젝트는 개인 결혼식 청첩장 용도로 제작되었습니다.
자유롭게 수정하여 사용하실 수 있습니다.

## 👥 제작자

**고찬윤 & 이은민**

결혼식 날짜: 2026년 6월 14일 (토) 오후 1시 10분  
장소: 안산 AW 컨벤션

---

## 🎉 감사합니다

소중한 분들을 모시고자 이렇게 작은 공간을 마련했습니다.  
부디 오셔서 저희의 앞날을 축복해 주시면 감사하겠습니다.

**고찬윤 · 이은민 올림**

---

### 📞 문의사항

웹사이트 관련 문의사항이 있으시면 GitHub Issues를 통해 연락 주시기 바랍니다.

[GitHub Issues](https://github.com/Go-cy/Go-cy.github.io/issues)
