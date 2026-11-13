# Sulbing-Game

설빙 고대안암점 신입 알바생으로 시작하는 비공식 빙수 만들기 웹게임입니다.

## 실행

Node.js 22 이상이 필요합니다. 별도 설치할 패키지는 없습니다.

npm 없이 다음 명령으로 실행할 수 있습니다.

```sh
node test.cjs
node scripts/build.cjs
node server.cjs
```

npm을 사용할 수 있다면 다음 명령도 동일하게 동작합니다.

```sh
npm test
npm start
```

`npm start`는 먼저 `src/`를 `dist/`로 복사한 뒤 로컬 서버를 시작합니다.
브라우저에서 <http://127.0.0.1:4173/>을 여세요. 서버 종료는 `Ctrl+C`입니다.
이미 같은 포트에서 게임이 실행 중이면 기존 서버를 종료한 후 실행하세요.

## 파일 구조

- `src/index.html`: 화면 진입점
- `src/style.css`: 디자인과 반응형 스타일
- `src/game.js`: 메뉴, 확률, 난이도 및 승진 계산
- `src/app.js`: 화면, 주문, 제작, 배지, 저장 및 다시 시작 동작
- `src/assets/`: 게임에서 사용하는 로컬 이미지
- `server.cjs`: 로컬 정적 파일 서버
- `scripts/build.cjs`: 소스를 `dist/`에 복사
- `test.cjs`: 게임 로직 검사
- `AGENTS.md`: 프로젝트 작업 규칙

수정할 파일은 `src/`에 있습니다. `dist/`는 `npm run build`로 생성하며 Git에 올리지 않습니다.
`.env`, 의존성, 로그, 임시 조사 파일, 로컬 배포 설정도 제외합니다.
게임 진행과 난이도는 각 브라우저의 localStorage에 저장되며 GitHub에 업로드되지 않습니다.

## GitHub 업로드 전 확인

원격 저장소: <https://github.com/h1050375/Sulbing-Game>

```sh
git status
git remote -v
git show --stat HEAD
```

내용을 확인하고 업로드하기로 결정한 뒤에만 실행하세요.

```sh
git push -u origin main
```

GitHub 로그인 또는 인증이 필요할 수 있습니다. 원격에 별도 커밋이 있어 push가 거절되면
강제 push하지 말고 먼저 원격 이력을 확인하세요.

## 자료 출처와 확인 한계

메뉴·가격·사진 출처 및 게임 내부 확률 설정은 게임의 ‘출처’ 화면에서 확인할 수 있습니다.
공식 제조 순서는 확인되지 않았으며 게임용 조립 순서를 사용합니다.
외부 메뉴 사진과 Google Fonts는 인터넷 연결 및 원본 서버 상태에 영향을 받습니다.
생딸기설빙 이미지는 사용자가 제공한 자료입니다.
외부 브랜드·사진의 복제 및 배포 이용 허락은 확인되지 않았으며,
이 저장소에는 해당 자료에 대한 별도의 이용 허락이나 오픈소스 라이선스를 부여하지 않습니다.
