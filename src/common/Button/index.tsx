import * as React from 'react';
import classNames from 'classnames';

type ButtonOptionalPropsType = {
    className?: string;
    isDisabled?: boolean;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'reset' | 'submit';
};

const Button: React.FunctionComponent<ButtonOptionalPropsType> = ({
    onClick,
    className = '',
    type = 'button',
    children = null,
    isDisabled = false,
}) => (
    <button
        type={type}
        onClick={onClick}
        disabled={isDisabled}
        className={classNames(`button ${className}`, {
            'button--disabled': isDisabled,
        })}
    >
        {children}
    </button>
);

export default Button;
