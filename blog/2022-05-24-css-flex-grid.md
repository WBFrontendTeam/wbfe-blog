---
slug: css-flex-grid
title: CSS Flex & Grid
authors: [stefan]
tags: [css, flex, grid]
---

# Flex & Grid

## Flex

:::tip

컨텐츠의 높이 만큼만 height를 설정하는 float와 다르게 flex는 flex items들 끼리 같은 높이를 유지한다.

:::

1. flex vs inline-flex

- flex container가 block인지 inine인지 설정

```css
.flex-container {
  display: flex;
  /* display: inline-flex; */
}
```

2. flex-wrap

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

3. flex-flow

- flex-direction + flex-wrap
- 예시) `flex-flow: row wrap;`

```css
.flex-container {
  flex-flow: row wrap;
}
```

:::tip

`flex-direction`: `row | column`

- `메인축(main axis)`의 방향 정의
- `justify가` 들어간 속성은 `메인축(main axis)`, `align`이 들어간 속성은 `수직축(cross axis)`에 대한 정렬을 의미함

:::

4. justify-content (메인축 방향 정렬)

- flex-start (default)
- flex-end
- center
- space-between
- space-around
- space-evenly (IE, Edge x)

5. align-items (수직축 방향 정렬)

- stretch (default)
- flex-start
- flex-end
- center
- baseline (text-baseline)

6. align-content (여러 행 정렬)

>줄바뀜이 일어난 상황에서 사용 (flex-wrap: wrap)

- stretch (default)
- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly

7. flex-basis

>flex-basis는 flex아이템의 기본 크기를 설정함.
>flex-direction: row -> 너비
>flex-direction: column -> 높이

```css
.item {
  flex-basis: 100px;
}
/* width가 100px 이하인 item들은 100px로, 100px 이상인 item들은 그대로 유지  */
```

:::tip

width를 100px로 설정하면 100px이 안되는 아이템들, 100px을 넘는 아이템들도 모두 100px로 맞춰진다.

:::

8. flex-grow

>유연하게 늘리기
>flex-grow는 아이템이 flex-basis의 값보다 커질 수 있는지를 결정하는 속성.

```css
.item {
  flex-grow: 1;
  /* flex-grow: 0;  <default> */
}
```

- flex-grow에 들어가는 숫자의 의미는 아이템들의 flex-basis를 제외한 여백 부분을 `flex-grow에 지정된 숫자의 비율`로 나누어 가진다.

```css
.item:first-child {
  flex-grow: 1;
}

.item:nth-child(2) {
  flex-grow: 3;
}

/* 첫번째 자식의 컨텐츠를 제외한 여백을 1만큼의 비율, 두번쨰 자식의 컨텐츠를 제외한 여백을 3만큼의 비율로 늘린다. */
```

9. flex-shrink

>유연하게 줄이기
>flex-shrink 아이템이 flex-basis의 값보다 작아질 수 있는지를 결정하는 속성.

```css
.item {
  flex-shrink: 1; /* <default> */
}
```

```css
.item {
  flex-shrink: 0; /* 안 줄어들게 하기 */
}
```

:::tip

flex-basis, flex-grow, flex-shrink는 같이 다니는 세트이다. 따라서 셋을 함께 축약형으로 정의하여 사용할 수 있다.

:::

## Grid

... 작성중 ...
