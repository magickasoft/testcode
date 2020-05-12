import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Config from 'react-native-config';
import { Image, ImageBackground, PixelRatio, Dimensions } from 'react-native';
import { dark, light } from './mapStyles';

const deviceWidth = Dimensions.get('window').width;

const isRetina = PixelRatio.get() >= 2;

const defaultMapScale = () => (isRetina ? 2 : 1);

const values = (obj) => (Object.keys(obj).map((key) => obj[key]));

const MAP_THEMES = { dark, light };

const IMAGE_FORMATS = {
  PNG: 'png',
  PNG32: 'png32',
  GIF: 'gif',
  JPG: 'jpg',
  JPG_BASELINE: 'jpg-baseline'
};

const MAP_TYPES = {
  ROADMAP: 'roadmap',
  SATELLITE: 'satellite',
  TERRAIN: 'terrain',
  HYBRID: 'hybrid'
};

const MAP_THEMES_VALUES = Object.keys(MAP_THEMES);
const IMAGE_FORMATS_VALUES = values(IMAGE_FORMATS);
const MAP_TYPES_VALUES = values(MAP_TYPES);

const { source, ...imagePropTypes } = Image.propTypes;

/**
 * @see https://developers.google.com/maps/documentation/staticmaps/intro#Overview
 * @example: http://staticmapmaker.com/google/
 */
export default class GoogleStaticMap extends Component {
  static RootUrl = 'https://maps.googleapis.com/maps/api/staticmap';

  static ImageFormats = IMAGE_FORMATS;

  static MapTypes = MAP_TYPES;

  static MapThemes = MAP_THEMES;

  static propTypes = {
    ...imagePropTypes,
    apiKey: PropTypes.string,
    format: PropTypes.oneOf(IMAGE_FORMATS_VALUES),
    hasCenterMarker: PropTypes.bool,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    mapType: PropTypes.oneOf(MAP_TYPES_VALUES),
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    scale: PropTypes.number,
    size: PropTypes.shape({ height: PropTypes.number.isRequired, width: PropTypes.number.isRequired }),
    theme: PropTypes.oneOf(MAP_THEMES_VALUES),
    zoom: PropTypes.number
  };

  static defaultProps = {
    apiKey: Config.DIRECTION_API_KEY,
    format: IMAGE_FORMATS.PNG,
    hasCenterMarker: false,
    mapType: MAP_TYPES.ROADMAP,
    onLoad: () => {},
    onError: () => {},
    scale: defaultMapScale(),
    size: { width: Math.floor(deviceWidth), height: Math.floor(deviceWidth * 0.5) },
    theme: 'light',
    zoom: 13
  };

  get staticMapUrl() {
    const { latitude, longitude, zoom, size, scale, format, mapType } = this.props;
    const { width, height } = size;
    const rootUrl = this.constructor.RootUrl;

    // eslint-disable-next-line max-len
    return `${rootUrl}?center=${latitude},${longitude}&zoom=${zoom}&scale=${scale}&size=${width}x${height}&maptype=${mapType}&format=${format}&${this.markerParams}&${this.mapTheme}&${this.apiKeyParam}`;
  }

  get mapTheme() {
    const { theme } = this.props;

    return MAP_THEMES[theme];
  }

  get markerParams() {
    const { latitude, longitude, hasCenterMarker } = this.props;

    const markerParams = `markers=${latitude},${longitude}`;
    return hasCenterMarker ? markerParams : '';
  }

  get apiKeyParam() {
    const { apiKey } = this.props;

    return apiKey ? `key=${apiKey}` : '';
  }

  handleLoad = () => {
    const { onLoad } = this.props;
    onLoad();
  };

  handleError = () => {
    const { onError } = this.props;
    onError();
  };

  render() {
    const { style, size, children } = this.props;
    return (
      <ImageBackground
        style={[style, size]}
        source={{ uri: this.staticMapUrl }}
        onError={this.handleError}
        onLoad={this.handleLoad}
      >
        {children}
      </ImageBackground>
    );
  }
}
