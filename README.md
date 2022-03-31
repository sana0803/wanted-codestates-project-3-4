## 🚀 배포 링크

https://deploy-preview-29--wanted-preonboarding-team3-daground.netlify.app/news

## 💿 실행 방법

```cmd
$ git clone https://github.com/pre-onboarding-team3/wanted-codestates-project-3-4.git

$ npm install

$ npm run start
```

## 😎 3팀

- 도지현 : (팀장) 하단컨텐츠, 더보기 버튼
- 노학민 : 캐러셀
- 김남경 : REDUX (like, API 데이터)
- 김형욱 : 상세페이지
- 이산하 : 상단 nav 바, 탭 애니메이션
- 양윤성 : 에러 핸들링, 리덕스 관여

## 🎇사용 기술스택

- Javascript
- React
- Redux
- styled-components
- Axios
- redux-promise

## 👩‍💻구현

### 상단 Tab bar, 구독하기

![TabNav,구독하기](https://user-images.githubusercontent.com/87519250/158075896-a7cc9ac6-caee-452a-bcf9-d54318d8392e.gif)

- 상단 탭에 따라 슬라이드, 하단콘텐츠가 다르게 보입니다.
- 구독하기 클릭시 실제 홈페이지로 이동합니다.
  <br />

### 새로 올라왔어요, 슬라이드

![슬라이드](https://user-images.githubusercontent.com/87519250/158075839-cb6fefef-59b5-4b4a-9cb0-197f4b4af464.gif)

- 슬라이드도 라이브러리를 사용하지 않고 구현하였습니다.
- 각 컨텐츠에 맞는 이미지 슬라이드를 보여줍니다.

<br />

### 상세페이지, 더보기

![상세보기,더보기](https://user-images.githubusercontent.com/87519250/158075842-c137eebc-49c7-4d6c-8325-cff70143b84a.gif)

- 하단콘텐츠 리스트를 클릭하면 상세페이지로 갈 수 있고 상세페이지에서 유튜브재생, 외부링크로 이동 가능합니다.
- 더보기 버튼 클릭전에는 4개의 콘텐츠를 보여주고 클릭 시 모든 컨텐츠를 보여줍니다.

<br />

### 좋아요, 공유하기

![좋아요, 공유하기](https://user-images.githubusercontent.com/87519250/158075845-848a10ef-c213-468c-93aa-b04781cdbf41.gif)

- 좋아요 기능은 리덕스, 로컬스토리지에서 저장하여 전역에서 관리가 가능합니다.

### Etc

- 페이지에서 사용되는 데이터는 리덕스로 관리합니다. (슬라이드, 하단 콘텐츠 등)
