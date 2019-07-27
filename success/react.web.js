/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import OtherComponent from './other';
import styles from './react.module.css';

export default function Component() {
	return (
		<div className={styles.aClassName}>
			<span />
			<OtherComponent />
			Hello World
		</div>
	);
}
