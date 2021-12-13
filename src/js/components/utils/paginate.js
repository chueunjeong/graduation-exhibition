import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  //한 화면에 10개를 보여준다면 2번을 눌렀을 때
  //(2-1)*10 =10번부터
  //10개를 채워서 배열로 반환해준다.
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items)
    .slice(startIndex) // 시작점부터 배열을 자르되
    .take(pageSize) // pageSize만큼의 배열을 취함
    .value(); // lodash wrapper 객체를 regular 배열로 변환
}
