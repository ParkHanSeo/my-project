import classNames from 'classnames';
import React, { ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Drawer.module.scss';

type Props = {
    children?: ReactNode;
	isOpen: boolean;
	slideFrom?: 'left' | 'right';
	top?: number;
	className?: string;
};

export const Drawer: React.FC<Props> = ({
	children,
	isOpen,
	slideFrom = 'right',
	top = 0,
	className,
}) => {
    console.log(slideFrom);
	const ref = useRef(null);

	return (
		<CSSTransition
			nodeRef={ref}
			in={isOpen}
			timeout={300}
			classNames={{
				enter:
					slideFrom === 'left'
						? styles.enterSlideFromLeft
						: styles.enterSlideFromRight,
				enterActive:
					slideFrom === 'left'
						? styles.enterActiveSlideFromLeft
						: styles.enterActiveSlideFromRight,
				exit: styles.exit,
			}}
			unmountOnExit
		>
			<div
				ref={ref}
				className={classNames(styles.drawer, className, {
					[String(styles.slideFromLeft)]: slideFrom === 'left',
					[String(styles.slideFromRight)]: slideFrom === 'right',
				})}
				style={{
					top: `${top}px`,
				}}
			>
				{children}
			</div>
		</CSSTransition>
	);
};