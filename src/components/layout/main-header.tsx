"use client";

import { useEffect, useState } from "react";
import { Akshar } from "next/font/google";
import { CgArrowUp, CgMenuGridR } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const AKsharFont = Akshar({
  weight: "400",
  subsets: ["latin"],
});

export function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuHover, setIsMenuHover] = useState<boolean>(false);
  const [isTapMenuButton, setIsTapMenuButton] = useState<boolean>(false);
  const [isCurtainAnimated, setIsCurtainAnimated] = useState<boolean>(false);

  const menuOpenIconSize = isMenuHover ? "20" : "25";
  const menuCloseIconSize = isMenuHover ? "25" : "20";

  // メニュー開閉処理
  function handleMenuToggle() {
    setIsTapMenuButton(true);
    setTimeout(() => {
      setIsMenuOpen((prev) => !prev);
      setIsTapMenuButton(false);
    }, 300);
  }

  // 幕のアニメーション終了を検知
  useEffect(() => {
    setIsCurtainAnimated(false);
    const timeout = setTimeout(() => {
      setIsCurtainAnimated(true);
    }, 600);
    return () => clearTimeout(timeout);
  }, [isMenuOpen]);

  return (
    <div className="h-22 relative overflow-hidden">
      {/* 背景（幕） */}
      <div
        className={`absolute left-0 top-0 h-full w-full bg-violet-700 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      ></div>

      {/* ヘッダー本体 */}
      <div className="relative z-10 flex justify-between px-7">
        <div className={AKsharFont.className}>
          <p
            className={`pointer-events-none my-6 text-4xl font-extrabold transition-all duration-500 ease-in-out ${
              isMenuOpen ? "text-white" : "text-violet-700"
            }`}
          >
            QTup
          </p>
        </div>

        {/* 幕のアニメーションが完了するまでボタンを非表示にする */}
        {isCurtainAnimated && (
          <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsMenuHover(true)}
            onMouseLeave={() => setIsMenuHover(false)}
          >
            {/* 背面の円 */}
            <div
              className={`absolute h-12 w-12 rounded-full bg-slate-200 transition-all duration-500 ease-in-out ${
                isTapMenuButton
                  ? "scale-200 opacity-0"
                  : isMenuHover
                    ? "scale-150"
                    : "scale-100"
              }`}
            ></div>

            {/* ボタン */}
            <button
              onClick={handleMenuToggle}
              className={`relative z-10 my-5 h-12 w-12 animate-scale-in-center rounded-full transition-all duration-500 ease-in-out ${
                isTapMenuButton
                  ? "scale-200 opacity-0"
                  : isMenuHover
                    ? "bg-white"
                    : isMenuOpen
                      ? "bg-white"
                      : "bg-violet-700"
              }`}
            >
              {isMenuOpen ? (
                isMenuHover ? (
                  <CgArrowUp
                    size={menuCloseIconSize}
                    className="m-auto text-violet-700"
                  />
                ) : (
                  <IoClose
                    size={menuCloseIconSize}
                    className="m-auto text-violet-700"
                  />
                )
              ) : (
                <CgMenuGridR
                  size={menuOpenIconSize}
                  color={`${isMenuHover ? "#6D28D9" : "white"}`}
                  className="m-auto"
                />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
