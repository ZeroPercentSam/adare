import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export default function Button({
    children,
    href,
    onClick,
    variant = 'primary',
    className = '',
    type = 'button',
    disabled = false,
}: ButtonProps) {
    const baseClassName = `${styles.button} ${styles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={baseClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={baseClassName}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
