class Zoom {
  constructor(options) {
    this.elements = [].slice.call(document.querySelectorAll('[data-zoom]')) || [];
    this.callback = !!options && options.callback || new Function();
    this._imgClick = this._imgClick.bind(this);
    this._modalClose = this._modalClose.bind(this);
    this._init();
  }

  _init() {
    this._eventBind();
  }

  _eventBind(){
    this.elements.forEach(item => {
      item.className += ' zoom_item';
      item.addEventListener('click', this._imgClick, false);
    })
  }

  _imgClick(e){
    this.imgTarget = e.target;
    if (document.getElementById('zoom_modal') === null) {
      this._createElement();
    } else {
      this._createElement(true);
    }
  }

  _createElement(type){
    if (type) {
      this.zoomImg.src = this.imgTarget.getAttribute('data-zoom');
      this.zoomAnimate.src = this.imgTarget.src;
      this._showAnimate();
      return;
    }
    this.zoomModal = document.createElement('div');
    this.zoomModal.setAttribute('id', 'zoom_modal');
    this.zoomModal.addEventListener('click', this._modalClose, false);

    this.zoomImg = document.createElement('img');
    this.zoomImg.src = this.imgTarget.getAttribute('data-zoom');
    this.zoomImg.setAttribute('id', 'zoom_img');
    this.zoomModal.appendChild(this.zoomImg);

    this.zoomAnimate = document.createElement('img');
    this.zoomAnimate.src = this.imgTarget.src;
    this.zoomAnimate.setAttribute('id', 'zoom_animate');
    this.zoomModal.appendChild(this.zoomAnimate);

    document.body.appendChild(this.zoomModal);
    this._showAnimate();
  }

  _showAnimate(){


    let imgTargetWidth = this._getStyle(this.imgTarget, 'width').replace(/px/, '') - 0;
    let imgTargetHeight = this._getStyle(this.imgTarget, 'height').replace(/px/, '') - 0;
    let imgTargetTop = this.imgTarget.getBoundingClientRect().top;
    let imgTargetLeft = this.imgTarget.getBoundingClientRect().left;

    this.zoomAnimate.style.width = imgTargetWidth + 'px';
    this.zoomAnimate.style.height = imgTargetHeight + 'px';
    this.zoomAnimate.style.top = imgTargetTop + 'px';
    this.zoomAnimate.style.left = imgTargetLeft + 'px';

    this.imgTarget.style.visibility = 'hidden';
    this.zoomModal.style.display = 'flex';

    let self = this;
    setTimeout(function () {
      self.zoomAnimate.style.width = 1000 + 'px';
      self.zoomAnimate.style.height = 667 + 'px';
      self.zoomAnimate.style.top = imgTargetTop + 100 + 'px';
      self.zoomAnimate.style.left = imgTargetLeft + 100 + 'px';
    }, 0)

    setTimeout(function () {
      self.zoomImg.style.visibility = 'visible';
      self.zoomAnimate.style.visibility = 'hidden';
    }, 500)

  }

  _modalClose(){
    this.zoomModal.style.display = 'none';
    this.imgTarget.style.visibility = 'visible';
    this.zoomImg.style.visibility = 'hidden';
    this.zoomAnimate.style.visibility = 'visible';
  }

  _getStyle(el, attr) {
    if (el && el.currentStyle) {
      return el.currentStyle[attr]
    } else {
      return window.getComputedStyle(el)[attr]
    }
  }

}

window.Zoom = Zoom;
module.exports = Zoom;
