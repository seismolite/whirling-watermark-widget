import { fabric } from 'fabric';
import _ from 'lodash';
import { JSDOM } from 'jsdom';
import { saveAs } from 'file-saver';

class WhirlingWatermarkWidget {
  constructor(options) {
    this.options = _.defaults(options, {
      text: 'Sample Watermark',
      opacity: 0.5,
      fontSize: 20,
      fontFamily: 'Arial',
      color: '#000'
    });
  }

  applyToImage(imageId) {
    const imageElement = document.getElementById(imageId);
    if (!imageElement) {
      throw new Error('Image element not found.');
    }

    const canvas = new fabric.Canvas(imageElement);
    const text = new fabric.Text(this.options.text, {
      fontSize: this.options.fontSize,
      fontFamily: this.options.fontFamily,
      fill: this.options.color,
      opacity: this.options.opacity
    });

    canvas.add(text);
    canvas.renderAll();

    // Save modified image
    canvas.getElement().toBlob((blob) => {
      saveAs(blob, 'watermarked-image.png');
    });
  }
}

export default WhirlingWatermarkWidget;
