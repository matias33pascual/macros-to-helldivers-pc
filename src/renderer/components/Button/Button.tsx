import { JSX } from 'react';
import './Button.scss';

export function Button(props: JSX.IntrinsicElements['button']) {
  return <button type="button" className="button" {...props} />;
}
