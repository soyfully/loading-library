# [etribeLoader](https://git.etribe.co.kr/commonLibraries/etribeLoader)

![License](https://img.shields.io/npm/l/jquery.spinner.svg)


손쉽게 사용하는 loading spinner 라이브러리. 

이트라이브에 재직하며 프로젝트의 원활한 진행을 위해 제작한 서브 프로젝트입니다.

**Note:** etribeLoader 는 `jquery` dependency를 가지고 있습니다. etribeLoader 가 동작하려면 `jquery` 라이브러리가 미리 인클루드 되어있어야 합니다.

## Basic usage
```html
<!-- css -->
<link href="dist/etribeLoader.min.css"/>
<!-- js -->
<script src="jquery.min.js"></script>
<script src="dist/etribeLoader.min.js"></script>
<script>
    new circleLoader().show();
    new glassCirCleLoader({ renderAt: body, dim: true }).show();
    new dotLoader({ preventScroll: true }).show();
    new lineLoader({ scale: 1.5 }).show();
</script>
```
<br/>

## Loading Spinners

### circleLoader
> 가장 심플하고 친숙한 원형 spinner 

### glassCircleLoader
> 투명한 원형 background 에서 회전하는 spinner

### dotLoader
> 세개의 dot 로 구성된 spinner 

### lineLoader
> 네개의 라인으로 구성된 spinner 
<br/>

## Documentation
### Options

| 속성 | 기능 | 기본값 |
|---|:---|---|
| `renderAt` | loader 가 삽입될 dom 앨리먼트 | `document.body` |
| `dim` | dim 표시여부 | `false` |
| `preventScroll` | loader 가 보일 때 document 의 스크롤 방지여부 | `false` |
| `scale` | loader 의 크기조절 | `1.0` |
| `color` | loader 의 색상 컬러코드 | `#54616a` |
| `dimCssText` | dim 에 적용한 css text |  |
| `loadingText` | loader 하단에 들어갈 text |  |
<br/>

## API

#### show
> etrible loader 보이기

#### hide
> etribe loader 숨기기

```javascript
var loader = new circleLoader({ renderAt: document.querySelector('.area') });
loader.show(); // 화면에 render
loader.hide();
```
