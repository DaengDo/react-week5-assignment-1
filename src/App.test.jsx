import { render } from "@testing-library/react";

import App from "./App";

// App.jsx 의 테스트를 어떻게 진행해야하지

// 테스트 할 요소?
// - App.jsx의 역할을 수행하고 있는지 테스트
// App.jsx의 역할이 뭐지?
// - 앱에서 필요한 데이터 fetch
// - 앱의 전체 UI? 계층 구조? 를 드러냄

describe("App 컴포넌트", () => {
  const renderApp = () => render(App);

  it("앱의 제목이 출력된다.", () => {
    const { getByText } = renderApp();

    expect(getByText("Restaurants")).not.toBeNull();
  });
});

// describe("설명할 테스트 대상을 명시, 명사로 작성", () => {
//   context("테스트 대상이 놓인 상황을 설명, 상황 또는 조건을 기술", () => {
//     it("테스트 대상의 행동을 설명, 다만 수동형 표현은 좋지 않음", () => {
//       // TODO: write proper test code
//     });
//   });
// });
