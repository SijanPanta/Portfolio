import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface TailwindLogoProps {
  className?: string; // Optional custom className for styling
}

export const TailwindLogo: React.FC<TailwindLogoProps> = ({ className }) => {
  const { activeTheme } = useTheme();

  return (
    <div className={`logo-container ${className || ''}`}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 256 154"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Tailwind CSS Logo"
        role="img"
      >
        <path
          d="M128 0C93.867 0 74.24 18.347 68.053 55.04C79.573 36.693 92.587 30.347 107.093 35.893C115.04 39.253 120.533 45.653 126.293 52.32C136.347 63.893 148.693 77.44 176.16 77.44C210.293 77.44 229.92 59.093 236.107 22.4C224.587 40.747 211.573 47.093 197.067 41.547C189.12 38.187 183.627 31.787 177.867 25.12C167.813 13.547 155.467 0 128 0ZM68.053 77.44C33.92 77.44 14.293 95.787 8.106 132.48C19.626 114.133 32.64 107.787 47.147 113.333C55.093 116.693 60.587 123.093 66.347 129.76C76.4 141.333 88.747 154.88 116.213 154.88C150.347 154.88 169.973 136.533 176.16 99.84C164.64 118.187 151.627 124.533 137.12 118.987C129.173 115.627 123.68 109.227 117.92 102.56C107.867 90.987 95.52 77.44 68.053 77.44Z"
          fill={activeTheme === 'light' ? '#000000' : '#FFFFFF'} // Black in light mode, white in dark mode
        />
      </svg>

      <p
        className={`logo-text ${activeTheme === 'light' ? 'text-black' : 'text-white'}`}
      >
        Tailwind CSS
      </p>
    </div>
  );
};

export default TailwindLogo;
