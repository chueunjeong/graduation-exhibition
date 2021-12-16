import React, { useState } from "react";
import Pagination from "../components/Pagination";
import { paginate } from "../components/utils/paginate";

const VisitorsNameList = (props) => {
  const [nameListInfo, setNameListInfo] = useState({
    nameList: props.visitors,
    pageSize: 3, // 한 페이지에 보여줄 아이템(영화목록) 개수
    currentPage: 1, // 현재 활성화된 페이지 위치
  });

  const handlePageChange = (page) => {
    setNameListInfo({ ...nameListInfo, currentPage: page });
  };

  const { nameList, pageSize, currentPage } = nameListInfo;
  const nameListOnPage = paginate(nameList, currentPage, pageSize);

  const NameListLength = nameList.length;

  const pageNum = Math.ceil(NameListLength / pageSize);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-8 p-4 guestbook-name-list ">
          <div className="row text-center px-1">
            <div className="col-6 border-r border-b p-2">이름</div>
            <div className="col-6 border-b p-2">방문 일자</div>
          </div>
          {nameListOnPage.map((visitor) => (
            <div className="row text-center px-1" key={visitor.id}>
              <div className="col-6 border-r p-2">{visitor.visitorName}</div>
              <div className="col-6 p-2">{visitor.visitDate}</div>
            </div>
          ))}

          <Pagination
            NameListLength={NameListLength}
            pageNum={pageNum}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default VisitorsNameList;
