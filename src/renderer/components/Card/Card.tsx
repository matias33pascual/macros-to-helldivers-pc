import React from 'react';
import './Card.scss';

interface CardProps {
  children: React.ReactNode;
  title: string;
}

export function Card({ children, title }: CardProps) {
  return (
    <div className="card">
      <h4>{title}</h4>
      {children}
    </div>
  );
}
