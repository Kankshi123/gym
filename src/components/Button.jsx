// src/components/Button.jsx
import { useRef } from 'react';
import './Button.css';

export function Button({
  children,
  variant = 'primary',
  size = '',
  className = '',
  onClick,
  type = 'button',
  href,
  ...props
}) {
  const btnRef = useRef(null);

  const handleClick = (e) => {
    // Ripple
    const btn = btnRef.current;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      ripple.classList.add('btn-ripple');
      ripple.style.cssText = `width:${size}px;height:${size}px;top:${y - size / 2}px;left:${x - size / 2}px`;
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    }
    onClick?.(e);
  };

  const cls = `btn btn-${variant} ${size ? `btn-${size}` : ''} ${className}`.trim();

  if (href) {
    return (
      <a ref={btnRef} href={href} className={cls} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button ref={btnRef} type={type} className={cls} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
