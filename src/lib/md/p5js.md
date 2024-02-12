> A [Java](https://www.java.com/en/) library for creating visualizations

> [See Docs](https://www.java.com/en/)

# Examples

```java
/**
 * Mouse 2D.
 *
 * Moving the mouse changes the position and size of each box.
 */

void setup() {
  size(640, 360);
  noStroke();
  rectMode(CENTER);
}

void draw() {
  background(51);
  fill(255, 204);
  rect(mouseX, height/2, mouseY/2+10, mouseY/2+10);
  fill(255, 204);
  int inverseX = width-mouseX;
  int inverseY = height-mouseY;
  rect(inverseX, height/2, (inverseY/2)+10, (inverseY/2)+10);
}
```