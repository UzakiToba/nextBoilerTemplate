import React from 'react';

import {
  STYLE_COLOR_BASE_FONT,
  STYLE_COLOR_BASE_BACKGROUND
} from '@/styles/setting/color';

export const base = (): JSX.Element => {
  // font-family: 'Roboto Slab', Garamond, 'Times New Roman', '游明朝', 'Yu Mincho', '游明朝体', 'YuMincho', 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'HiraMinProN-W3', 'HGS明朝E', 'ＭＳ Ｐ明朝', 'MS PMincho', serif;
  return (
    <style jsx global>{`
      html {
        font-family: -apple-system, 'Meiryo UI', 'メイリオ',
          'BlinkMacSystemFont', Avenir, 'Open Sans', 'Helvetica Neue', Helvetica,
          Arial, Verdana, Roboto, '游ゴシック', 'Yu Gothic', '游ゴシック体',
          'YuGothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Meiryo,
          'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
        height: 100%;
        font-size: 16px;
        color: ${STYLE_COLOR_BASE_FONT};
        background-color: ${STYLE_COLOR_BASE_BACKGROUND};
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      caption {
        text-align: left;
      }
      br {
        letter-spacing: 0;
      }
      ul,
      ol {
        padding-left: 1.5em;
      }
      dl {
        padding-left: 1em;
      }
    `}</style>
  );
};
