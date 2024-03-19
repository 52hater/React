
export default function BosOfficeThead() {

const trs_head = (
  <tr className=" h-10
                    text-center
                   bg-blue-900 text-white">
      <th className="w-14">순위</th>
      <th>영화명</th>
      <th className="w-1/5">매출액</th>
      <th className="w-1/5">관객수</th>
      <th className="w-30">증감율</th>
    </tr>
);

  return (
    <thead>
      {trs_head}
      {/* 컴포넌트가 아니라 함수를 넣으니까 중괄호 */}
  </thead>
  )
}
