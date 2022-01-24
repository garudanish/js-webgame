const number = Number(prompt("몇 명이 참가하나요?"));

if (number) {
  const $button = document.querySelector("button");
  const $input = document.querySelector("input");
  const $word = document.querySelector("#word");
  const $order = document.querySelector("#order");

  let word; // 제시어
  let newWord; // 현재 작성한 단어

  const onClickButton = () => {
    if (
      newWord.length === 3 &&
      (!word || word[word.length - 1] === newWord[0])
    ) {
      // 제시어가 비어있거나 올바르다.
      word = newWord; // 입력한 단어가 제시어가 된다.
      $word.textContent = word; // 제시어를 화면에 표시한다.

      const order = Number($order.textContent); // 현재 순서
      if (order + 1 > number) {
        // 현재 순서에 +1을 하면 참여자 수보다 많아진다
        $order.textContent = 1; // 순서를 첫번째로 한다.
      } else {
        $order.textContent = order + 1; // 현재 순서에 +1을 한다
      }
    } else {
      // 올바르지 않은 단어이다
      $word.textContent = `틀렸습니다! 이전 제시어는 ${word}입니다.`;
    }

    $input.value = "";
    $input.focus();
  };
  const onInput = (event) => {
    newWord = event.target.value;
  };

  $button.addEventListener("click", onClickButton);
  $input.addEventListener("input", onInput);
}
