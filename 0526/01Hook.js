import React, { useState } from 'react';
// Hook을 이용하여 기존 Class 바탕의 코드를 작성할 필요 없이 여러 React 기능을 사용할 수 있음.
// 선택적 사용 : 일부 컴포넌트 안에서 hook 사용 가능 
// useState = Hook
function Example() {
    //"count"라는 새로운 상태 값을 정의합니다.
    const [count, setCount] = useState(0); //초기값 0을 넣어준 것

    return (
        <div>
            <p>You cliked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};

// https://ko.reactjs.org/docs/hooks-overview.html