1. css

```
box-sizing: border-box;
object-fit: cover / contain / fill;
background: linear-gradient(to bottom, #f9f9f9, #f1f1f1);

display: grid;
grid-templates-columns: 1fr 1fr;
gap: 10px 20px (행별 10px 열별 20xp 떨어뜨려줌)

nth-of-type 선택자
ex)
  ul {
    width: 1200px;
    display: grid;
    grid-templates-columns: 1fr 1fr;
    gap: 10px 20px;
  }

  li:nth-of-type(3) {   // li 요소 grid 중 3 번째 요소를
    grid-column: 1 / span 2;  // 2개의 열을 차지하게 해줌
  }



// 안내 문구 0.5s 후 뜨기
.menu-left .btn.load::before {
  content: "파일 업로드";
  position: absolute;
  top: 37px;
  left: 7px;
  width: 85px;
  background-color: #ffffff;
  color: #333;
  padding: 7px;
  border: 1px solid #cccccc;
  border-radius: 4px;

  z-index: -1; // 이거 안해주면 hover 시에 뜨는 애만 hover 해도 뜸
  opacity: 0;
}

.menu-left .btn.load:hover::before {
  z-index: 2;
  opacity: 1;
  transition-delay: 0.5s;
}
```

2. html

```
<section></section>
```
