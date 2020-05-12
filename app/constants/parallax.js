import { scalingUtils, dimensions } from '@styles';

export const BACKGROUND_IMAGE_HEIGHT = scalingUtils.scale(200);
export const BACKGROUND_IMAGE_CONTENT_HEIGHT = scalingUtils.scale(25);
export const TRANSLATE = BACKGROUND_IMAGE_HEIGHT - BACKGROUND_IMAGE_CONTENT_HEIGHT + dimensions.indent * 6; //eslint-disable-line
export const TABS_HEIGHT = scalingUtils.scale(150);
export const GALLERY_IMAGE_HEIGHT = scalingUtils.verticalScale(87);
export const GALLERY_IMAGE_WIDTH = scalingUtils.scale(101);
export const ITEM_HEIGHT = scalingUtils.scale(130);
