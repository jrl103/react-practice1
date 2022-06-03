import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

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

const Main = (props) => {
    const [til_list, setTilList] = React.useState([]);
    //실제로 값이 추가되려면 useState 사용해야함 !
    // state 만들어서 안에 넣어버리기

    const title_ref = React.useRef(null);
    const content_ref = React.useRef(null);
    const time_ref = React.useRef(null);
  
    const addTIL = () => {
        const til_data = {
          title: title_ref.current.value,
          content: content_ref.current.value,
          time: time_ref.current.value,
        };
    
        // 콘솔로 확인해요!
        console.log(til_data);
    
        // state에 저장해요!
        setTilList([...til_list, til_data]);
        // 값을 잘 불러오는 것 확인했으면 리스트에 들어가게 하기
        
        // til_list.push(til.data) 는 안됨!
        // 이유 : til-list는 임의로 수정하면 안되는 setTilList.
        //      : so, 바로 객체에 push를 넣으면 불변성이 깨짐
        // --> 불변성을 지켜주기 위해 til_list와 data 사용
    
        // 인풋은 지워줍시다! :)
        title_ref.current.value = "";
        content_ref.current.value = "";
        time_ref.current.value = "";
      };
    
      return (
        <div className="App" style={{ display: "flex", gap: "1rem" }}>
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
              }}
            >
              <h1>TIL</h1>
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
    
          <div
            className="input-area"
            style={{
              margin: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div>
              <span>과목</span>
              <input ref={title_ref} />
            </div>
    
            <div>
              <span>내용</span>
              <input ref={content_ref} />
            </div>
    
            <div>
              <span>공부시간</span>
              <input ref={time_ref} />
            </div>
    
            <button
              style={{
                color: "#fff",
                background: "#065880",
                border: "none",
                borderRadius: "3px",
                padding: "1rem",
              }}
              onClick={addTIL}
            >
              추가하기
            </button>
          </div>
        </div>
      );
    }
    
    export default Main;
    