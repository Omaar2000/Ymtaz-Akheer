"use client";

import React, { useEffect, useState } from "react";
import Times from "./times";

const Component2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const daysPerPage = 3;
  const totalDays = 7;
  const arabicDays = [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الجمعة",
    "السبت",
  ];

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, totalDays - daysPerPage + 1)
    );
  };

  const renderDays = () => {
    const days = [];
    for (let i = currentPage; i < currentPage + daysPerPage; i++) {
      const dayIndex = (i - 1) % 7;
      const date = getNextDate(i - 1);
      days.push(
        <>
          <div key={i} className="text-center w-40 gap-1 text-[#999888]">
            <div className="bg-[#DDB762] text-[#fff] px-8 py-2 rounded-t ">
              {(dayIndex == "0" && "اليوم") ||
                (dayIndex == "1" && "غدًا") ||
                arabicDays[dayIndex]}
              {dayIndex != "0" && dayIndex != "1" && (
                <span className="mr-2">{date}</span>
              )}
            </div>
            <div className="flex justify-center items-center h-52 bg-[#f9f9f9] rounded-b">
              {(dayIndex == "5" || dayIndex == "6") && "لا يوجد مواعيد متاحة"}
              {dayIndex != "5" && dayIndex != "6" && <Times />}
            </div>
          </div>
        </>
      );
    }
    return days;
  };

  const getNextDate = (offset) => {
    const today = new Date();
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + offset);
    const formattedDate = nextDate.toLocaleDateString("ar", {
      day: "numeric",
      month: "numeric",
    });
    return formattedDate;
  };

  return (
    <div className="flex items-center justify-between mx-4 my-8">
      <div>
        <button
          onClick={prevPage}
          className="bg-[#DDB762] px-3 py-1 text-fff rounded"
        >
          {"<"}
        </button>
      </div>
      <div>
        <div className="flex flex-row-reverse gap-4 items-between">
          {renderDays()}
        </div>
      </div>
      <div>
        <button
          onClick={nextPage}
          className="bg-[#DDB762] px-3 py-1 text-fff rounded"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
export default Component2;
