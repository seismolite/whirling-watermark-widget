# Whirling Watermark Widget

A lightweight JavaScript library for seamlessly adding watermarks (text or image) to your web elements. Perfect for adding brand presence or copyright notices on images directly in the browser.

## Installation

Install `whirling-watermark-widget` via npm:

```bash
npm install whirling-watermark-widget
```

## Usage

Import `WhirlingWatermarkWidget` into your project:

```javascript
import WhirlingWatermarkWidget from 'whirling-watermark-widget';

const watermarkOptions = {
text: '© Your Company',
opacity: 0.5,
fontSize: 24,
fontFamily: 'Helvetica',
color: 'rgba(255, 255, 255, 0.8)'
};

const watermark = new WhirlingWatermarkWidget(watermarkOptions);

// Apply watermark to an image with ID 'target-image'
watermark.applyToImage('target-image');
```

## Configuration

The `WhirlingWatermarkWidget` constructor accepts an options object with the following properties:

- `text`: The watermark text. Default is 'Sample Watermark'.
- `opacity`: The opacity of the watermark. Default is 0.5.
- `fontSize`: The font size of the watermark text. Default is 20.
- `fontFamily`: The font family of the watermark text. Default is 'Arial'.
- `color`: The color of the watermark text. Default is '#000'.

## License

This project is licensed under the MIT License.

Please replace any \\` symbols in your code snippets with \\` to ensure proper formatting in markdown.
