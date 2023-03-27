import styles from '../css/Phase1.module.css';

function Content({ answerArr, checkArr }) {
  // answerArr와 checkArr을 받아와서 content 변수에 map 함수를 이용하여 새로운 배열을 생성한다.
  const content = answerArr.map((row, i) => {
    // row와 i를 받아와서 spans 변수에 map 함수를 이용하여 새로운 배열을 생성한다.
    const spans = row.map((char, j) => {
      // checkArr의 i, j 위치에 따라서 color 변수에 적절한 색상 값을 할당한다.
      const color =
        checkArr[i][j] === 'O'
          ? '#2BAE66'
          : checkArr[i][j] === 'C'
          ? '#ebb20a'
          : '#90949d';

      // span 태그를 생성하고, style 속성을 이용하여 color 변수에 할당된 색상으로 배경색을 지정한다.
      return (
        <span
          className={styles.content}
          style={{ backgroundColor: color }}
          key={`${i}-${j}`}
        >
          {char}
        </span>
      );
    });

    // div 태그를 생성하고, display 속성을 이용하여 가운데 정렬을 한다.
    return (
      <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
        {spans}
      </div>
    );
  });

  // content 변수에 저장된 배열을 div 태그로 감싸서 반환한다.
  return <div style={{ marginTop: '39px', marginRight: '7px' }}>{content}</div>;
}

export default Content;
