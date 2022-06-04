import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

function Main() {
  const navigate = useNavigate();
  const til_list = useSelector((store) => store.til.til_list);

  console.log(til_list);

  return (
    <>
      <div
        style={{
          borderRight: "1px solid #065880",
          width: "20vmin",
          height: "100vmin",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <p>1월</p>
        <p>2월</p>
        <p>3월</p>
        <p>4월</p>
      </div>
      <div
        style={{
          margin: "0 auto",
          padding: "1rem",
          width: "60vmin",
        }}
      >
        <div
          className="title-area"
          style={{
            borderBottom: "1px solid #ccc",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1>TIL</h1>
          <button
            style={{
              color: "#fff",
              background: "#065880",
              border: "none",
              borderRadius: "3rem",
              width: "3rem",
              height: "3rem",
              margin: "auto 0",
            }}
            onClick={() => {
              navigate("/write");
            }}
          >
            추가
          </button>
        </div>

        <div className="til-list">
          {til_list.map((til, idx) => {
            return (
              <div
                className="til-item"
                key={idx}
                // 가상돔에서 무언가가 변경되면 변경된 애들만 찾아서 고치기 위해
                // so, 리액트 엘리먼트들은 누가 누군지 알게 해주는 암묵적인 키값을 가지고 있음
                // --> 기본적으로는 랜덤 생성

                // but 컴포넌트가 한 번 마운트 됐을 때 키값을 전부 가지고 있고,
                //     재렌더링 돼서 다시 무언가를 고쳐야 하는 애들을 또 mount 시켜야한다면
                //     map의 return이 렌더링 될때마다 각각 다른 애들을 뱉어낼 것임

                //    그럼 return 안의 내용이 하나도 변하지 않았더라도 키값이 달라지고,
                //    키값이 달라지면 결국 다시 재렌더링을 해야하는 불편함이 있음.
                //     ---> unique한 키 값을 가지고 있을 때와 비교해서 불편함.

                //     그냥 리액트 요소로 존재할 때는 상관없음.
                //     그런데 map이나 filter를 돌릴 때처럼,
                //     읽고 연산을 처리해야 하는 구문들은 unique한 키값이 편함
                //
                style={{
                  border: "1px solid #888",
                  marginBottom: "2rem",
                  padding: ".5rem",
                }}
              >
                <h3>{til.title}</h3>
                <p>{til.content}</p>
                <p>{til.time}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
