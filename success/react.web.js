/* eslint-disable import/no-extraneous-dependencies -- It's part of the tests */
import React from 'react';

import OtherComponent from './other';
import styles from './react.module.css';

const Component = () => (
	<div className={styles.aClassName}>
		<span />
		<OtherComponent />
		Hello World
	</div>
);

export default Component;
