require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


let yeomanImage = require('../images/yeoman.png');

//获取图片数据
let imageDatas = require('../data/imageDatas.json');

//将图片信息装换成图片URL路径信息
imageDatas = (function getImageURL (imageDatasArr){
  for (var i = 0; i < imageDatasArr.length; i++) {
    var item = imageDatasArr[i];
    item.imageURl = require('../images/' + item.fileName)
    console.log(item, item.imageURl);
    imageDatasArr[i] = item;
  }
  return imageDatasArr;
})(imageDatas)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
