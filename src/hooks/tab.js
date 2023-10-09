import { useState } from "react";

export function useTab(tabs = [], defaultIndex = 0, maxIndex) {
  const [currentIndex, setIndex] = useState(defaultIndex);

  const next = () => {
    setIndex(currentIndex === maxIndex ? currentIndex : currentIndex + 1);
  };
  const prev = () => {
    setIndex(currentIndex === 0 ? 0 : currentIndex - 1);
  };

  const goto = (index) => {
    if (!(index < 0 || index > maxIndex)) {
      setIndex(index);
    }
  };

  const Component = tabs[currentIndex] ?? (() => <></>);

  return {
    currentIndex,
    next,
    prev,
    goto,
    Component,
    canNext: currentIndex < tabs.length - 1,
    canPrev: currentIndex !== 0
  };
}
