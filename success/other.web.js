/* eslint-disable import/no-extraneous-dependencies -- It's part of the tests */
import React from 'react';

import styles from './react.module.css';

const OtherComponent = () => (
	<div className={styles.aClassName}>
		<span />
		Hello World
	</div>
);

export default OtherComponent;
