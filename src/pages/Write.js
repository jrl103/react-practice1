import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // post 요청 보낼거니까 꼭 필요 !

import { add } from "../store/til";

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

function Write() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    // setTilList([...til_list, til_data]);
    // 값을 잘 불러오는 것 확인했으면 리스트에 들어가게 하기

    // til_list.push(til.data) 는 안됨!
    // 이유 : til-list는 임의로 수정하면 안되는 setTilList.
    //      : so, 바로 객체에 push를 넣으면 불변성이 깨짐
    // --> 불변성을 지켜주기 위해 til_list와 data 사용

    // 인풋은 지워줍시다! :)
    title_ref.current.value = "";
    content_ref.current.value = "";
    time_ref.current.value = "";

    dispatch(add({ til_data: til_data }));
    axios.post("http://localhost:5001/til_list", til_data);
    navigate(-1);
  };

  return (
    <>
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
    </>
  );
}

export default Write;
