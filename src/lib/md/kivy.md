> A [Python](https://python.ord) based GUI framework for building desktop apps & mobile apps

> [See Docs](https://kivy.org/)

# Examples

```py
from kivy.app import App
from kivy.uix.widget import Widget

class Main(Widget):
  pass

class MainApp(App):
  def build(self):
    return Main()

if __name__ == '__main__':
  MainApp.run()
```
