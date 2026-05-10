"use client";

import { useState, useEffect, useRef } from "react";

export interface TypingAnimationOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypingAnimation(
  items: string[],
  options?: TypingAnimationOptions
) {
  const {
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
  } = options ?? {};

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const currentItem = items[currentIndex];

    const clearExistingTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    if (!isDeleting) {
      if (displayedText.length < currentItem.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentItem.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentItem.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }
    }

    return clearExistingTimeout;
  }, [displayedText, isDeleting, currentIndex, items, typingSpeed, deletingSpeed, pauseDuration]);

  const currentItem = items[currentIndex] ?? "";

  return {
    displayedText,
    currentIndex,
    currentItem,
  };
}