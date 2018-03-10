import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import ReactDOM from 'react-dom'

export default class Content extends React.PureComponent {
  render() {
    return <div ref={(el) => this.el = el} dangerouslySetInnerHTML={{__html: this.props.html}} />
  }

  reRender() {
    this.images = this.el.getElementsByTagName('img')
    this.containers = this.containers || []
    console.log('test', this.images);

    for (let i = 0, l = this.images.length; i < l; i++) {
      const image = this.images[i]
      const container = document.createElement('div')
      this.containers.push(container)

      ReactDOM.render((
        <ImageZoom
          image={{
            src: image.src,
            alt: image.alt,
          }}
          zoomImage={{
            src: image.src,
            alt: image.alt,
            className: 'zoom-img'
          }}
          shouldRespectMaxDimension={true}
        />
      ), container)

      image.parentElement.insertBefore(container, image)
      image.style.display = 'none'
    }
  }

  componentDidMount() {
    this.reRender()
  }

  componentDidUpdate() {
    this.reRender()
  }

  componentWillUnmount() {
    if (this.containers && this.containers.length) {
      this.containers.forEach((container) => {
        ReactDOM.unmountComponentAtNode(container)
      })
    }
  }
}
