import classNames from 'classnames';
import React, { ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Dialog.module.scss';

type Props = {
    children?: ReactNode;
	isOpen: boolean;
    slideFrom?: 'bottom' | 'top';
    top?: number;
    className?: string;
};

export const Dialog: React.FC<Props> = ({
    children,
	isOpen,
	slideFrom = 'top',
	top = 0,
	className,
}) => {
    
    const ref = useRef(null);

    return (
        <CSSTransition
            nodeRef={ref}
			in={isOpen}
			timeout={300}
            classNames={{
				enter:
					slideFrom === 'bottom'
						? styles.slideFromBottom
						: styles.slideFromTop,
				enterActive:
					slideFrom === 'bottom'
						? styles.slideFromBottom
						: styles.slideFromTop,
				exit: styles.exit,
			}}
			unmountOnExit
        >
			<div
				ref={ref}
				className={classNames(styles.dialog, className, {
					[String(styles.slideFromBottom)]: slideFrom === 'bottom',
					[String(styles.slideFromTop)]: slideFrom === 'top',
				})}
				style={{
					top: `${top}px`,
				}}
			>
				{children}
			</div>
        </CSSTransition>
    )
}