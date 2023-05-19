1. css

```
box-sizing: border-box;
object-fit;
background: linear-gradient(to bottom, #f9f9f9, #f1f1f1);

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
  
  z-index: -1;
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
