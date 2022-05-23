---
slug: css-flex-grid
title: CSS Flex & Grid
authors: [StefanYou]
tags: [css, flex, grid]
---


# Flex & Grid

### Flex

- 컨텐츠의 높이 만큼만 height를 설정하는 float와 다르게 flex는 flex items들 끼리 같은 높이를 유지한다.

- flex vs inline-flex
  - flex container가 block인지 inine인지 설정

```css
.flex-container {
  display: flex;
  /* display: inline-flex; */
}
```

- flex-wrap

  - 컨테이터보다 아이템들의 메인축 방향의 크기가 커졌을 경우에 줄바꿈 여부 설정
  - 기본값: nowrap - 줄바꿈 하지 않음
  - wrap: 줄바꿈

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  /* flex-wrap: nowrap; */
}
```

- flex-flow
  - flex-direction + flex-wrap
  - 예시) `flex-flow: row wrap;`

```css
.flex-container {
  flex-flow: row wrap;
}
```

- `flex-direction`: `row | column`
  - `메인축(main axis)`의 방향 정의

- `justify가` 들어간 속성은 `메인축(main axis)`, `align`이 들어간 속성은 `수직축(cross axis)`에 대한 정렬을 의미함

- justify-content (메인축 방향 정렬)
  - flex-start (default)
  - flex-end
  - center
  - space-between
  - space-around
  - space-evenly (IE, Edge x)

- align-items (수직축 방향 정렬)
  - stretch (default)
  - flex-start
  - flex-end
  - center
  - baseline (text-baseline)

- align-content (여러 행 정렬)

>줄바뀜이 일어난 상황에서 사용 (flex-wrap: wrap)

- stretch (default)
- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly

### Grid

... 작성중 ... 
