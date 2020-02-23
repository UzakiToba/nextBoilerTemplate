import React from 'react';

export const normalize = (): JSX.Element => (
  <style jsx global>{`
    html {
      box-sizing: border-box;
      line-height: 1.15;
      font-weight: 500;
      -webkit-text-size-adjust: 100%;
      font-feature-settings: 'palt';
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    ::before,
    ::after {
      text-decoration: inherit;
      vertical-align: inherit;
    }

    body {
      margin: 0;
    }
    main {
      display: block;
    }

    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }

    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }

    pre {
      font-family: monospace, monospace;
      font-size: 1em;
    }

    a {
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    a:active,
    a:hover,
    a:focus {
      outline-width: 0;
    }

    a,
    area,
    button,
    [role='button'],
    input:not([type='range']),
    label,
    select,
    summary,
    textarea {
      -ms-touch-action: manipulation;
      touch-action: manipulation;
    }

    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      text-decoration: underline dotted;
    }

    b,
    strong {
      font-weight: bolder;
    }

    code,
    kbd,
    samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }

    small {
      font-size: 80%;
    }

    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    img {
      border-style: none;
      vertical-align: bottom;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      margin: 0;
      font: inherit;
      color: inherit;
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      background-color: transparent;
      border-style: none;
      border-radius: 0;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    textarea {
      overflow: auto;
      resize: vertical;
    }

    button,
    input {
      overflow: visible;
    }

    button,
    select {
      text-transform: none;
    }

    br {
      letter-spacing: 0;
    }

    ul,
    ol {
      margin: 0;
      padding: 0;
    }

    ul,
    ol,
    li {
      list-style-position: outside;
    }

    select {
      -moz-appearance: none;
      -webkit-appearance: none;
    }

    select::-ms-expand {
      display: none;
    }

    select::-ms-value {
      color: currentColor;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
      -webkit-appearance: button;
      border: none;
      padding: 0;
    }

    button::-moz-focus-inner,
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }

    ::-moz-selection {
      background-color: #b3d4fc;
      color: #fff;
      text-shadow: none;
    }

    ::selection {
      background-color: #b3d4fc;
      color: #fff;
      text-shadow: none;
    }

    button:-moz-focusring,
    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring {
      outline: 1px dotted ButtonText;
    }

    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }

    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }

    progress {
      vertical-align: baseline;
    }

    [type='checkbox'],
    [type='radio'] {
      box-sizing: border-box;
      padding: 0;
    }

    ::-webkit-input-placeholder {
      color: inherit;
      opacity: 0.54;
    }

    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }

    :invalid {
      box-shadow: none;
    }

    :-moz-submit-invalid {
      box-shadow: none;
    }

    :-moz-ui-invalid {
      box-shadow: none;
    }

    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
      height: auto;
    }

    [type='search'] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }

    [type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }

    details {
      display: block;
    }

    summary {
      display: list-item;
    }

    template {
      display: none;
    }

    [hidden] {
      display: none;
    }
  `}</style>
);
