import React, { JSX } from 'react';
import './Input.scss';

interface InputProps {
  append?: React.ReactNode;
  appendPosition?: 'start' | 'end';
  focused?: boolean;
  hiddenCaret?: boolean;
}

export function Input({
  append,
  appendPosition,
  focused,
  hiddenCaret,
  ...rest
}: JSX.IntrinsicElements['input'] & InputProps) {
  const appendClass =
    appendPosition === 'start'
      ? 'input-container--append-start'
      : 'input-container--append-end';

  const focusedClass = focused ? 'input-container--focused' : '';

  const hiddenCaretClass = hiddenCaret ? 'input-container--hidden-caret' : '';

  return (
    <div
      className={`input-container ${appendClass} ${focusedClass} ${hiddenCaretClass}`}
    >
      {appendPosition === 'start' && <button type="button">{append}</button>}
      <input {...rest} />
      {appendPosition === 'end' && <button type="button">{append}</button>}
    </div>
  );
}
