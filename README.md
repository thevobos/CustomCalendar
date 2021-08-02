# React-Native-Custom-Calendar-Modal-Android-Ios
For a project I was doing, I needed to write a common structure for android and ios, and I created an easy structure for it. You can easily use it in your projects.

![](	https://img.shields.io/github/forks/thevobos/CustomCalendar)  ![](https://img.shields.io/github/stars/thevobos/CustomCalendar) ![](https://img.shields.io/github/issues/thevobos/CustomCalendar)

### import your project

```javascript
import CustomCalendar  from "@thevobos/CustomCalendar";
```

```javascript
const [modalVisible, setModalVisible] = React.useState(false);
```

```javascript
<CustomCalendar visible={modalVisible} onChange={(result)=> console.log(result) } onClose={(response)=>setModalVisible(response)} />
```
