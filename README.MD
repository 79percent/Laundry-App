# Laundry-App

## 技术栈

React Native + redux + react-navigation

```
yarn
```

```
yarn android or yarn ios
```

## 运行时报 useNativeAnimation 警告

原因是 react-native-easy-toast 因为项目没有在维护了，出现的一个 BUG.
[解决方案](https://github.com/crazycodeboy/react-native-easy-toast/pull/81)  
In show function:

```javascript
show(text, duration, callback) {
  this.duration = typeof duration === 'number' ? duration : DURATION.LENGTH_SHORT;
  this.callback = callback;
  this.setState({
    isShow: true,
    text: text,
  });

  this.animation = Animated.timing(
    this.state.opacityValue,
    {
      toValue: this.props.opacity,
      duration: this.props.fadeInDuration,
      useNativeDriver: true,// add this row
    }
  )
  this.animation.start(() => {
    this.isShow = true;
    if(duration !== DURATION.FOREVER) this.close();
  });
}
```

In close function:

```javascript
close( duration ) {
  let delay = typeof duration === 'undefined' ? this.duration : duration;

  if(delay === DURATION.FOREVER) delay = this.props.defaultCloseDelay || 250;

  if (!this.isShow && !this.state.isShow) return;
  this.timer && clearTimeout(this.timer);
  this.timer = setTimeout(() => {
    this.animation = Animated.timing(
      this.state.opacityValue,
      {
        toValue: 0.0,
        duration: this.props.fadeOutDuration,
        useNativeDriver: true,// add this row
      }
    )
    this.animation.start(() => {
      this.setState({
        isShow: false,
      });
      this.isShow = false;
      if(typeof this.callback === 'function') {
        this.callback();
      }
    });
  }, delay);
}
```
