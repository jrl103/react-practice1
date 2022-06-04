import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Write from "./pages/Write";

/**
 *
 * 할일 부터 정리하고 시작할까요!
 *
 * 1. til을 보여줄 뷰가 필요해!
 * 2. til 제목, 내용, 공부시간을 기입할 인풋이 필요해!
 * 3. 인풋 내용을 하나로 묶어줘야해!
 * 4. 묶어준 til data를 뷰로 넣어줘야해! -> state를 사용하자!
 * 5. til list가 뷰에 뿌려져야해!
 *
 * 각 단계마다 어떻게 해야하는 지 잠시 고민해보고 시작하세요! :)
 */

function App() {
  return (
    <div className="App" style={{ display: "flex", gap: "1rem" }}>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
    </div>
  );
}

export default App;
